<script lang="ts">
import type { AccountGroup } from '@/types'
import HeadingNormal from './designSystem/HeadingNormal.vue'
import OverviewContentAccounts from './OverviewContentAccounts.vue'
interface AccountGroupsProps {
  accountGroups: AccountGroup[]
}
</script>
<script setup lang="ts">
defineProps<AccountGroupsProps>()
</script>

<template>
  <section aria-label="account groups overview">
    <div class="accountGroup" v-for="accountGroup of accountGroups" :key="accountGroup.groupId">
      <HeadingNormal :text="accountGroup?.groupName" />
      <OverviewContentAccounts v-if="accountGroup?.accounts" :accounts="accountGroup?.accounts" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.accountGroup {
  padding: 3.3rem 2.7rem;
  border-bottom: 1px solid $color-grey-normal;

  h3 {
    margin-bottom: 1.9rem;
  }

  @include respond('s') {
    padding: 2.7rem 0rem;
  }
}
</style>
