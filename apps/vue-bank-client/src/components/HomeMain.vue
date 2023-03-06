<script setup lang="ts">
import HeadingLarge from './designSystem/HeadingLarge.vue'
import TextNormal from './designSystem/TextNormal.vue'
import ButtonSecondary from './designSystem/ButtonSecondary.vue'
import { computed } from 'vue'

const action = computed(() => ({ url: '/accounts' }))
</script>

<template>
  <div class="banner">
    <div class="image">
      <img src="@/assets/images/abn_amro_image_1.jpg" alt="happy family" />
    </div>
    <div class="info">
      <HeadingLarge text="Manage your accounts via Internet Banking" />
      <TextNormal text="No need to leave your home. Find out what your options are." />
      <ButtonSecondary title="Accounts" :action="action" />
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  display: flex;
  margin: 4.7rem;
  justify-content: space-between;

  @include respond('m') {
    flex-direction: column;
    margin: 2.7rem 0;
  }
}
.image {
  margin: 1.9rem;
  width: 36%;

  @include respond('l') {
    width: 50%;
  }

  @include respond('m') {
    width: 80%;
  }

  img {
    width: 100%;
  }
}
.info {
  margin: 1.9rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin: 1.2rem !important;
  }
  @include respond('m') {
    width: 80%;
  }
}
</style>
