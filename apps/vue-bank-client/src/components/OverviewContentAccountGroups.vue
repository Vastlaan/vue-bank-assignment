<script lang="ts">
import type { AccountGroup } from '@/types'

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
      {{ accountGroup.groupName }}
    </div>
  </section>
</template>

<style scoped lang="scss">
.accountGroup {
  padding: 4.7rem 2.7rem;
  border-bottom: 1px solid $color-grey-normal;

  h3 {
    margin-bottom: 1.9rem;
  }

  @include respond('s') {
    padding: 2.7rem 0rem;
  }
}
</style>
