<template>
  <div class="music-item" @click="setCurrentMusic(data)">
    <div class="music-plateform" v-bind:class="data.plateform">
      <PlateformIcon v-bind:plateform="data.plateform"/>
    </div>
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
import {mapActions} from 'vuex'
import PlateformIcon from './PlateformIcon'

export default {
  name: 'MusicItem',
  props:{
    data:Object,
  },
  components: {
    PlateformIcon
  },
  data(){
    return{
      loaded:false,
    }
  },
  methods:{
    ...mapActions({
      setCurrentMusic: 'manageStore/setCurrentMusic'
    }),
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