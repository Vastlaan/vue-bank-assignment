<script setup lang="ts">
import LinkWithIcon from '@/components/designSystem/LinkWithIcon.vue'
const navigationLinks = [
  { name: 'Accounts', to: '/accounts', icon: 'fa-credit-card' },
  { name: 'Settings', to: '/settings', icon: 'fa-cog' },
  { name: 'Contact', to: '/contact', icon: 'fa-headset' }
]
</script>

<template>
  <div class="links">
    <LinkWithIcon
      v-for="link of navigationLinks"
      :key="link.to"
      :name="link.name"
      :to="link.to"
      :icon="link.icon"
      applyActiveClass
      hideTextWhenShrink
    />
  </div>
</template>

<style scoped lang="scss">
.links {
  margin-left: auto;
  display: flex;

  a {
    height: 100%;
    padding: 0 1.6rem;

    @include respond('s') {
      padding: 0 1rem;
    }
  }
}
</style>
