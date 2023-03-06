<template>
  <footer>
    <p>
      &copy; {{ new Date().getFullYear() }} <a href="https://michalantczak.com">Michal Antczak</a>.
      This website has been designed and implemented by
      <a href="https://michalantczak.com">Michal Antczak</a>. All rights reserved.
    </p>
  </footer>
</template>

<style lang="scss">
footer {
  padding: 1.6rem;
  background-color: $color-primary;
  margin-top: auto;

  p {
    font-size: 1.4rem;
    color: $color-bg;
    font-family: $font-primary;

    a {
      color: $color-secondary;
    }
  }
}
</style>
