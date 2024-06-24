import './../../css/modules/header.css';
import Logo from "./logo.ts";

export default (): string => {
    return `
    <header id="header">
        ${ Logo() }
        <nav class="navigation">
            <ul>
                <li><a title="Home" href="#">Home</a></li>
                <li><a title="Services" href="#services">Services</a></li>
            </ul>
        </nav>
    </header>
    `;
}