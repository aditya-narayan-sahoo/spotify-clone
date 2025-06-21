import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB using Mongoose.
 *
 * - Uses the MONGO_URI environment variable for the connection string.
 * - Sets recommended connection options.
 * - Attaches event listeners for connection status logging.
 * - Throws errors to be handled by the calling application.
 *
 * @async
 * @function connectDB
 * @throws {Error} If MONGO_URI is not defined or connection fails.
 * @returns {Promise<void>} Resolves when the connection is successful.
 *
 */
const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  mongoose.connection.on("connected", () => {
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  });

  mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
