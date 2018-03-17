<template>
  <div id="playlists">
    <header class="page-header">
      <span class="page-title">Playlists</span>
      <router-link v-bind:to="nextIdLink">
        <svg class="submenu-link" viewBox="0 0 34.471 34.471"><use xlink:href="#icon-plus"></use></svg>
      </router-link>
    </header>
    <div class="page-content">
      <button @click="test()">test</button>
      <PlaylistItem 
      v-for="(data, index) in playlists" 
      v-bind:key="index" 
      v-bind:id="index"></PlaylistItem>
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
      playlists: this.$store.getters['manageStore/getPlaylists'],
      nextIdLink:'',
    }
  },
  mounted(){
    this.nextIdLink = "/Playlist/" + (parseInt(Object.keys(this.playlists).pop()) + 1) + "/edit";
  },
  computed:{
     ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    }),
  },
  watch:{
    getPlaylists: function(){
      console.log('jey')
      this.playlists = this.$store.getters['manageStore/getPlaylists']
    }
  },
  methods:{
    test(){
      this.playlists = this.$store.getters['manageStore/getPlaylists']
    }
  }
}
</script>

<style>
</style>