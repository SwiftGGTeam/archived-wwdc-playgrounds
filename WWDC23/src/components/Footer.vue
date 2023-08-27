<script setup>
import Container from './Container.vue'
import { useThemeStore } from '../ThemeStore'
import wwdc23PgLogo from '../assets/wwdc23-logo-1.png'
import wwdc23PgDarkLogo from '../assets/wwdc23-logo-dark.png'

const themeStore = useThemeStore()
</script>

<template>
  <footer class="py-5 bg-slate-100 dark:bg-slate-900">
    <container class="flex flex-col items-center justify-between md:flex-row">
      <div class="grow">
        <img :src="themeStore.dark ? wwdc23PgDarkLogo : wwdc23PgLogo" class="h-12 w-auto text-slate-900">
      </div>

      <p className="my-6 text-base text-slate-500 dark:text-slate-400">
        Copyright © <!-- -->2023<!-- -->, 11 ✏️ <span class="text-pink-700">♥️</span>
      </p>
    </container> 

    <container>
      <p className="mt-6 text-sm text-slate-400 dark:text-slate-600">
      This event is not affliated, nor endorsed by Apple, Inc. The Swift logo, Apple Logo are trademarks of Apple Inc., a registered company in the U.S. and other countries. Apple looking Emojis and Memojis, WWDC artworks are copyright of Apple, Inc. All info of attendees (including their image, memoji, nickname, social media link, and logos) and apps listed here are submitted by the attendees joining the event and provided permission for us to add it in the website. We are not endorsing any attendee or apps listed in the site. We don't intend to create any harm or issue by posting any info in the site or using assets unintentionally without any permission. If you have any concerns, feel free to email us zhangsiqi1988[AT]gmail.com.
      </p>
    </container>
    
  </footer>
</template>