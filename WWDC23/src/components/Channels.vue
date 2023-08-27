<script setup>
  import { useI18n } from 'vue-i18n'
  import { useThemeStore } from '../ThemeStore'

  import Container from './Container.vue'
  import backgroundImg from '../assets/background.jpg'
  import backgroundDarkImg from '../assets/background-dark-1.png'
  const { t } = useI18n() 
  const themeStore = useThemeStore()
</script>

<template>
  <section id="newsletter" aria-label="NewsLetter" class="dark:bg-slate-900">
    <container>
      <div class="relative -mx-4 overflow-hidden bg-indigo-50 dark:bg-slate-900 px-4 py-20 rounded-xl sm:-sm-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
        <img :src="themeStore.dark ? backgroundDarkImg : backgroundImg" class="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]" width="919" height="1352">

        <!-- Channel big title start-->
        <div class="relative mx-auto grid max-w-4xl gap-x-32 gap-y-14 pb-9 xl:max-w-none">
          <div>
            <p class="font-display text-4xl font-medium tracking-tighter text-blue-600 dark:text-slate-100 sm:text-5xl">
              {{ t('channels_label') }}
            </p>

            <p class="mt-8 font-display max-w-3xl text-2xl text-blue-900 dark:text-slate-400">
              {{ t('channels_label_desc') }}
            </p>
          </div>
        </div>
        <!-- Channel big title end-->

        <!-- QRcode start-->
        <div class="relative flex flex-col items-center gap-x-32 justify-center sm:flex-row">
          <div class="flex flex-col items-center">
            <h3 class="mt-9 font-display text-md font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ t('channel_bilibili') }}</h3>
            <p class="my-4 text-sm tracking-tight text-slate-500">{{ t('channel_bilibili_desc') }}</p>
            <img src="../assets/B-channel@2x.png" alt="B channel" class="w-56 h-auto rounded-md">
          </div>
          <div class="flex flex-col items-center">
            <h3 class="mt-9 font-display text-md font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ t('channel_xr_wechat1') }}</h3>
            <p class="my-4 text-sm tracking-tight text-slate-500">{{ t('channel_xr_wechat_desc1') }}</p>
            <img src="../assets/XrealityZoneQR.png" alt="XReality.Zone" class="w-56 h-auto rounded-md">
          </div>
          <div class="flex flex-col items-center">
            <h3 class="mt-9 font-display text-md font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ t('channel_tsalon_wechat') }}</h3>
            <p class="my-4 text-sm tracking-tight text-slate-500">{{ t('channel_tsalon_wechat_desc') }}</p>
            <img src="../assets/TSalon-WeChatGroup.png" alt="Q channel" class="w-56 h-auto rounded-md">
          </div>
          <div class="flex flex-col items-center">
            <h3 class="mt-9 font-display text-md font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ t('channel_xr_wechat') }}</h3>
            <p class="my-4 text-sm tracking-tight text-slate-500">{{ t('channel_xr_wechat_desc') }}</p>
            <img src="../assets/Sspai-channel.png" alt="Q channel" class="w-56 h-auto rounded-md">
          </div>
        </div>
      </div>
      <!-- QRcode end-->
    </container>
  </section>
</template>