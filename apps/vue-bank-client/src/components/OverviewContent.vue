<script setup lang="ts">
import LoadingSpinner from './designSystem/LoadingSpinner.vue'
import ErrorMessage from './designSystem/ErrorMessage.vue'
import OverviewContentAccountGroups from './OverviewContentAccountGroups.vue'
import useAccountsApi from '@/composables/useAccountsApi'
const { accountGroups, loading, error } = useAccountsApi()
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <ErrorMessage v-if="error" message="An error has occured. Please try again later" />
  <OverviewContentAccountGroups v-if="!error && !loading" :accountGroups="accountGroups" />
</template>

<style scoped lang="scss"></style>
