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
      {{ t(sche.location) }}
    </h3>
  </div>
</template>
