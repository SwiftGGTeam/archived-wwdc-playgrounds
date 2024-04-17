<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue"
import DaySummary from './DaySummary.vue'
import TimeSlots from './TimeSlots.vue'
import { schedule } from '../Schedule'
import { ref, computed } from 'vue'

const selectedTab = ref(0)

function selectTab(index) {
  selectedTab.value = index
}

const tabOrientation = computed(() => {
  return window.innerWidth >= 640 ? 'vertical' : 'horizontal'
})

</script>


<template>
  <TabGroup 
    as="div" 
    class="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
    :selectedIndex="selectedTab"
    @change="selectTab"
    :vertical = "tabOrientation === 'vertical'">
    <TabList class="flex gap-y-10 overflow-x-auto pb-4 pl-4 sm:px-0 sm:flex-col sm:pr-8">
      <Tab as="div" class="focus:outline-none relative w-3/4 pr-4 flex-none sm:w-auto" v-for="(sche, idx) in schedule">
        <DaySummary class="text-start" :class="idx != selectedTab && 'opacity-70'" :sche="sche" />
      </Tab>
    </TabList>

    <TabPanels>
      <TabPanel v-for="sche in schedule">
        <TimeSlots :timeSlots="sche.timeSlots" />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>