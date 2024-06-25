import './../css/layouts/home.css';
import Video from "./components/video.ts";
import Brand from "./components/brand.ts";
import ServiceModel from "../models/serviceModel.ts";
import Service from "./components/service.ts";
import Socialmedia from "./components/socialmedia.ts";
import ArrowDownCircle from "./icons/arrowDownCircle.ts";

import image1 from './../images/fireworks-1.jpg';
import image2 from './../images/logistics.jpg';
import image3 from './../images/hand-in-air.jpg';
import image4 from './../images/security-2.jpg';
import image5 from './../images/security-1.jpg';
import image6 from './../images/holding-hands.jpg';

const serviceModels = [
    new ServiceModel("Site operations", "Management for major outdoor events.", image1, "Fireworks during a live concert."),
    new ServiceModel("Logistics", "Artist and crew transport, logistics and runner services.", image2, "Stage with instrument cases, taken by Andre Moura, see: https://www.pexels.com/sv-se/foto/ljus-gryning-man-skymning-2897776/"),
    new ServiceModel("Local knowledge", "Local knowledge for international tours.", image3, "Hands in the air during a live concert."),
    new ServiceModel("Backstage management", "Dressings rooms and backstage management.", image4, "Security guard in the rain."),
    new ServiceModel("Security", "Security operations and management.", image5, "Security guard."),
    new ServiceModel("Care", "Artist, friends and family and VIP services", image6, "People holding hands."),
];

function services(): string {
    let list = `<ul class="grid">`;
    serviceModels.forEach(model => {
        list +=`<li>${ Service(model) }</li>`;
    });
    return list + "</ul>";
}

export default (): string => {
    return `
    <div id="landing">
        ${ Video() }
        <section>
            ${ Brand() }
            <h1>Rock & Roll Services</h1>
            <p>When second best just won't cut it.</p>
            ${ Socialmedia() }
        </section>
        <div class="scroll-down">
            <a href="#services" title="Show our services">What we do</a>
            ${ ArrowDownCircle() }
        </div>
    </div>
    <div id="services" class="page">
        <section class="page--header">
            <h2>Services</h2>
            <p>What we do</p>
        </section>
        ${ services() }
    </div>
    `;
};