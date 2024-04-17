<script setup>
import NavHeader from "./components/NavHeader.vue";
import Hero from "./components/Hero.vue";
import Speakers from "./components/Speakers.vue";
import Schedule from "./components/Schedule.vue";
import Partners from "./components/Partners.vue";
import Channels from "./components/Channels.vue"
import Team from './components/Team.vue'
import Footer from "./components/Footer.vue";
import OfflineSchedule from "./components/offline/OfflineSchedule.vue";

</script>

<template>
  <NavHeader />

  <main>
    <Hero />

    <offline-schedule />

    <Schedule />
    
    <Speakers />
    
    <Channels />

    <Partners />
    
    <Team />
    
    <Footer />
  </main>
</template>

<style scoped>

</style>
