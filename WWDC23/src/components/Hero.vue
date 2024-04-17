<script setup>
  import backgroundImg from "../assets/background.jpg"
  import backgroundDarkImg from "../assets/background-dark-1.png"
  import { useI18n } from "vue-i18n"
  import Container from "./Container.vue"
  import { useThemeStore } from "../ThemeStore";
  const { t } = useI18n();

  const metaInfo = [
    ['speakersLabel', 'speakersValue'],
    ['peopleLabel',   'peopleValue'],
    ['platformLabel', 'platformValue'],
    ['locationLabel', 'locationValue'],
  ].map(([name, value]) => ({name, value}))

  const themeStore = useThemeStore()
</script>

<template>
  <div class="relative py-10 sm:py-24">
    <!-- Background image start -->
    <div class="absolute inset-x-0 -bottom-14 -top-44 overflow-hidden bg-indigo-50 dark:bg-slate-900">
      <img 
        :src="themeStore.dark ? backgroundDarkImg : backgroundImg"
        class="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
        alt="WWDC23 background image"
        width=918
        height=1495
      />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-slate-900" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-900" />
    </div>
    <!-- Background image end -->

    <container class="relative">
      <!-- Introduction text start -->
      <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <h1 class="text-3xl font-bold text-center tracking-tight text-blue-600 sm:text-5xl sm:pb-8 dark:text-slate-100">
          <p class="text-4xl italic font-medium">Welcome to</p>
          <svg aria-hidden="true" viewBox="0 0 300 42" class="absolute left-1/3 top-9 h-[0.3em] w-40 fill-orange-600 sm:left-1/2" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
          <p class="text-orange-600">SwiftGG-WWDC.playground</p>
        </h1>

        <div class="pt-6 space-y-6 font-display text-lg leading-8 tracking-tight text-blue-900 sm:text-2xl sm:leading-9 dark:text-slate-400">
          <p v-html="t('pgIntroP1')"></p>
          <p v-html="t('pgIntroP2')"></p>
        </div>
        
      </div>
      <!-- Introduction text end -->

      <!-- Meta info start -->
      <dl class="mx-auto pt-10 grid grid-cols-2 gap-x-10 gap-y-6 max-w-2xl sm:text-center sm:gap-y-10 lg:px-12 lg:max-w-4xl lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-between">
        <div v-for="info in metaInfo" class="text-left">
          <dt class="font-mono text-sm text-blue-600 dark:text-slate-100">{{ t(info.name) }}</dt>
          <dt class="pt-2 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">{{ t(info.value) }}</dt>
        </div>
      </dl>
      <!-- Meta info end -->
    </container>
  </div>
</template>