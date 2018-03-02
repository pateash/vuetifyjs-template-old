<template>
  <div id="app">
    <v-app light>
      <app-toolbar/>
      <v-content>
        <router-view/>
        <app-footer></app-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import AppToolbar from '@/components/toolbar'
  import AppFooter from '@/components/footer'
  export default {
    name: 'App',
    components:{AppToolbar,AppFooter}
  }
</script>

<style>
  #app {
    margin-top:0em;
  }
</style>
