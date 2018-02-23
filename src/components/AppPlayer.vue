<template>
  <div id="appPlayer">
    <youtube :video-id="videoId" class="video" :players-vars="{autoplay:1}"  @ready="ready" @playing="playing" @buffering="buffering"></youtube>
    <div class="overlay"></div>
    <button @click="nextVideo()" class="next">Next</button>
    <button @click="playVideo()" class="play">Pause</button>
  </div>
</template>

<script>
//https://github.com/kaorun343/vue-youtube-embed
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)
export default {
  name: 'App_player',
  data(){
    return{
      url:"https://www.youtube.com/watch?v=pliDsyfUXcg",
      videoId: '',
      startTime: '',
      player: '',
      paused:true
    }
  },
  methods:{
    nextVideo(){
      this.videoId = getIdFromURL("https://www.youtube.com/watch?v=umjMGZw6vtw");
      function test(){
        this.player.playVideo();
      }
      test();
    },
    ready(player){
      this.player = player;
      console.log(player);
    },
    playing () {
      if (this.paused){
        this.paused = false;
      }
    },
    buffering(){
      console.log('buffering')
      if (this.paused){
        this.playVideo();
      }
    },
    pause () {
      this.player.pauseVideo()
    },
    playVideo(){
      this.player.playVideo();
      this.paused = false;
    }
  },
  mounted(){
    this.videoId = getIdFromURL(this.url);
    this.startTime = getTimeFromURL(this.url);
  }
}
</script>

<style>
#appPlayer{
  position:fixed;
  bottom:0;
  height:4em;
  width:100%;
  background-color:#215292;
  padding:0.5rem 0.8rem;
  text-align:left;
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
</style>
