<script setup>
import Container from './Container.vue'
import DiamondIcon from './DiamondIcon.vue'
import ToggleDarkMode from './ToggleDarkMode.vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../ThemeStore'
import wwdc23PgLogo from '../assets/wwdc23-logo-1.png'
import wwdc23PgLogoDark from '../assets/wwdc23-logo-dark.png'
import { computed } from 'vue'
const { t, locale } = useI18n();

function switchLang() {
  if (locale.value == 'en') {
    locale.value = 'cn'
  } else {
    locale.value = 'en'
  }
}

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.dark)
</script>

<template>
  <header class="relative z-50 py-4 dark:bg-slate-900">
    <container class="flex flex-col gap-8 flex-wrap items-center justify-center sm:justify-between sm:flex-nowrap sm:flex-row sm:gap-0">
      <div v-if="!themeStore.darkMode" class="grow">
        <img :src=wwdc23PgLogo class="h-12 w-auto" >
      </div>

      <div v-else class="grow">
        <img :src=wwdc23PgLogoDark class="h-12 w-auto" >
      </div>

      <div class="order-first flex justify-center flex-auto overflow-x-auto whitespace-nowrap font-mono text-sm text-blue-600 dark:text-blue-400 sm:order-none">
        <div class="flex items-center gap-4 px-4">
          <p>
            <time datetime="2023-06-05">{{ t("date1st") }}</time><time datetime="2023-06-11">{{ t("date2nd") }}</time>
          </p>
          
          <DiamondIcon class="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />

          <p>{{ t('locationInNav') }}</p>
        </div>
      </div>

      <div class="order-last grow flex justify-end sm:order-none">
        <ToggleDarkMode class="mr-0 sm:mr-4" />
      </div>
      
      <div class="flex justify-end">
          <button 
            type="button" 
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="switchLang"
          >
            {{ t("switchLang") }}
          </button>
      </div>
      
    </container>
  </header>
</template>