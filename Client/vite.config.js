import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/createPost": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/register": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/getUserData": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/getUsers": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/updateProfile": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/getMessages": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      "/socket.io": {
        target: "ws://localhost:3000",
        ws: true,
      },
    },
  },
  plugins: [react()],
});
