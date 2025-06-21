import User from "../models/user.model.js";
/**
 * Handles the auth callback from Clerk. If the user doesn't exist, it creates the user
 * with the provided information from Clerk.
 *
 * @param {import("express").Request} req - The Express request object
 * @param {import("express").Response} res - The Express response object
 * @returns {Promise<void>} Resolves when the user is created successfully
 */
export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    const existingUser = await User.findOne({ clerkId: id });
    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }
    const user = await User.create({
      clerkId: id,
      fullName: `${firstName} ${lastName}`,
      imageUrl,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(`Error in auth callback: ${error.message}`);
    res.status(500).json({ message: "Internal server error", error });
  }
};
