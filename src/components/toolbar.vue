<template>
<div id="toolbar">
              <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

</div>
</template>

<script>
export default {
name:'app-toolbar',
   data(){
      return {
      title:'Maffick'
      }
  }
}
</script>

<style>
   #toolbar{
       position: fixed;
       top:0px;
       left:0px;
       right:0px;
       z-index: 1;
   }
</style>

