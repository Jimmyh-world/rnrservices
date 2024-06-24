var g=Object.defineProperty;var m=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>m(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const d=()=>`
    <div class="logo">
        <a href="#" title="Rock & Roll Services">Rock & Roll Services</a>
    </div>
    `,p=()=>`
    <header id="header">
        ${d()}
        <nav class="navigation">
            <ul>
                <li><a title="Home" href="#">Home</a></li>
                <li><a title="Services" href="#services">Services</a></li>
            </ul>
        </nav>
    </header>
    `,v="/rnrservices/assets/logo-DuT9ZRHK.png",u=()=>`
     <figure id="brand">
        <img src="${v}" alt="Rock & Roll Services, established 2018." />
     </figure>
    `,f=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',w=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',h=()=>`
    <nav class="social-media">
        <ul>
            <li class="icon">
                <a href="https://www.instagram.com/rockandrollservices/" title="Instagram"></a>
                ${f()}
            </li>
            <li class="icon">
                <a href="https://www.linkedin.com/in/james-q-barclay/" title="Linkedin"></a>
                ${w()}
            </li>
        </ul>
    </nav>
    `,y=()=>`
    <footer id="footer">
        <section>
            ${u()}
            ${d()}
            ${h()}
        </section>
    </footer>
    `,k=t=>`
    ${p()}
    <main>${t}</main>
    ${y()}
    `,S="/rnrservices/assets/video-2-Bl4wbb6H.mp4",$=()=>`
      <video id="video" loop muted autoplay>
        <source src="${S}" type="video/mp4" about="A music festival"></source>
      </video>
    `;class n{constructor(e,s,c,r=null){o(this,"title");o(this,"description");o(this,"imageSrc");o(this,"imageAlt");this.title=e,this.description=s,this.imageSrc=c,this.imageAlt=r??c}}const x=t=>`
    <article class="service">
        <figure>
            <img src="${t.imageSrc}" alt="${t.imageAlt}" />
        </figure>
        <section>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
        </section>
    </article>
    `,j=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>',b="/rnrservices/assets/fireworks-1-vGAvR4xM.jpg",A="/rnrservices/assets/logistics-N3ZNdUjd.jpg",E="/rnrservices/assets/hand-in-air-DMbqlE5D.jpg",R="/rnrservices/assets/security-2-hCUSVeOl.jpg",L="/rnrservices/assets/security-1-DePtG2y6.jpg",M="/rnrservices/assets/holding-hands-DIfvK3GU.jpg",C=[new n("Site operations","Management for major outdoor events.",b,"Fireworks during a live concert."),new n("Logistics","Artist and crew transport, logistics and runner services.",A,"Stage with instrument cases, taken by Andre Moura, see: https://www.pexels.com/sv-se/foto/ljus-gryning-man-skymning-2897776/"),new n("Local knowledge","Local knowledge for international tours.",E,"Hands in the air during a live concert."),new n("Backstage management","Dressings rooms and backstage management.",R,"Security guard in the rain."),new n("Security","Security operations and management.",L,"Security guard."),new n("Care","Artist, friends and family and VIP services",M,"People holding hands.")];function H(){let t='<ul class="grid">';return C.forEach(e=>{t+=`<li>${x(e)}</li>`}),t+"</ul>"}const B=()=>`
    <div id="landing">
        ${$()}
        <section>
            ${u()}
            <h1>Rock & Roll Services</h1>
            <p>When second best just won't cut it.</p>
            ${h()}
        </section>
        <div class="scroll-down">
            <a href="#services" title="Show our services">What we do</a>
            ${j()}
        </div>
    </div>
    <div id="services" class="page">
        <section class="page--header">
            <h2>Services</h2>
            <p>Some of the services that we offer!</p>
        </section>
        ${H()}
    </div>
    `;class D{constructor(e){o(this,"rootElement");this.rootElement=e}run(){const e=B();this.updateView(e)}clearRootElement(){for(;this.rootElement.firstChild;)this.rootElement.removeChild(this.rootElement.firstChild)}updateView(e){this.clearRootElement(),this.rootElement.insertAdjacentHTML("afterbegin",k(e))}}const l=document.getElementById("app");l?new D(l).run():console.error(`Root element is missing!
`);
