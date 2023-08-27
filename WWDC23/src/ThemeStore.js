import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', {
  state() {
    let isDarkMode = false

    if (localStorage.getItem('isDarkMode') === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode = true
      }
    }
    else {
      isDarkMode = localStorage.getItem('isDarkMode') === 'true'
    }
    
    localStorage.setItem('isDarkMode', isDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

    return {
      dark: isDarkMode
    }
  },

  getters: {
    darkMode: (state) => state.dark
  },

  actions: {
    enableDarkMode() {
      this.dark = true
      document.documentElement.classList.add('dark')
      localStorage.setItem('isDarkMode', true)
    },
    disableDarkMode() {
      this.dark = false
      document.documentElement.classList.remove('dark')
      localStorage.setItem('isDarkMode', false)
    },
    setDarkMode(value) {
      if (value) {
        this.enableDarkMode()
      } else {
        this.disableDarkMode()
      }
    }
  }
})