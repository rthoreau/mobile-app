<template>
  <div id="favorite">
    <header class="page-header"><span class="page-title">Favoris</span><svg class="submenu" viewBox="0 0 7.234 31.32"><use xlink:href="#icon-submenu"></use></svg></header>
    <div class="page-content">
      <MusicItem 
      v-for="(music, index) in musics" 
      v-bind:key="index" 
      v-bind:data="music"></MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'

export default {
  name: 'Favorite',
  components:{
    MusicItem
  },
  data(){
    return{
      musics:[
        {url:"https://www.youtube.com/watch?v=pliDsyfUXcg", title:"Indie Indie Folk - Summer 2015 Tracklist Included", author:"Fernando Bueno", date: "2015-07-18", duration : "1:55:49", thumbnail:"https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=umjMGZw6vtw", title:"Yann Tiersen - \"La valse de Monstres\" (full Album)", author:"srtanada08", date: "2013-08-18", duration : "44:02", thumbnail:"http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=D6TawVna7PQ", title:"ESCAPE - A Beautiful Chill Mix", author:"Pulse8", date: "2017-12-14", duration : "44:02", thumbnail:"https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=pliDsyfUXcg", title:"Indie Indie Folk - Summer 2015 Tracklist Included", author:"Fernando Bueno", date: "2015-07-18", duration : "1:55:49", thumbnail:"https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=umjMGZw6vtw", title:"Yann Tiersen - \"La valse de Monstres\" (full Album)", author:"srtanada08", date: "2013-08-18", duration : "44:02", thumbnail:"http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=D6TawVna7PQ", title:"ESCAPE - A Beautiful Chill Mix", author:"Pulse8", date: "2017-12-14", duration : "44:02", thumbnail:"https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=pliDsyfUXcg", title:"Indie Indie Folk - Summer 2015 Tracklist Included", author:"Fernando Bueno", date: "2015-07-18", duration : "1:55:49", thumbnail:"https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=umjMGZw6vtw", title:"Yann Tiersen - \"La valse de Monstres\" (full Album)", author:"srtanada08", date: "2013-08-18", duration : "44:02", thumbnail:"http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg", plateform:'yt'},
        {url:"https://www.youtube.com/watch?v=D6TawVna7PQ", title:"ESCAPE - A Beautiful Chill Mix", author:"Pulse8", date: "2017-12-14", duration : "44:02", thumbnail:"https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w", plateform:'yt'},
      ]
    };
  },
  mounted(){
    console.log('test')
  }
}
</script>

<style>
</style>
