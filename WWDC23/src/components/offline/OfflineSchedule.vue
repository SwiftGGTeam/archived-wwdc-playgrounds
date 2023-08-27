<script setup>
import Container from "../Container.vue"
import OfflineDaySummary from "./OfflineDaySummary.vue"
import OfflineTimeSlots from "./OfflineTimeSlots.vue"
import OfflineTabbedSchedule from "./OfflineTabbedSchedule.vue"
import { useI18n } from "vue-i18n"
import { offlineSchedule } from '../../Schedule';
import { useThemeStore } from "../../ThemeStore"

const { t } = useI18n();
const themeStore = useThemeStore()
</script>

<template>
  <section id="schedule" aria-label="Schedule" class="py-20 sm:py-24 flex flex-col justify-center dark:bg-slate-900">
    <!--Schedule titie and description start-->
    <div class="dark:bg-slate-900">
      <container class="relative z-10">
        <div class="max-w-42xl lg:max-w-4xl lg:pr-24 lg:px-12">
          <h2 class="font-display leading-tight text-4xl font-medium tracking-tighter text-blue-600 sm:leading-tight sm:text-5xl dark:text-slate-100">{{ t("offlineScheduleTitle") }}</h2>
          <p class="mt-4 font-display text-lg tracking-tighter leading-8 text-blue-900 sm:text-2xl dark:text-slate-400">{{ t("offlineScheduleDescription") }}</p>
        </div>
      </container>
    </div>
    <!--Schedule titie and description end-->
    
    <!--Schedule table start-->
    <div class="relative pt-14 sm:pt-24">
      <!-- Schedule background image start-->
      <div class="absolute inset-0 -bottom-32 -top-40 overflow-hidden bg-indigo-50 dark:bg-slate-900">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-slate-900" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-900" />
      </div>
      <!-- Schedule background image end-->

      <!-- Schedule table content start-->
      <container class="relative">
        <!-- Static schedule start-->
        <div class="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          <section v-for="sche in offlineSchedule">
            <offline-day-summary :sche="sche" />
            <offline-time-slots :timeSlots="sche.timeSlots" class="mt-10"/>
          </section>
        </div>
        <!-- Static schedule end-->

        <!-- Tabbed schedule start-->
        <offline-tabbed-schedule></offline-tabbed-schedule>
        <!-- Tabbed schedule end-->
      </container>
      <!-- Schedule table content end-->
    </div>
    <!--Schedule table end-->
  </section>
</template>