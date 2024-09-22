import AppView from "./views/appView.ts";

function init(rootElemID: string): void {
    const root = document.querySelector(rootElemID);

    if (!root) {
        console.error("Root element not found!");
        return;
    }

    AppView.mount(root);

    AppView.events();

}

export default { init };