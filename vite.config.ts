import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/resume/" : "/",
  plugins: [react()],
  server: {
    port: 3000, // Сохраняем привычный порт React
  },
}));
