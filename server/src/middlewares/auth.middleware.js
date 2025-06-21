import { clerkClient } from "@clerk/express";

/**
 * A middleware that checks if the user is logged in before allowing them to access
 * a route. If the user is not logged in, it returns a 401 status code with a
 * message "Unauthorized - user not logged in". If the user is logged in, it calls
 * the next middleware.
 *
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 * @param {function} next - The next middleware to call
 */
export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res
      .status(401)
      .json({ message: "Unauthorized - user not logged in" });
  }
  next();
};

/**
 * A middleware that checks if the user is an admin before allowing them to access
 * a route. If the user is not an admin, it returns a 403 status code with a
 * message "Forbidden - user is not an admin". If there is an error, it logs the
 * error and returns a 500 status code with a message "Internal server error".
 *
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 * @param {function} next - The next middleware to call
 */
export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: "Forbidden - user is not an admin" });
    }
    next();
  } catch (error) {
    console.log(`Error in requireAdmin: ${error.message}`);
    res.status(500).json({ message: "Internal server error", error });
  }
};
