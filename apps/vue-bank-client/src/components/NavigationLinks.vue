<script setup lang="ts">
import LinkWithIcon from '@/components/designSystem/LinkWithIcon.vue'
</script>

<template>
  <div class="links">
    <LinkWithIcon
      name="Settings"
      to="/settings"
      icon="fa-cog"
      applyActiveClass
      hideTextWhenShrink
    />
    <LinkWithIcon
      name="Contact"
      to="/contact"
      icon="fa-headset"
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
