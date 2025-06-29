<h1 align="center">✨ Realtime Spotify Application ✨</h1>

![Demo App](/client/public/screenshot-for-readme.png)

## 🎵 Overview

**Realtime Spotify Application** is a feature-rich, full-stack music platform inspired by Spotify. Enjoy seamless music playback, real-time chat, live user activity, and powerful admin controls—all wrapped in a modern, interactive interface.

## 🚩 Features

- 🎸 **Seamless Music Playback:** Play, pause, skip, and revisit your favorite tracks.
- 🔈 **Dynamic Volume Control:** Adjust volume with an intuitive slider.
- 🎧 **Admin Dashboard:** Effortlessly create and manage albums and songs.
- 💬 **Real-Time Chat:** Connect with other listeners as you enjoy music together.
- 👤 **Live User Status:** Instantly see who’s online and what they’re listening to.
- 👀 **Activity Feed:** Discover what others are playing, in real time.
- 📊 **Analytics Dashboard:** Gain insights into listening trends and activity.
- 🚀 **...and much more!** Explore countless interactive features.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aditya-narayan-sahoo/spotify-clone.git
```

### 2. Setup the Backend

1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder with the following variables:

   ```env
   PORT=your_server_port
   MONGODB_URI=your_mongodb_connection_string
   ADMIN_EMAIL=your_admin_email
   NODE_ENV=development_or_production

   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Setup the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` folder with:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_for_frontend
   ```
4. Start the frontend server:
   ```bash
   npm run dev
   ```

### 4. Launch the App

Open your browser and visit the provided local URL to enjoy your real-time Spotify experience! 🎶

## 🌐 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary
- **Authentication:** Clerk
- **Real-time Communication:** Socket.io

## 🤝 Contributing

We welcome contributions! To get started:

1. **Fork** this repository.
2. **Create a new branch** for your feature or fix.
3. **Commit your changes** with clear messages.
4. **Open a Pull Request** describing your changes.

## 📬 Contact

Have questions, feedback, or ideas?  
Reach out: [adityasahoo246@gmail.com](mailto:adityasahoo246@gmail.com)
