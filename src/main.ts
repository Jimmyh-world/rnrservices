import './css/style.css';
import App from "./app.ts";

const rootElement = document.getElementById('app');

if (!rootElement) {
    console.error("Root element is missing!\n");
} else {
    const app: App = new App(rootElement);
    app.run();
}