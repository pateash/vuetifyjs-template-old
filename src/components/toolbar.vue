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
            <v-icon large>{{'fa-'+menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menu.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>fa-bars</v-icon></v-toolbar-side-icon>
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
        drawer: false,//this variable used for navigation drawer, default closed
        menu_items:[
          {
            title:'Home',
            icon:'home',
            route:'/'
          },
           {
              title:'Register',
              icon:'ticket-alt',
              route:'/register'
            },
          {
            title:'Events',
            icon:'calendar-alt',
            route:'/events'
          },
          {
            title:'Pronites',
            icon:'moon',
            route:'/pronites'
          },
          {
            title:'Contact',
            icon:'envelope',
            route:'/contact'
          },
           {
              title:'Team',
              icon:'users',
              route:'/team'
            },
        ]
      }
    }
  }
</script>

<style>
</style>

