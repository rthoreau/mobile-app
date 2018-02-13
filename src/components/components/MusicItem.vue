<template>
  <div class="music-item">
    <div class="music-plateform" v-bind:class="data.plateform"></div>
    <img v-bind:src="data.thumbnail" alt="" class="music-thumbnail">
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
  z-index:10;
  width:0.5rem;
  opacity:0.8;
}
.music-thumbnail{
  position:relative;
  width:3.5rem;
  height:3.5rem;
  display:inline-block;
  object-fit:cover;
  margin:0 0.8rem 0 0.5rem;
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
@keyframes appear {
  0% {
    width: 4em;
  }
  60% {
    width: 4em;
  }
  100% {
    width: 0.5em;
  }
}
</style>