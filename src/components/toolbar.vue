<template>
  <div id="toolbar">
   <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Maffick 2k18</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name:'app-toolbar',
    data(){
      return {
        title:'Maffick',
        drawer: false//this variable used for navigation drawer, default closed
      }
    }
  }
</script>

<style>
  #toolbar{
    /*position: fixed;*/
    top:0px;
    left:0px;
    right:0px;
    z-index: 1;
  }
</style>

