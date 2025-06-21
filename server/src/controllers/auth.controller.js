import User from "../models/user.model.js";
/**
 * Handles the callback from Clerk's OAuth flow. If the user doesn't already
 * exist in the database, it creates a new user with the provided information.
 * @param {import("express").Request} req - The Express request object
 * @param {import("express").Response} res - The Express response object
 * @param {import("express").NextFunction} next - The next middleware to call
 */
export const authCallback = async (req, res, next) => {
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
    next(error);
  }
};
