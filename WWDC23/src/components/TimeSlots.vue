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
    <li v-for="(timeslot, idx) in timeSlots" :aria-label='timeslot.topic + " at " + timeslot.dateTime'>

      <!-- Topics start-->
      <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("topicLabel")}}</h4>
      <p class="mt-1 mb-8 tracking-tight text-slate-500 dark:text-slate-400" v-html="t(timeslot.topic)"></p>
      <!-- Topics end-->

      <div class="mx-auto mb-8 h-px w-52 bg-indigo-500/10 dark:bg-indigo-100/10"></div>

      <!-- Activity start-->
      <div class="relative inline-block">
        <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("activityLabel") }}</h4>
        <span v-if="timeslot.channel == 0" class="absolute top-1 -right-5 transform translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold py-1 px-2 rounded-md drop-shadow-lg dark:bg-indigo-600 dark:text-slate-200">New</span>
      </div>

      <p class="mt-1 mb-8 tracking-tight text-slate-500 dark:text-slate-400">
        {{ t(timeslot.activity) }} <a v-if="timeslot.channel === 0" href="#" class="text-blue-500 dark:text-blue-600 hover:text-blue-700 font-semibold">({{  t('joinOfflineActivity') }})</a>
      </p>
      <!-- Activity end-->

      <div class="mx-auto mb-8 h-px w-52 bg-indigo-500/10 dark:bg-indigo-100/10"></div>

      <!-- Datetime start-->
      <h4 class="text-lg font-semibold tracking-tight text-blue-900 dark:text-slate-100">{{ t("activityDateTimeLabel") }}</h4>
      <p class="mt-1 mb-8 tracking-tight text-slate-500 dark:text-slate-400" v-html="t(timeslot.dateTime)"></p>
      <!-- Datetime end-->

      <div v-if="timeSlots.length > 1 && idx != timeSlots.length - 1" class="mx-auto px-1 mb-8 w-60 h-1 bg-indigo-600/10 dark:bg-indigo-100/10"></div>
    </li>
  </ol>
</template>