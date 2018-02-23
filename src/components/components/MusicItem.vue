<template>
  <div class="music-item">
    <div class="music-plateform" v-bind:class="data.plateform"></div>
    <div class="music-thumbnail-container">
      <transition name="appear">
        <img v-bind:src="data.thumbnail" alt="" class="music-thumbnail" v-if="loaded">
      </transition>
    </div>
    <div class="music-content">
      <span class="music-title">{{data.title}}</span>
      <span class="music-author">{{data.author}}</span>
      <span class="music-duration">{{data.duration}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MusicItem',
  props:{
    data:Object,
  },
  data(){
    return{
      loaded:false,
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
.music-plateform{
  position:absolute;
  height:3.5rem;
  left:0;
  top:0;
  z-index:0;
  width:4rem;
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
.appear-enter-active,
.appear-leave-active{
  transition: all 0.8s;
}
.appear-enter,
.appear-leave-to{
  width:0%;
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