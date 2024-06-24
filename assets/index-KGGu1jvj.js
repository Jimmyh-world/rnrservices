var g=Object.defineProperty;var m=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>m(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const d=()=>`
    <div class="logo">
        <a href="/#" title="Rock & Roll Services">Rock & Roll Services</a>
    </div>
    `,p=()=>`
    <header id="header">
        ${d()}
        <nav class="navigation">
            <ul>
                <li><a title="Home" href="/#">Home</a></li>
                <li><a title="Services" href="/#services">Services</a></li>
                <li><a title="Services" href="/#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `,u=()=>`
     <figure id="brand">
        <img src="/logo.png" alt="Rock & Roll Services, established 2018." />
     </figure>
    `,f=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',v=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',h=()=>`
    <nav class="social-media">
        <ul>
            <li class="icon">
                <a href="https://www.instagram.com/rockandrollservices/" title="Instagram"></a>
                ${f()}
            </li>
            <li class="icon">
                <a href="https://www.linkedin.com/in/james-q-barclay/" title="Linkedin"></a>
                ${v()}
            </li>
        </ul>
    </nav>
    `,w=()=>`
    <footer id="footer">
        <section>
            ${u()}
            ${d()}
            ${h()}
        </section>
    </footer>
    `,y=t=>`
    ${p()}
    <main>${t}</main>
    ${w()}
    `,k=()=>`
      <video id="video" loop muted autoplay>
        <source src="/videos/video-2.mp4" type="video/mp4" about="A music festival"></source>
      </video>
    `;class n{constructor(e,o,c,i=null){s(this,"title");s(this,"description");s(this,"imageSrc");s(this,"imageAlt");this.title=e,this.description=o,this.imageSrc=c,this.imageAlt=i??c}}const S=t=>`
    <article class="service">
        <figure>
            <img src="${t.imageSrc}" alt="${t.imageAlt}" />
        </figure>
        <section>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
        </section>
    </article>
    `,$=()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>',x=[new n("Site operations","Management for major outdoor events.","/fireworks-1.jpg","Fireworks during a live concert."),new n("Logistics","Artist and crew transport, logistics and runner services.","/logistics.jpg","Stage with instrument cases, taken by Andre Moura, see: https://www.pexels.com/sv-se/foto/ljus-gryning-man-skymning-2897776/"),new n("Local knowledge","Local knowledge for international tours.","/hand-in-air.jpg","Hands in the air during a live concert."),new n("Backstage management","Dressings rooms and backstage management.","/security-2.jpg","Security guard in the rain."),new n("Security","Security operations and management.","/security-1.jpg","Security guard."),new n("Care","Artist, friends and family and VIP services","/holding-hands.jpg","People holding hands.")];function j(){let t='<ul class="grid">';return x.forEach(e=>{t+=`<li>${S(e)}</li>`}),t+"</ul>"}const L=()=>`
    <div id="landing">
        ${k()}
        <section>
            ${u()}
            <h1>When second best just won't cut it.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s</p>
            ${h()}
        </section>
        <div class="scroll-down">
            <a href="/#services" title="Show our services">What we do</a>
            ${$()}
        </div>
    </div>
    <div id="services" class="page">
        <section class="page--header">
            <h2>Services</h2>
            <p>Some of the services that we offer!</p>
        </section>
        ${j()}
    </div>
    `;class b{constructor(e){s(this,"rootElement");this.rootElement=e}run(){const e=L();this.updateView(e)}clearRootElement(){for(;this.rootElement.firstChild;)this.rootElement.removeChild(this.rootElement.firstChild)}updateView(e){this.clearRootElement(),this.rootElement.insertAdjacentHTML("afterbegin",y(e))}}const l=document.getElementById("app");l?new b(l).run():console.error(`Root element is missing!
`);
