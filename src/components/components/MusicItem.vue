<template>
  <div class="music-item" @click="setCurrentMusic(uid)">
    <div class="music-plateform" v-bind:class="music.plateform">
      <PlateformIcon v-bind:plateform="music.plateform"/>
    </div>
    <div class="music-thumbnail-container">
      <transition name="appear">
        <img v-bind:src="music.thumbnail" alt="" class="music-thumbnail" v-if="loaded">
      </transition>
    </div>
    <div class="music-content">
      <span class="music-title">{{music.title}}</span>
      <span class="music-author">{{music.author}}</span>
      <span class="music-duration">{{hmsDuration(music.duration)}}</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import PlateformIcon from './PlateformIcon'

export default {
  name: 'MusicItem',
  props:{
    uid:String
  },
  components: {
    PlateformIcon
  },
  data(){
    return{
      loaded:false,
      music:this.$store.getters['manageStore/getMusics'][this.uid]
    }
  },
  methods:{
    ...mapActions({
      setCurrentMusic: 'manageStore/setCurrentMusic'
    }),
    hmsDuration(val){
      var h = Math.floor(val/3600);
      h = h == 0 ? '' : h + ':';
      var m = Math.floor(val%3600/60);
      m = m >= 10 ? m : '0' + m;
      var s = Math.floor(val%3600%60);
      s = s >= 10 ? s : '0' + s;
      return h+m+':'+s;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }
}
</script>

<style>
.music-item{
  position:relative;
  font-size:0;
  margin-bottom:1rem;
}
.music-thumbnail-container{
  position:relative;
  width:3.5rem;
  height:3.5rem;
  display:inline-block;
  object-fit:cover;
  margin:0 0.8rem 0 0.5rem;
  text-align:right;
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
  width:80%;
  width:calc(100% - 4.8rem);
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