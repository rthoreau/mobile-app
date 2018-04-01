<template>
  <div id="favorite">
    <header class="page-header"><span class="page-title">Favoris</span><svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg></header>
    <SubMenu v-if="submenuVisible" :links="links" @closeMenu="submenuVisible = false"></SubMenu>
    <div class="page-content">
      <MusicItem 
      v-for="(data, index) in getMusics" 
      :key="index" 
      :music="data"
      :page="'favorite'"></MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
import SubMenu from '../components/SubMenu'
import {mapGetters} from 'vuex'

export default {
  name: 'Favorite',
  components: {
    MusicItem,
    SubMenu
  },
  data () {
    return {
      submenuVisible: false,
      links:[{action: () => console.log(this.musics), text:'Do something'},
      {action:() =>  alert('Done.'), text:'Do nothing'},
      {action:() =>  alert('Something went wrong ! Try again later !'), text:'Delete all the internet'}]
    }
  },
  computed:{
     ...mapGetters({
      getMusics: 'manageStore/getMusics'
    })
  }
}
</script>

<style>
</style>