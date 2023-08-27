<script setup>
  import { useI18n } from 'vue-i18n';

  defineProps({
    sche: {
      type: Object,
      required: true
    }
  })

  const { t } = useI18n()
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">
      <time :datetime="sche.date">{{ t(sche.date) }}</time>
    </h3>
    <p class="mt-1.5 text-base tracking-tight text-blue-900 dark:text-slate-400">{{ t(sche.summary) }}</p>
  </div>
</template>
