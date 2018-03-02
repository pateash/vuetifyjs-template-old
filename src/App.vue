<template>
  <div id="app"> 
      <v-app light>  
      <toolbar-component/>     
      <router-view/>
      </v-app>
  </div>
</template>

<script>
import ToolbarComponent from '@/components/toolbar'
export default {
  name: 'App',
  components:{ToolbarComponent}
}
</script>

<style>
#app {
  margin-top:0em;
}
</style>
