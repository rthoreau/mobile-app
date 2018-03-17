<template>
  <div class="playlist-item item">
    <div class="playlist-content">
      <span class="playlist-name">{{playlist.name}}</span>
      <ul class="playlist-music-list">
        <li
        v-for="(id, index) in playlist.musics" 
        v-bind:key="index" 
        v-bind:uid="index">{{index}} : {{$store.getters['manageStore/getMusics'][id].title}}</li>
      </ul>
    </div>
    <svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg>
    <SubMenu v-if="submenuVisible" v-bind:links="links"></SubMenu>
  </div>
</template>

<script>
import SubMenu from '../components/SubMenu'
import {mapActions} from 'vuex'
export default {
  name: 'MusicItem',
  props:{
    id:String,
  },
  components:{
    SubMenu
  },
  data(){
    return{
      playlist:this.$store.getters['manageStore/getPlaylists'][this.id],
      submenuVisible:false,
      links:[
        {text:'Accéder à la playlist', action:'Playlist/' + this.id, mode:'router'},
        {text:'Supprimer la playlist', action: () => this.deletePlaylist()}
      ]
    }
  },
  methods:{
    deletePlaylist(){
      //TODO popu component
      if (confirm('Supprimer la playlist ' + this.playlist.name + ' ?')){
        console.log('test')
      }
    },
    ...mapActions({
      setPlaylists: 'manageStore/setPlaylists'
    })
  }
  
}
</script>

<style>
.playlist-item{
  position:relative;
  font-size:0;
  margin-bottom:1rem;
}
.playlist-content{
  display:inline-block;
  font-size:1rem;
  width:97%;
  vertical-align: middle;
  margin-right:1%;
}
.playlist-name{
  font-weight:bold;
}
.playlist-music-list li{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>