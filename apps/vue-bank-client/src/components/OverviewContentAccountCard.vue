<script lang="ts">
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
    <p class="account__iban" aria-label="account number">{{ accountNumber }}</p>
    <p class="account__balance" aria-label="account balance">{{ displayedBalance }}</p>
    <p class="account__owner">{{ owner }}</p>
  </div>
</template>

<style scoped lang="scss">
.account {
  padding: 1.9rem;
  margin: 1.9rem 0;
  border: 1px solid $color-grey-light;
  border-radius: 5px;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include accountBoldFont;

  &__balance {
    color: $color-primary-dark;
    font-size: 1.8rem;
    @include accountBoldFont;
  }
  &__iban {
    font-size: 1.8rem;
    @include accountBoldFont;
  }
  &__owner {
    margin-top: 1.6rem;
    width: 100%;
    font-size: 1.6rem;
    flex-grow: 1;
  }
}
</style>
