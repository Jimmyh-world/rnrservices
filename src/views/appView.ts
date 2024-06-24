import './../css/layouts/app.css';
import Header from "./components/header.ts";
import Footer from "./components/footer.ts";

export default (view: string) => {
    return `
    ${ Header() }
    <main>${view}</main>
    ${ Footer() }
    `;
};