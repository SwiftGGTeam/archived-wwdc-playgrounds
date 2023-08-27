<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  defineProps({
    timeSlots: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <ol class="space-y-8 px-10 py-12 text-center shadow-xl shadow-blue-900/5 backdrop-blur bg-white/60 dark:bg-slate-800/60">
    <li v-for="(timeslot, idx) in timeSlots" :aria-label='timeslot.location + " at " + timeslot.datetime'>

      <!-- Topics start-->
      <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("offline_place_label")}}</h4>
      <p class="mt-1 mb-8 tracking-tight text-slate-500 dark:text-slate-400" v-html="t(timeslot.place)"></p>
      <!-- Topics end-->

      <div class="mx-auto mb-8 h-px w-52 bg-indigo-500/10 dark:bg-indigo-100/10"></div>

      <!-- Activity start-->
      <div class="relative inline-block">
        <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("offline_datetime_label") }}</h4>
      </div>

      <p class="mt-1 mb-8 tracking-tight text-slate-500 dark:text-slate-400">
        {{ t(timeslot.datetime) }}
      </p>
      <!-- Activity end-->

      <div class="mx-auto mb-8 h-px w-52 bg-indigo-500/10 dark:bg-indigo-100/10"></div>

      <!-- Signup start-->
      <!-- <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("offline_place_label") }}</h4> -->
      <a :href="timeslot.link" target="_blank" class="text-blue-500 dark:text-blue-600 hover:text-blue-700 font-semibold">{{  t('joinOfflineActivity') }}</a>
      <!-- Signup end-->
    </li>
  </ol>
</template>