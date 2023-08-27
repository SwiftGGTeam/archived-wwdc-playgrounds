<script setup>
import { useI18n } from 'vue-i18n';
import Container from './Container.vue';
import ImageClipPath from './ImageClipPath.vue';
import speakers from '../Speakers.js'

const { t } = useI18n();
const borderStyles = [
  'border-blue-300',
  'border-indogo-300',
  'border-sky-300',
]
</script>

<template>
  <section id="speakers" aria-labelledby="speakers-title" class="py-20 sm:py-32 dark:bg-slate-900">
    <container>
      <!-- The speaker big title start-->
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="font-display text-4xl font-medium tracking-tighter text-blue-600 dark:text-slate-100 sm:text-5xl">
          {{ t("speaker_label") }}
        </h2>

        <p class="mt-4 font-display text-2xl text-blue-900 dark:text-slate-400">
          {{ t('speaker_slogan') }}
        </p>
      </div>
      <!-- The speaker big title end-->

      <!-- Speaker avatars start-->
      <div class="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 focus:outline-none sm:gap-y-6 md:grid-cols-3 lg:mt-20 lg:grid-cols-4">
        <div v-for="(speaker, idx) in speakers" >
          <div class="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
            <!-- Avatar border start-->
            <div 
              class="absolute bottom-6 left-0 right-4 top-0 rounded-4xl transition duration-300 group-hover:scale-95 xl:right-6"
              :class="borderStyles[idx % 3]"
            ></div>
            <!-- Avatar border end-->
            <!-- Avatar image start-->
            <div class="absolute inset-0">
              <img :src="speaker.avatar" 
                :alt="speaker.name" 
                class="absolute inset-0 h-full w-full object-cover rounded-lg transition duration-300 group-hover:scale-110">
            </div>
            <!-- Avatar image end-->
          </div>
          
          <h3 class="mt-8 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ t(speaker.name) }}</h3>
          <p class="mt-1 text-base tracking-tight text-slate-500 dark:text-slate-400" v-html="t(speaker.description)"></p>
        </div>        
      </div>
      <!-- Speaker avatars end-->
    </container>
  </section>
</template>