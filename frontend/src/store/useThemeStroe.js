import {create} from "zustand";


export const useThemeStore = create((set) => ({
    theme:localStorage.getItem("chate-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chate-theme", theme);
        set({ theme });
    },
}));