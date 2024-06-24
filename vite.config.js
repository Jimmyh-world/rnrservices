import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import {defineConfig} from "vite";
import * as path from 'path';

export default defineConfig({
    base: "/rnrservices/",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vitePluginFaviconsInject('./src/images/logo.png'),
    ]
});