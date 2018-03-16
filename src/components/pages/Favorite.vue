<template>
  <div id="favorite">
    <header class="page-header"><span class="page-title">Favoris</span><svg class="submenu-link" viewBox="0 0 7.234 31.32" @click="submenuVisible = !submenuVisible"><use xlink:href="#icon-submenu"></use></svg></header>
    <SubMenu v-if="submenuVisible" v-bind:links="links"></SubMenu>
    <div class="page-content">
      <MusicItem 
      v-for="(uid, index) in musics" 
      v-bind:key="index" 
      v-bind:uid="index"></MusicItem>
    </div>
    <Popup>
      ekghrelrglo
    </Popup>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
import SubMenu from '../components/SubMenu'
import Popup from '../components/Popup'

export default {
  name: 'Favorite',
  components: {
    MusicItem,
    SubMenu,
    Popup
  },
  data () {
    return {
      submenuVisible: false,
      links:[{action: () => console.log(this.musics), text:'Do something'},
      {action:() =>  alert('Done.'), text:'Do nothing'},
      {action:() =>  alert('Something went wrong ! Try again later !'), text:'Delete all the internet'}],
      musics: this.$store.getters['manageStore/getMusics']
    }
  }
}
</script>

<style>
</style>