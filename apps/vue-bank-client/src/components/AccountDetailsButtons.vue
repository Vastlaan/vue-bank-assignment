<script lang="ts">
interface AccountButtonsProps {
  buttonTitle: string
  action: () => void
  url: string
  icon: string
}
</script>
<script lang="ts" setup>
import ButtonToggle from './designSystem/ButtonToggle.vue'
defineProps<AccountButtonsProps>()
</script>

<template>
  <div class="actionButtons">
    <ButtonToggle :action="action" :title="buttonTitle" :icon="icon" />
  </div>
</template>

<style scoped lang="scss">
.actionButtons {
  grid-area: buttons;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-left: 1px solid $color-grey-light;

  @include respond('m') {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-left: none;
    padding-top: 1rem;
    border-top: 1px solid $color-grey-light;
  }
}
</style>
