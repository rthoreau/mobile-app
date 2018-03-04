<template>
  <div id="appPlayer">
    <div class="progress" :style="currentTimeValue"></div>
    <youtube class="video" :players-vars="{start: 0, autoplay: 0, controls:0}" :player-width="320" :player-height="240" @ready="ready" @playing="playing" @buffering="buffering"></youtube>
    <div class="overlay"></div>
    <button @click="playPause()" class="play">
      <transition name="switch" mode="in-out">
          <svg viewBox="0 0 31.908 35.381" v-if="paused" key="play"><use xlink:href="#icon-play"></use></svg>
          <svg viewBox="0 0 31.909 35.383" v-if="!paused" key="pause"><use xlink:href="#icon-pause"></use></svg>
      </transition>
    </button>
    <button @click="nextVideo()" class="next">Next</button>
    <button @click="watchLike">Instead of watch</button>
  </div>
</template>

<script>

//https://github.com/kaorun343/vue-youtube-embed
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { getIdFromURL/*, getTimeFromURL */} from 'vue-youtube-embed'
//import {mapActions} from 'vuex'

Vue.use(VueYouTubeEmbed)
export default {
  name: 'App_player',
  data(){
    return{
      currentMusic:this.$store.state.manageStore.currentMusic,
      url:'',
      videoId: '',
      startTime: 15,
      player: '',
      paused:true,
      currentTime:0,
      duration:0,
      currentTimeValue:'',
      currentTimeInterval: '',
      progressInterval:''
    }
  },
  methods:{
    nextVideo(){
      this.player.loadVideoById(getIdFromURL("https://www.youtube.com/watch?v=umjMGZw6vtw"));
    },
    ready(player){
      this.player = player;
      this.player.loadVideoById(this.videoId);
    },
    playing () {
      this.watchTime();
      if (this.paused){
        this.paused = false;
      }
    },
    buffering(){
      console.log('buffering');
      if (this.paused){
        this.playVideo();
      }
    },
    playPause () {
      if (this.paused){
        this.playVideo();
        this.paused = false;
      }else{
        this.pauseVideo();
        this.paused = true;
      }
    },
    playVideo(){
      //this.player.setPlaybackQuality('small');
      if (this.player){
        this.player.playVideo();
      }
    },
    /*...mapActions({
      setCurrentMusic: 'manageStore/setCurrentMusic'
    }),*/
    pauseVideo(){
      if (this.player){
        this.player.pauseVideo();
        this.watchTime(false);
      }
    },
    watchTime(active){
      active = active === false ? false : true;
      if (this.currentTime === 0){
        this.setProgressByGet();
      }
      if (active){
        if (!this.currentTimeInterval){
          this.progressInterval = window.setInterval(this.setProgress, 500);
          this.currentTimeInterval = window.setInterval(this.setProgressByGet, 2500);
        }
      }else{
        window.clearInterval(this.currentTimeInterval);
        window.clearInterval(this.progressInterval);
        this.currentTimeInterval = '';
        this.progressInterval = '';
      }
    },
    setProgress(){
      if (this.paused){
        this.watchTime(false);
      }else{
        this.currentTime = this.currentTime + 0.5;
      }
    },
    setProgressByGet(){
      this.currentTime = this.player.getCurrentTime();
      if (this.currentTime && this.currentTime >= this.duration){
        this.nextVideo();
        this.currentTime = 0;
      }
    },
    watchLike(){
      this.currentMusic = this.$store.getters['manageStore/getCurrentMusic'];
      console.log(this.currentMusic);
      console.log('not watched music change');
    }
  },
  mounted(){
    this.videoId = getIdFromURL(this.currentMusic.url);
    this.duration = this.currentMusic.duration;
    /*this.$store.watch(
      (state) => state.getters['manageStore/getCurrentMusic']
      , val => {
        console.log(val);
      }
    )*/
  },
  //TODO
  // detect onPause (modif this.paused)
  // set quality to low/small
  //Transform submenu from main menu
  watch: {
    player: function (val) {
      if (val){
        this.player.playVideo();
      }
    },
    currentTime: function(time){
      time = time * 100 / this.duration;
      if (time > 100){
        time = 100;
      }
      this.currentTimeValue = "width:" + time + "%";
    },
    currentMusic: function(music){
      console.log('music changed');
      this.videoId = getIdFromURL(music.url);
      this.duration = music.duration;
    },
    videoId: function(id){
      console.log('id changed');
      if (this.player){
        this.player.loadVideoById(id);
      }
    }
  }
}
</script>

<style>
#appPlayer{
  position:fixed;
  bottom:0;
  height:3.85em;
  width:100%;
  background-color:#215292;
  padding:0.5rem 0.8rem;
  text-align:left;
}
.progress{
  position:absolute;
  top:-0.15rem;
  left:0;
  height:0.15rem;
  background-color:white;
  transition:width 0.5s linear;
}
.video{
  display:inline-block;
  width:3.5rem;
  margin-left:0.5rem;
  height:100%;
}
.overlay{
  position:absolute;
  left:0;
  right:0;
  top:0;
  z-index:10;
}
.video iframe{
  width:100%!important;
  height:100%!important;
}
.play{
  position:relative;
  display:inline-block;
  vertical-align:top;
  height:100%;
  width:3.5rem;
}
.play svg{
  position:absolute;
  height:60%;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}

.switch-leave-active {
  transition: all 0.8s ease;
}
.switch-enter,
.switch-leave-to{
  opacity: 0;
}
</style>
