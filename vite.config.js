import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// import { Buffer } from "buffer";

export default defineConfig({
	plugins: [react(), nodePolyfills({ protocolImports: true })],
	// define: {
	// 	"global.Buffer": Buffer,
	// 	"process.env": {},
	// },
});
