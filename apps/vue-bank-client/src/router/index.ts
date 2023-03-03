import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AccountsOverview from '../views/AccountsOverview.vue'
import SettingsView from '../views/SettingsView.vue'

export const ROUTE_NAMES = {
  HOME: 'home',
  SETTINGS: 'settings',
  CONTACT: 'contact',
  ACCOUNTS: 'accounts'
}

export const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: HomeView
  },
  {
    path: '/accounts',
    name: ROUTE_NAMES.ACCOUNTS,
    component: AccountsOverview
  },
  {
    path: '/settings',
    name: ROUTE_NAMES.SETTINGS,
    component: SettingsView
  },
  {
    path: '/contact',
    name: ROUTE_NAMES.CONTACT,
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
