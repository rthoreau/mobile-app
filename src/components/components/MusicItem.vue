<template>
  <div class="music-item item" :class="submenuVisible ? 'active' : ''">
    <div class="music-plateform" :class="music.plateform" @click="setCurrentMusic(music.id)">
      <PlateformIcon :plateform="music.plateform"/>
    </div>
    <div class="music-thumbnail-container" @click="setCurrentMusic(music.id)">
      <transition name="appear">
        <img :src="music.thumbnail" alt="" class="music-thumbnail" v-if="loaded">
      </transition>
    </div>
    <div class="music-content" :class="page" @click="setCurrentMusic(music.id)">
      <span class="music-title">{{music.title}}</span>
      <span class="music-author">{{music.author}}</span>
      <span class="music-duration">{{hmsDuration(music.duration)}}</span>
    </div>

    <svg v-if="page !== 'favorite' && !(page === 'playlist' && mode === 'edit')" class="favorite-link" :class="music.favorite ? 'favorite' : ''" viewBox="0 0 38.394 35.2" @click="addToFavorite()"><use xlink:href="#icon-favorite"></use></svg>

    <svg  v-if="!(page === 'playlist' && mode === 'edit')" class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg>

    <svg v-if="page === 'playlist' && mode === 'edit'" class="remove-link" viewBox="0 0 31.799 35.394" @click="deleteFromRender()"><use xlink:href="#icon-next"></use></svg>

    <SubMenu v-if="submenuVisible" :links="links" @closeMenu="submenuVisible = false"></SubMenu>
    <Popup v-if="popupVisible" :params="popupParams">
      <ul class="selection">
        <li v-for="(playlist) in playlists" :key="playlist.id">
          <input type="checkbox" :id="'check' + playlist.id" :value="playlist.id" v-model="checkedPlaylists"><label class="checkbox" :for="'check'+playlist.id"> {{playlist.name}}</label>
        </li>
      </ul>
    </Popup>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PlateformIcon from './PlateformIcon'
import SubMenu from './SubMenu'
import Popup from '../components/Popup'

export default {
  name: 'MusicItem',
  props:{
    music:Object,
    page:String,
    playlistId:String,
    mode:String
  },
  components: {
    PlateformIcon,
    SubMenu,
    Popup
  },
  data(){
    return{
      loaded:false,
      playlists:this.$store.getters['manageStore/getPlaylists'],
      submenuVisible:false,
      source:'',
      checkedPlaylists:[],
      links:[
        {text:'Ajouter à la file', action:() => console.log('TODO')},
        {text:'Ajouter à une playlist', action: () => this.popupVisible = true}
      ],
      popupVisible:false,
      popupParams:{
        title:'Ajouter la musique dans...',
        okAction:() => this.addToPlaylists(), 
        cancelAction:() => this.popupVisible = false
      }
    }
  },
  methods:{
    ...mapActions({
      setCurrentMusic: 'manageStore/setCurrentMusic',
      musicAction: 'manageStore/musicAction',
    }),
    hmsDuration(val){
      var h = Math.floor(val/3600);
      h = h == 0 ? '' : h + ':';
      var m = Math.floor(val%3600/60);
      m = m >= 10 ? m : '0' + m;
      var s = Math.floor(val%3600%60);
      s = s >= 10 ? s : '0' + s;
      return h+m+':'+s;
    },
    addToPlaylists(){
      this.musicAction({action:'add', to:'playlist', musicId:this.music.id, playlistIds:this.checkedPlaylists});
      this.popupVisible = false;
    },
    addToFavorite(){
      this.musicAction({action:'add', to:'favorite', musicId:this.music.id, source:this.source, music:this.music});
      this.$emit('refresh', true);
    },
    deleteFromRender() {
      this.$emit('delete', true);
    }
  },
  computed:{
     ...mapGetters({
      getMusic: 'manageStore/getMusic'
    }),
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
    if (this.music.favorite && this.page === 'favorite'){
      this.links.push({text:'Supprimer des favoris', action: () => this.musicAction({action:'remove', from:'favorite', ids:[this.music.id]})});
    }
    if (this.page === 'playlist'){
      this.links.push({text:'Supprimer de la playlist', 
        action: () => this.musicAction({action:'remove', from:'playlist', ids:[this.music.id], playlistId:parseInt(this.playlistId)})});
    }
    this.source = this.page === 'search' ? this.page : '';
  },
  watch:{
    popupVisible: this.checkedPlaylists = []
  }
}
</script>

<style>
.music-item{
  position:relative;
  font-size:0;
  padding:0.5rem 4%;
}
.music-thumbnail-container{
  position:relative;
  width:3.5rem;
  height:3.5rem;
  display:inline-block;
  object-fit:cover;
  margin:0 0.8rem 0 0.5rem;
  text-align:right;
  vertical-align: middle;
}
.music-thumbnail{
  width:100%;
  height:100%;
  display:inline-block;
  background-color:#545436;
  object-fit:cover;
}
.music-content{
  display:inline-block;
  text-align:left;
  width:62%;
  margin-right:2%;
  vertical-align: middle;
  width:calc(84% - 4.8rem);
  font-size:1rem;
  vertical-align: top;
}
.music-content.favorite{
  width:74%;
  width:calc(96% - 4.8rem);
}
.music-content span{
  display:block;
}
.music-title{
  font-weight:bold;
}
.favorite-link, .remove-link{
  display:inline-block;
  vertical-align: middle;
  width:8%;
  margin-right:4%;
}
.favorite-link{
  opacity:0.2;
}
.favorite-link.favorite{
  opacity:1;
}
</style>