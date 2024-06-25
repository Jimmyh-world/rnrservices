import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import {defineConfig} from "vite";

export default defineConfig({
    base: "/rnrservices/",
    plugins: [
        vitePluginFaviconsInject('./src/images/logo.png'),
    ]
});