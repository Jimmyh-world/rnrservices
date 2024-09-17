import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import {defineConfig} from "vite";

export default defineConfig(({ mode }) => {
    if (mode === 'development') {
        return {
            base: "/"
        }
    } else {
       return {
           base: "/",
           plugins: [
               vitePluginFaviconsInject('./src/images/logo.png'),
           ]
       }
    }
});