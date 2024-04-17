<script setup>
import Container from './Container.vue'
import { useI18n } from 'vue-i18n';
import sponsors from '../Sponsors.js';

const { t } = useI18n()
</script>

<template>
  <section id="sponsors" aria-label="sponsors" class="py-24 dark:bg-slate-900">
    <container>
      <h2 class="underline decoration-pink-500 font-display text-4xl font-medium tracking-tighter text-blue-600 dark:text-slate-100 text-center sm:text-5xl">{{ t('sponsor_label') }}</h2>

      <p class="mx-auto mt-8 font-display max-w-3xl text-2xl text-blue-900 dark:text-slate-400">
        {{ t('sponsor_desc') }}
      </p>
    </container>

    <div class="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-2 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg-gap-x-32">
      <div v-for="sp in sponsors" class="flex items-center justify-center">
        <div class="bg-indigo-50 dark:bg-slate-700 rounded-lg">
          <a :href="sp.link" target="_blank">
            <img :src="sp.logo" :alt="sp.name" class="max-w-xs sm:max-w-[10rem]">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
