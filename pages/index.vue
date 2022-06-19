<template>
  <header>
    <login-component />
  </header>
</template>

<script>
import LoginComponent from '../my-components/auth/LoginComponent.vue'

export default {
  name: 'index-component',
  components: { LoginComponent },
}
</script>

<style lang="scss">
@import url(../static/main.scss);
</style>
