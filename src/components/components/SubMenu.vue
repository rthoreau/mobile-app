<template>
  <div class="submenu">
    <ul>
      <li v-if="links" v-for="(link, index) in links" 
        v-bind:key="index">
        <a @click="link.action" v-if="link.mode !== 'router'">{{link.text}}</a>
        <router-link v-if="link.mode === 'router'" v-bind:to="link.action">{{link.text}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  props:{
    links:Array,
  },
  data(){
    return{
      //submenuVisible: false,
    }
  },
  /*methods: {
    submenu () {
      this.submenuVisible = !this.submenuVisible
    }
  }*/
  mounted(){
    console.log(this.$el);
  }
}
</script>

<style>
.submenu{
  background-color:white;
  position:fixed;
  top:8rem;
  right:0.5rem;
  z-index:100;
}
.submenu ul{
  list-style-type:none;
  margin:0;
  padding:0.5rem;
  text-align:right;
}
.submenu li{
  padding:0.3rem;
  font-size:1rem;
}
</style>