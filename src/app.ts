import appView from "./views/appView.ts";
import HomeView from "./views/homeView.ts";

export default class App {

    public rootElement: HTMLElement;

    constructor(rootElement: HTMLElement) {
        this.rootElement = rootElement;
    }

    public run(): void {
        const view = HomeView();
        this.updateView(view);
    }

    private clearRootElement(): void {
        while (this.rootElement.firstChild) {
            this.rootElement.removeChild(this.rootElement.firstChild);
        }
    }

    private updateView(view: string): void {
        this.clearRootElement();
        this.rootElement.insertAdjacentHTML('afterbegin', appView(view));
    }

}