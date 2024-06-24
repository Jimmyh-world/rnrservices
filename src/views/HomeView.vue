<script setup>

import Mail from "@/components/icons/Mail.vue";
import Phone from "@/components/icons/Phone.vue";
import Text from "@/assets/js/text.js";
import {onMounted, ref} from "vue";

const video = ref(null);

const services = [
  {
    imgSrc: "/stage.png",
    imgAlt: Text('Thousands of hands during a concert.', 'Tusentals händer under en konsert.'),
    title: Text('Live concerts', 'Live konserter'),
    description: Text('Experience the best live performances with top-notch sound and lighting.', 'Upplev de bästa liveframträdandena med förstklassigt ljud och belysning.')
  },
  {
    imgSrc: "/walking-hands.png",
    imgAlt: Text('People holding hands with their partner during a festival.', 'Människor håller sina partner i handen under en festival.'),
    title: Text('Music festivals', 'Musikfestivaler'),
    description: Text('Join us for unforgettable music festivals featuring top artists and bands.', 'Följ med oss på oförglömliga musikfestivaler med toppartister och band.')
  },
  {
    imgSrc: "/security.png",
    imgAlt: Text('Security guards in the rain.', 'Säkerhetsvakter i regnet.'),
    title: Text('Event planning', 'Evenemangsplanering'),
    description: Text('Let us help you plan the perfect music event with our professional services.', 'Låt oss hjälpa dig att planera det perfekta musikevenemanget med våra professionella tjänster.')
  }
];

</script>

<template>
  <main id="main">
    <div id="landing">
      <div id="hero">
        <video loop autoplay="autoplay" muted="muted">
          <source src="/video-1.mp4" type="video/mp4">
          Your browser does not support video!
        </video>
      </div>
      <section>
        <h1>{{ Text('Unleash the Power of Music', 'Frigör Musikens Kraft') }}</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a class="cta" href="#contact" :title="Text('Contact', 'Kontakt')">{{ Text('Contact', 'Kontakt') }}</a>
      </section>
    </div>
    <div id="services">
      <section>
        <h2 class="section-title">{{ Text("Services", "Service") }}</h2>
      </section>
      <ul>
        <li v-for="service of services">
          <article class="service">
            <figure>
              <img :src="`${service.imgSrc}`" :alt="service.imgAlt" />
            </figure>
            <section>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </section>
          </article>
        </li>
      </ul>
    </div>
    <div id="contact">
      <section>
        <h2 class="section-title">{{ Text('Contact', 'Kontakt') }}</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.</p>
      </section>
      <address>
        <nav>
          <a class="address-link" href="mailto:#" :title="Text('Mail', 'Mejla')"><Mail />email@outlook.com</a>
          <a class="address-link" href="tel:#" :title="Text('Call', 'Ring')"><Phone />+46 2045 658 444</a>
        </nav>
      </address>
    </div>
  </main>
</template>
