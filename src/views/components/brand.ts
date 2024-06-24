import './../../css/modules/brand.css';
import logoImg from './../../images/logo.png';

export default () => {
    return `
     <figure id="brand">
        <img src="${logoImg}" alt="Rock & Roll Services, established 2018." />
     </figure>
    `;
}