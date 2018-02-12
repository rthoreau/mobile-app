<template>
  <div class="music-item">
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
  font-size:0;
  margin-bottom:1rem;
}
.music-thumbnail{
  width:3.5rem;
  height:3.5rem;
  display:inline-block;
  margin-right:0.8rem;
  object-fit:cover;
}
.music-content{
  display:inline-block;
  text-align:left;
  width:80%;
  width:calc(100% - 4.3rem);
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