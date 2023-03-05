<script lang="ts">
import TextNormal from './designSystem/TextNormal.vue'
interface AccountCardProps {
  accountNumber: string
  displayedBalance: string
  owner: string
}
</script>

<script lang="ts" setup>
defineProps<AccountCardProps>()
</script>

<template>
  <div class="account">
    <TextNormal aria-label="account number" :text="accountNumber" isBold />
    <TextNormal aria-label="account balance" :text="displayedBalance" color="primaryDark" isBold />
    <div class="owner">
      <TextNormal aria-label="account owner" :text="owner" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.account {
  @include cardStyle;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.owner {
  margin-top: 1.6rem;
  width: 100%;
}
</style>
