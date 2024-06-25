import './../../css/modules/service.css';
import ServiceModel from "../../models/serviceModel.ts";

export default (service: ServiceModel): string => {
    return `
    <article class="service">
        <figure>
            <img src="${ service.imageSrc }" alt="${ service.imageAlt }" />
        </figure>
        <section>
            <h3>${ service.title }</h3>
            <p>${ service.description }</p>
        </section>
    </article>
    `;
}