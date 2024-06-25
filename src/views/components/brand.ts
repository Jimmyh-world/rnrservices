import './../../css/modules/brand.css';
import logoImage from './../../images/logo.png';

export default () => {
    return `
     <figure id="brand">
        <img src="${logoImage}" alt="Rock & Roll Services, established 2018." />
     </figure>
    `;
}