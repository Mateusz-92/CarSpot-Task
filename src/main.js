import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown, faArrowUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
