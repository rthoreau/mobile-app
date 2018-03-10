<template>
  <div id="playlist">
    <header class="page-header">
      <button @click="$router.go(-1)"><svg viewBox="0 0 23.622 34.425"><use xlink:href="#icon-back"></use></svg></button>
      <input type="text" class="page-title edit" v-if="mode === 'edit'" placeholder="Party, Pop, Sleep..." v-model="playlist.name"/>
    </header>
    <div class="page-content">
      <button @click="test()">test</button>
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
      mode:this.$route.params.mode,
      playlist:{name:'', musics:[]}
    }
  },
  methods:{
    ...mapActions({
      setPlaylists: 'manageStore/setPlaylists'
    })
  },
  computed:{
     ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    }),
  },
  mounted(){
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