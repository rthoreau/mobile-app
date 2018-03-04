<template>
  <div id="favorite">
    <header class="page-header"><span class="page-title">Favoris</span><svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenu()"><use xlink:href="#icon-submenu"></use></svg></header>
    <SubMenu v-show="submenuVisible"></SubMenu>
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
import SubMenu from '../components/SubMenu'

export default {
  name: 'Favorite',
  components: {
    MusicItem,
    SubMenu
  },
  data () {
    return {
      submenuVisible: false,
      musics: [
        {url: 'https://www.youtube.com/watch?v=rVeMiVU77wo', title: 'alt-J (∆) Breezeblocks', author: 'alt-J', date: '2012-03-23', duration: '226', thumbnail: 'http://www.konbini.com/wp-content/blogs.dir/3/files/2012/06/Alt-j-Breezeblocks-480x279.jpg', plateform: 'lo'},
        {url: 'https://www.youtube.com/watch?v=mEBrRSa7BaM', title: 'Klangnomad - Promo 2013', author: 'Klangnomad Music', date: '2013-08-09', duration: '2916', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uL93WD0W8J_S1aLlE_cZVBxJ89RGQD4JvB8zZotXE7XvvW7v', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp'},
        {url: 'https://www.youtube.com/watch?v=wYNAZz86DVo', title: 'C418 - One [full album] (2012)', author: '2nMusic', date: '2013-02-12', duration: '5743', thumbnail: 'https://f4.bcbits.com/img/a1911559443_10.jpg', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=pliDsyfUXcg', title: 'Indie Indie Folk - Summer 2015 Tracklist Included', author: 'Fernando Bueno', date: '2015-07-18', duration: '6949', thumbnail: 'https://i9.ytimg.com/sb/ZwBkXgWNs_M/storyboard3_L2/M0.jpg?sigh=rs%24AOn4CLBUyfI7x8IRqXF_2NdPeIb3UX8tKw', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=umjMGZw6vtw', title: 'Yann Tiersen - "La valse de Monstres" (full Album)', author: 'srtanada08', date: '2013-08-18', duration: '2642', thumbnail: 'http://www.kaltblut-magazine.com/wp-content/uploads/2014/08/yann-tiersen-4df4cdfab01e1-720x385.jpg', plateform: 'yt'},
        {url: 'https://www.youtube.com/watch?v=D6TawVna7PQ', title: 'ESCAPE - A Beautiful Chill Mix', author: 'Pulse8', date: '2017-12-14', duration: '6183', thumbnail: 'https://i9.ytimg.com/sb/D6TawVna7PQ/storyboard3_L1/M2.jpg?sigh=rs%24AOn4CLDmljK3QQnUIad1F1p0KD8x3zZL_w', plateform: 'sp'}
      ]
    }
  },
  methods: {
    submenu () {
      this.submenuVisible = !this.submenuVisible
    }
  }
}
</script>

<style>
</style>