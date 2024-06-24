import './../../css/modules/footer.css';
import Brand from "./brand.ts";
import Logo from "./logo.ts";
import Socialmedia from "./socialmedia.ts";

export default (): string => {
    return `
    <footer id="footer">
        <section>
            ${ Brand() }
            ${ Logo() }
            ${ Socialmedia() }
        </section>
    </footer>
    `;
}