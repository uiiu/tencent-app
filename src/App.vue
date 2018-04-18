<template>
  <div id="app">
    <router-view></router-view>
    <navView v-if="$route.path!=='/play'"></navView>
  </div>
</template>

<script>
  import navView from './components/nav.vue'
  export default {
    name: 'app',
    components:{
      navView
    }
  }
</script>

<style>
    @import 'css/index.css';
    #app{
      padding-bottom: 0.6rem;
    }
</style>
