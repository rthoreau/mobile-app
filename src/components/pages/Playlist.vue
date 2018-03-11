<template>
  <div id="playlist">
    <header class="page-header">
      <button @click="$router.go(-1)"><svg viewBox="0 0 23.622 34.425"><use xlink:href="#icon-back"></use></svg></button>
      <input type="text" class="page-title edit" v-if="mode === 'edit'" placeholder="Party, Pop, Sleep..." v-model="playlist.name"/>
      <span class="page-title" v-if="mode !== 'edit'">{{playlist.name}}</span>
      <svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg>
    </header>
    <SubMenu v-if="submenuVisible" v-bind:links="links"></SubMenu>
    <div class="page-content">
      <MusicItem 
      v-for="(uid, index) in playlist.musics" 
      v-bind:key="index" 
      v-bind:uid="uid"></MusicItem>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import MusicItem from '../components/MusicItem'
import SubMenu from '../components/SubMenu'
export default {
  name: 'Playlist',
  components: {
    MusicItem,
    SubMenu
  },
  data () {
    return {
      id:this.$route.params.id,
      mode:this.$route.params.mode || '',
      playlist:{name:'', musics:[]},
      submenuVisible:false,
      links:''
    }
  },
  methods:{
    ...mapActions({
      setPlaylists: 'manageStore/setPlaylists'
    }),
    deletePlaylist(){

    },
    changeMode(){
      this.mode = this.mode === 'edit' ? '' : 'edit';
      this.links = [
        {text:this.mode !== 'edit' ? 'Modifier la playlist' : 'Terminer la modification', action: () => this.changeMode()},
        {text:'Supprimer la playlist', action: () => this.deletePlaylist()}
      ];
    }
  },
  computed:{
     ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    }),
  },
  mounted(){
    this.links = [
      {text:this.mode !== 'edit' ? 'Modifier la playlist' : 'Terminer la modification', action: () => this.changeMode()},
      {text:'Supprimer la playlist', action: () => this.deletePlaylist()}
    ];
    if(this.$store.getters['manageStore/getPlaylists'][this.id] === undefined){
      var playlists = this.$store.getters['manageStore/getPlaylists'];
      playlists[this.id] = {name:'', musics:[]};
      this.setPlaylists(playlists);
    }
    this.playlist = this.getPlaylists[this.id];
  },
  watch:{
    playlist:function (data){
      var playlists = this.$store.getters['manageStore/getPlaylists'];
      playlists[this.id] = data;
      this.setPlaylists(playlists);
    }
  }
}
</script>

<style>
input.page-title{
  background-color:transparent;
  height:1.5em;
  margin:0.6rem 0;
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
  height:2.5rem;
  position:absolute;
  left:0.5rem;
  top:50%;
  transform:translate(0,-50%);
}
</style>