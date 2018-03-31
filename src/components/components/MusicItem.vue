<template>
  <div class="music-item item" v-bind:class="submenuVisible ? 'active' : ''">
    <div class="music-plateform" v-bind:class="music.plateform" @click="setCurrentMusic(music.id)">
      <PlateformIcon v-bind:plateform="music.plateform"/>
    </div>
    <div class="music-thumbnail-container" @click="setCurrentMusic(music.id)">
      <transition name="appear">
        <img v-bind:src="music.thumbnail" alt="" class="music-thumbnail" v-if="loaded">
      </transition>
    </div>
    <div class="music-content" @click="setCurrentMusic(music.id)">
      <span class="music-title">{{music.title}}</span>
      <span class="music-author">{{music.author}}</span>
      <span class="music-duration">{{hmsDuration(music.duration)}}</span>
    </div>
    <svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg>
    <SubMenu v-if="submenuVisible" v-bind:links="links" @closeMenu="submenuVisible = false"></SubMenu>
    <Popup v-if="popupVisible" v-bind:params="popupParams">
      <ul class="selection">
        <li v-for="(playlist) in playlists" v-bind:key="playlist.id">
          <input type="checkbox" v-bind:id="'check' + playlist.id" v-bind:value="playlist.id" v-model="checkedPlaylists"><label class="checkbox" v-bind:for="'check'+playlist.id"> {{playlist.name}}</label>
        </li>
      </ul>
    </Popup>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PlateformIcon from './PlateformIcon'
import SubMenu from './SubMenu'
import Popup from '../components/Popup'

export default {
  name: 'MusicItem',
  props:{
    music:Object
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
      addMusic: 'manageStore/addMusic'
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
      this.addMusic({musicId:this.music.id, playlistIds:this.checkedPlaylists});
      this.popupVisible = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
    if (this.music.favorite){
      this.links.push({text:'Supprimer des favoris', action: () => console.log('TODO')});
    }
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
  width:74%;
  margin-right:2%;
  vertical-align: middle;
  width:calc(96% - 4.8rem);
  font-size:1rem;
  vertical-align: top;
}
.music-content span{
  display:block;
}
.music-title{
  font-weight:bold;
}
</style>