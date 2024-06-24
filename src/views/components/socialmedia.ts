import './../../css/modules/social-media.css';

import Instagram from "../icons/instagram.ts";
import Linkedin from "../icons/linkedin.ts";

export default (): string => {
    return `
    <nav class="social-media">
        <ul>
            <li class="icon">
                <a href="https://www.instagram.com/rockandrollservices/" title="Instagram"></a>
                ${ Instagram() }
            </li>
            <li class="icon">
                <a href="https://www.linkedin.com/in/james-q-barclay/" title="Linkedin"></a>
                ${ Linkedin() }
            </li>
        </ul>
    </nav>
    `;
}