<template>
  <div id="search">
    <header class="page-header">
      <span class="page-title">
        <input 
        placeholder="Recherche..." 
        class="search-input" 
        ref="searchInput" 
        v-model="searchValue"
        @keyup.enter="search()"
        v-bind:class="searchValue.length ? 'fill' : ''"><label @click="focusSearch()"><svg viewBox="0 0 29.648 34.728" class="search-icon" ><use xlink:href="#icon-search"></use></svg></label>
      </span>
    </header>
    <div class="page-content">
      <MusicItem 
      v-for="(music, index) in searchResult" 
      v-bind:key="index" 
      v-bind:data="music"></MusicItem>
      <p v-if="searchResult.length === 0">You just want your music ?<br> Change source to your phone !</p>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
export default {
  name: 'Search',
  components: {
    MusicItem
  },
  data () {
    return {
      searchValue: '',
      searchResult: [],
      musics: [
        {url: 'https: //www.youtube.com/watch?v=rVeMiVU77wo', title: 'alt-J (∆) Breezeblocks', author: 'alt-J', date: '2012-03-23', duration: '3: 46', thumbnail: 'http: //www.konbini.com/wp-content/blogs.dir/3/files/2012/06/Alt-j-Breezeblocks-480x279.jpg', plateform: 'lo'},
        {url: 'https: //www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '1: 55: 49', thumbnail: 'https: //i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '44: 02', thumbnail: 'http: //www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '44: 02', thumbnail: 'https: //i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp'},
        {url: 'https: //www.youtube.com/watch?v=wYNAZz86DVo', title: 'C418 - One [full album] (2012)', author: '2nMusic', date: '2013-02-12', duration: '1: 35: 43', thumbnail: 'https: //f4.bcbits.com/img/a1911559443_10.jpg', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '1: 55: 49', thumbnail: 'https: //i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '44: 02', thumbnail: 'http: //www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '44: 02', thumbnail: 'https: //i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '44: 02', thumbnail: 'http: //www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https: //www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '44: 02', thumbnail: 'https: //i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp'}
      ]
    }
  },
  methods: {
    search () {
      var searchValueParsed = this.searchValue.toLowerCase()
      if (searchValueParsed.length < 3) {
        console.log('Dude ! Give me the at least 3 chars ! :o')
        return
      }
      this.searchResult = this.musics.filter(music => (music.title.toLowerCase().indexOf(searchValueParsed) > -1 || music.author.toLowerCase().indexOf(searchValueParsed) > -1))
    },
    focusSearch () {
      if (this.searchValue.length) {
        this.search()
      }else {
        this.$refs.searchInput.focus()
      }
    }
  }
}
</script>

<style>
  .search-input{
    font-size:1.8rem;
    background-color:transparent;
    -webkit-appearance: none;
    box-shadow: none;
    border:none;
    outline:none;
    color:white;
    border-bottom:2px solid transparent;
    width:50%;
    transition:width 0.8s;
    vertical-align: middle;
    padding:0.1rem 2%;
    margin-right:2%;
  }
  .search-input.fill{
    width:80%;
  }
  .search-input:focus{
    width:80%;
    border-bottom-color:#215292;
  }
  #search .page-title label{
    background-color:transparent;
    -webkit-appearance: none;
    border:none;
    padding:0;
    vertical-align: middle;
    display:inline-block;
    height:2rem;
    width:8%;
    font-size:0;
  }
  .search-icon{
    fill:white;
    height:100%;
  }
</style>
