import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCog,
  faUser,
  faHeadset,
  faRightToBracket,
  faRightFromBracket,
  faSpinner,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import '@/styles/base.scss'

const app = createApp(App)

library.add(
  faCog,
  faUser,
  faRightToBracket,
  faRightFromBracket,
  faHeadset,
  faSpinner,
  faTriangleExclamation
)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
