<template>
  <div id="playlists">
    <header class="page-header">
      <span class="page-title">Playlists</span>
      <router-link v-bind:to="nextIdLink">
        <svg class="submenu-link" viewBox="0 0 34.471 34.471"><use xlink:href="#icon-plus"></use></svg>
      </router-link>
    </header>
    <div class="page-content">
      <PlaylistItem 
      v-for="(data, index) in getPlaylists" 
      v-bind:key="index" 
      v-bind:id="index"></PlaylistItem>
    </div>
  </div>
</template>

<script>
      /**/
import PlaylistItem from '../components/PlaylistItem'
import {mapGetters} from 'vuex'
export default {
  name: 'Playlists',
  components: {
    PlaylistItem
  },
  data () {
    return {
      nextIdLink:'',
    }
  },
  mounted(){
    this.nextIdLink = "/Playlist/" + (this.getPlaylists[this.getPlaylists.length -1].id + 1) + "/edit";
  },
  computed:{
     ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    })
  },
}
</script>

<style>
#playlists .page-content{
  padding-right:0;
  padding-left:0;
}
</style>