import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

import toast from "react-hot-toast";
import { data } from "react-router-dom";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoginIng: false,
  isUpdatingProfile: false,

  isCheckedAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth controller", error);
    } finally {
      set({ isCheckedAuth: false });
    }
  },

  signup: async (data) => {
    try {
      set({ isSigningUp: true });
      const res = await axiosInstance.post("/auth/signup", data);
      toast.success("Account created successfully");

      set({ authUser: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoginIng: true });

    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoginIng: false });
    }
  },

  logout: async () => {
    set();
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
