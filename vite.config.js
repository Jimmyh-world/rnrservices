import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import {defineConfig} from "vite";

export default defineConfig({
    base: "/",
    plugins: [
        vitePluginFaviconsInject('./src/images/logo.png'),
    ]
});