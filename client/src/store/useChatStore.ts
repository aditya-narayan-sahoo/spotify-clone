/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";

interface ChatStore {
  users: any[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
  error: string | null;
}

export const useChatStore = create<ChatStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/users");
      set({ users: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  isLoading: false,
  error: null,
}));
