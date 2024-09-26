import './style.css';

import App from "./core/App.ts";
import Logger from "./core/utilites/Logger.ts";

const logger = new Logger("Main");

window.onload = () => {

    const root = document.getElementById("app");

    if (!root) {
        logger.error("Root element not found");
        return;
    }

    const app = App.getInstance(root);
    app.run();

};