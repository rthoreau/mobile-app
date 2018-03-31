<template>
  <div id="playlist">
    <header class="page-header">
      <button @click="$router.go(-1)"><svg viewBox="0 0 23.622 34.425"><use xlink:href="#icon-back"></use></svg></button>
      <input ref="editInput" type="text" class="page-title edit" v-if="mode === 'edit'" placeholder="Party, Pop, Sleep..." v-model="playlist.name" v-on:keyup.enter="save()"/>
      <span class="page-title" v-if="mode !== 'edit'">{{playlist.name}}</span>
      <svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible" v-if="mode !== 'edit'"><use xlink:href="#icon-submenu"></use></svg>
      <button @click="save()" class="right" v-if="mode === 'edit'">OK</button>
    </header>
    <SubMenu v-if="submenuVisible" v-bind:links="links" @closeMenu="submenuVisible = false"></SubMenu>
    <div class="page-content">
      <span v-if="mode !== 'edit' && !playlist.name">Cette playlist semble ne plus exister !<br><router-link to="/Playlists">Revenir aux playlists</router-link></span>
      <MusicItem 
      v-for="(id, index) in playlist.musics" 
      v-bind:key="index" 
      v-bind:music="getMusic(id)"></MusicItem>
    </div>
    <Popup v-if="popupVisible" v-bind:params="popupParams">
      Supprimer la playlist ?
    </Popup>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import MusicItem from '../components/MusicItem'
import SubMenu from '../components/SubMenu'
import Popup from '../components/Popup'
export default {
  name: 'Playlist',
  components: {
    MusicItem,
    SubMenu,
    Popup
  },
  data () {
    return {
      id:this.$route.params.id,
      mode:this.$route.params.mode || '',
      playlist:{name:'', musics:[]},
      submenuVisible:false,
      editInput:'',
      links : [
        {text:'Modifier la playlist', action: () => this.changeMode()},
        {text:'Supprimer la playlist', action: () => this.callDeletePlaylist()}
      ],
      popupVisible:false,
      popupParams:{
        okAction:() => this.callDeletePlaylist(true), 
        cancelAction:() => this.popupVisible = false
      }
    }
  },
  methods:{
    ...mapActions({
      setPlaylists: 'manageStore/setPlaylists'
    }),
    callDeletePlaylist(confirmed){
      confirmed = confirmed || false;
      if (confirmed){
        this.deletePlaylist(this.playlist.id);
      }else{
        this.popupVisible = true;
      }
    },
    save(){
      var playlists = this.$store.getters['manageStore/getPlaylists'];
      var index = playlists.findIndex(playlist => playlist.id === this.playlist.id);
      if (index === -1){
        playlists.push(this.playlist);
      }else{
        playlists[index] = this.playlist;
      }
      this.setPlaylists(playlists);
      this.changeMode();
    },
    changeMode(){
      this.mode = this.mode === 'edit' ? '' : 'edit';
      if (this.mode === 'edit'){
        this.$nextTick(() => this.$refs.editInput.focus())
      }
    },
    ...mapActions({
      deletePlaylist:'manageStore/deletePlaylist'
    })
  },
  computed:{
     ...mapGetters({
      getPlaylist: 'manageStore/getPlaylist',
      getMusic: 'manageStore/getMusic'
    }),
  },
  mounted(){
    this.playlist = this.getPlaylist(this.id);
    this.editInput = this.$refs.editInput;
  }
}
</script>

<style>
#playlist .page-header{
  padding-left:0.4rem;
}
input.page-title{
  background-color:transparent;
  height:1.5em;
  margin:0.6rem 0.2rem;
  width:70%;
  outline:none;
  vertical-align:middle;
}
input.page-title:focus{
background-color:rgba(255,255,255,0.2);
}
.edit{
  border:2px dashed white;
  padding:0.5rem;
}
#playlist .page-header button{
  vertical-align: middle;
  height:2.5rem;
  color:white;
  font-size:1.4rem;
  padding:0 0.5rem;
}
</style>