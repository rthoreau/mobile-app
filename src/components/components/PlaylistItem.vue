<template>
  <div class="playlist-item item" v-bind:class="submenuVisible ? 'active' : ''">
    <div class="playlist-content">
      <span class="playlist-name">{{playlist.name}}</span>
      <ul class="playlist-music-list">
        <li
        v-for="(id, index) in playlist.musics" 
        v-bind:key="index" 
        v-bind:id="id">{{index}} : {{getMusic(id).title}}</li>
      </ul>
    </div>
    <svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg>
    <SubMenu v-if="submenuVisible" v-bind:links="links" @closeMenu="submenuVisible = false"></SubMenu>
    <Popup v-if="popupVisible" v-bind:params="popupParams">
      Supprimer la playlist ?
    </Popup>
  </div>
</template>

<script>
import SubMenu from '../components/SubMenu'
import {mapActions, mapGetters} from 'vuex'
import Popup from '../components/Popup'
export default {
  name: 'MusicItem',
  props:{
    playlist:Object,
  },
  components:{
    SubMenu,
    Popup
  },
  data(){
    return{
      submenuVisible:false,
      links:[
        {text:'Accéder à la playlist', action:'Playlist/' + this.playlist.id, mode:'router'},
        {text:'Supprimer la playlist', action: () => this.deletePlaylist(this.id)}
      ],
      popupVisible:false,
      popupParams:{
        okAction:() => this.deletePlaylist(this.id, true), 
        cancelAction:() => this.popupVisible = false
      }
    }
  },
  methods:{
    deletePlaylist(id, confirmed){
      confirmed = confirmed || false;
      if (confirmed){
        this.deletePlaylist
      }else{
        this.popupVisible = true;
      }
    },
    ...mapActions({
      deletePlaylist:'manageStore/deletePlaylist'
    })
  },
  computed:{
     ...mapGetters({
      getMusic: 'manageStore/getMusic'
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