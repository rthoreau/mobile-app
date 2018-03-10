<template>
  <div class="playlist-item">
    <div class="playlist-content">
      <span class="playlist-title">{{playlist.name}}</span>
      <ul>
        <li
        v-for="(id, index) in playlist.musics" 
        v-bind:key="index" 
        v-bind:uid="index">{{index}} : {{$store.getters['manageStore/getMusics'][id].title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicItem',
  props:{
    id:String
  },
  data(){
    return{
      playlist:this.$store.getters['manageStore/getPlaylists'][this.id]
    }
  }
}
</script>

<style>
</style>