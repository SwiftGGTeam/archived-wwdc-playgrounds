<script setup>
import Container from './Container.vue'
import { staff } from '../Members.js'
import { useI18n } from 'vue-i18n';

import ChenYizhouImg from '../assets/members/ChenYizhou.png'
import MaYilingImg from '../assets/members/MaYiling.png'
import XiangHuiImg from '../assets/members/XiangHui.png'
import XiaoJianweiImg from '../assets/members/XiaoJianwei.png'
import EFImg from '../assets/members/EF.png'
import ZhangYangyangImg from '../assets/members/ZhangYangyang.png'


const avatars = [
  ChenYizhouImg, MaYilingImg, XiangHuiImg, XiaoJianweiImg,
  EFImg, ZhangYangyangImg
]

const { t } = useI18n()
</script>

<template>
  <section id="team" aria-labelledby="team-title" class="py-24 dark:bg-slate-900">
    <container>
      <!-- The team big title start-->
      <div class="mx-auto text-center lg:mx-0">
        <h2 class="font-display underline decoration-pink-500 text-4xl font-medium tracking-tighter text-blue-600 dark:text-slate-100 sm:text-5xl">
          {{ t("staff_label") }}
        </h2>

        <p class="mt-8 font-display text-2xl text-blue-900 dark:text-slate-400">
          {{ t('staff_desc') }}
        </p>
      </div>
      <!-- The team big title end-->

      <!-- The team avatars start-->
      <div class="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-12 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-16">
        <div v-for="(member, idx) in staff" class="flex-col items-center justify-center rounded-full">
          <a v-if="t(member.social) != ''" :href="t(member.social)">
            <img :src="avatars[idx]" :alt="t(member.name)" target="_blank" class="rounded-full max-w-[10rem]">
          </a>

          <div v-else class="mx-auto max-w-[10rem]">
            <img :src="avatars[idx]" :alt="t(member.name)" target="_blank" class="rounded-full">
          </div>
          
          <p class="text-center mt-4 font-display text-xl font-medium tracking-tight text-slate-900 dark:text-slate-100">{{ t(member.name) }}</p>
          <p class="text-center mt-1 text-base tracking-tight text-slate-500 dark:text-slate-400">{{ t(member.desc) }}</p>
        </div>
      </div>
      <!-- The team avatars end-->
    </container>
  </section>
</template>