export default class App {

    private static instance: App;

    public name: string = "App";

    private constructor() {
    }

    public static getInstance() {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

}