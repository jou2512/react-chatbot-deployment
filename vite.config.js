import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  define: {
    "import.meta.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: "VF_",
  server: {
    port: 3006,
  },
};
