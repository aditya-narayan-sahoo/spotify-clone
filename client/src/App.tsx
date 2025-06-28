import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Admin from "./pages/Admin";
import Album from "./pages/Album";
import AuthCallback from "./pages/AuthCallback";

import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signInForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/albums/:albumId" element={<Album />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
