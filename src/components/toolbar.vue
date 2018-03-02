<template>
  <div id="toolbar">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="$router.push(menu.route)" v-for="menu in menu_items">
          <v-list-tile-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menu.title}}</v-list-tile-title>
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
        drawer: null,//this variable used for navigation drawer, default closed
        menu_items:[
          {
            title:'Home',
            icon:'home',
            route:'/home'
          },
           {
              title:'Register',
              icon:'home',
              route:'/register'
            },
          {
            title:'Events',
            icon:'home',
            route:'/events'
          },
          {
            title:'Pronites',
            icon:'home',
            route:'/pronites'
          },
          {
            title:'Contact',
            icon:'contact_mail',
            route:'/contact'
          },
           {
              title:'Team',
              icon:'home',
              route:'/team'
            },
        ]
      }
    }
  }
</script>

<style>
</style>

