<template>
  <div class="searchbox">
    <div class="searcharea">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.searchbox {
  display: flex;
  margin: 1.6rem 0 2.7rem 1.6rem;

  @include respond('s') {
    justify-content: center;
  }
}
.searcharea {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: stretch;
}
</style>
