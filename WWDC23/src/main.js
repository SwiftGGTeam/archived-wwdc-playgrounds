import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { createRouter } from 'vue-router'
import messages from "@intlify/unplugin-vue-i18n/messages"
import './style.css'
import App from './App.vue'

var searchParams = new URLSearchParams(window.location.search)
var params = {}

for (let [k, v] of searchParams) {
  params[k] = v
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: params['lang'] == "cn" ? "cn" : "en",
  fallbackLocale: "en",
  availableLocales: ["en", "cn"],
  warnHtmlInMessage: false,
  messages: messages
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.mount('#app')
