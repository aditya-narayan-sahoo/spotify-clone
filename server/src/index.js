import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./lib/db.js";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import statRoutes from "./routes/stat.route.js";
import albumRoutes from "./routes/album.route.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config();
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5432;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB max file size
    },
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/albums", albumRoutes);
// error handler
app.use(function (err, req, res, next) {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

app.get("/", (req, res) => {
  res.send("Hello from the backend of the spotify app");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
