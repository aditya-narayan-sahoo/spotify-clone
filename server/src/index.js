import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/albums", albumRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend of the spotify app");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
