<script setup>

import Mail from "@/components/icons/Mail.vue";
import Phone from "@/components/icons/Phone.vue";
</script>

<template>
  <main id="main">
    <div id="landing">
      <figure id="hero">
        <img src="/hand-in-air.jpg" alt="Hundreds of hands in the air during a concert!" />
      </figure>
      <section>
        <h1>Unleash the Power of Music</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a class="cta" href="#contact" title="Contact">Contact</a>
      </section>
    </div>
    <div id="testimonials">
      <ul>
        <li class="testimonial">
          <h2>“Amazing experience! The concert was fantastic and well-organized.”</h2>
          <p>John Doe</p>
        </li>
        <li class="testimonial">
          <h2>“Amazing experience! The concert was fantastic and well-organized.”</h2>
          <p>John Doe</p>
        </li>
        <li class="testimonial">
          <h2>“Amazing experience! The concert was fantastic and well-organized.”</h2>
          <p>John Doe</p>
        </li>
      </ul>
    </div>
    <div id="services">
      <section>
        <h2 class="section-title">Services</h2>
      </section>
      <ul>
        <li>
          <article class="service">
            <figure>
              <img src="/stage.png" alt="Fireworks during a live concert." />
            </figure>
            <section>
              <h3>Live Concerts</h3>
              <p>Experience the best live performances with top-notch sound and lighting.</p>
            </section>
          </article>
        </li>
        <li>
          <article class="service">
            <figure>
              <img src="/walking-hands.png" alt="People holding hands with their partner during a festival" />
            </figure>
            <section>
              <h3>Music Festivals</h3>
              <p>Join us for unforgettable music festivals featuring top artists and bands.</p>
            </section>
          </article>
        </li>
        <li>
          <article class="service">
            <figure>
              <img src="/security.png" alt="Security guards in the rain." />
            </figure>
            <section>
              <h3>Event planning</h3>
              <p>Let us help you plan the perfect music event with our professional services.</p>
            </section>
          </article>
        </li>
      </ul>
    </div>
    <div id="contact">
      <section>
        <h2 class="section-title">Contact</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.</p>
      </section>
      <address>
        <nav>
          <a class="address-link" href="mailto:#" title="Mail"><Mail />email@outlook.com</a>
          <a class="address-link" href="tel:#" title="Call"><Phone />+46 2045 658 444</a>
        </nav>
      </address>
    </div>
  </main>
</template>
