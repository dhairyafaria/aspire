<template>
  <div id="app">
    <div class="navigation">
      <Navigation/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>
<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navigation {
  position:fixed;
  bottom: 0;
  width: 100%;
}
</style>
<style lang="scss">
  body {
    margin: 0;
  }
</style>
