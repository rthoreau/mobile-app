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
      v-for="(data) in getPlaylists" 
      v-bind:key="data.id" 
      v-bind:playlist="data"></PlaylistItem>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '../components/PlaylistItem'
import {mapGetters} from 'vuex'
export default {
  name: 'Playlists',
  components: {
    PlaylistItem
  },
  data () {
    return {
      nextIdLink: ''
    }
  },
  mounted () {
    var nextId = this.getPlaylists.length ? (parseInt(this.getPlaylists[this.getPlaylists.length - 1].id) + 1) : 1;
    this.nextIdLink = '/Playlist/' + nextId + '/edit';
  },
  computed: {
    ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    })
  }
}
</script>

<style>
</style>