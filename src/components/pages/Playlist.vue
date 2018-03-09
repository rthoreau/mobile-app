<template>
  <div id="playlist">
    <header class="page-header">
      <span @click="$router.go(-1)">retour</span>
      <span class="page-title" v-if="mode !== 'edit'">{{id}}</span>
      <input type="text" class="page-title edit" v-if="mode === 'edit'" placeholder="Party, Pop, Sleep..."/>
      <svg class="submenu-link" viewBox="0 0 34.471 34.471"><use xlink:href="#icon-plus"></use></svg>
    </header>
    <div class="page-content">
      <button></button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Playlist',
  components: {
  },
  data () {
    return {
      id:this.$route.params.id,
      mode:this.$route.params.mode,
      playlist
    }
  },
  methods:{
    ...mapActions({
      setPlaylists: 'manageStore/setPlaylists'
    }),
  },
  computed:{
     ...mapGetters({
      getPlaylists: 'manageStore/getPlaylists'
    }),
  },
}
</script>

<style>
input.page-title{
  background-color:transparent;
  height:1.5em;
  margin:0.6rem 0;
  width:70%;
  outline:none;
}
input.page-title:focus{
background-color:rgba(255,255,255,0.2);
}
.edit{
  border:2px dashed white;
  padding:0.5rem;
}
</style>