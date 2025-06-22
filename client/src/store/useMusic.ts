/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import type { Album, Song } from "@/types";
import { axiosInstance } from "@/lib/axios";

interface MusicStore {
  songs: Song[];
  albums: Album[];
  error: string | null;
  isLoading: boolean;
  fetchAlbums: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
  songs: [],
  albums: [],
  error: null,
  isLoading: false,
  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/albums");
      set({ albums: response.data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
