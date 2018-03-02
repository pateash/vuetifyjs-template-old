<template>
  <div id="footer">
    <v-footer >
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="ml-3">
              Made with
              <v-icon class="red--text" small>fa-heart</v-icon>
              by <a  href="//ashish.live" target="_blank">Ashish Patel</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
   #footer div{
     position: absolute;
     bottom: 0px;
     left:0px;
     right:0px;
     padding:1em;
     color:black;
     margin-bottom: 0px;
     text-align: center;
   }
  #footer a{
     text-decoration: none;
  }
</style>
