<template>
  <header id="appHeader">
    <ul class="nav">
      <li><router-link to="/">
        <svg viewBox="0 0 37.779 35.262"><use xlink:href="#icon-home"></use></svg>
      </router-link></li>
      <li><router-link to="/Playlists">
        <svg viewBox="0 0 38.394 35.2"><use xlink:href="#icon-playlist"></use></svg>
      </router-link></li>
      <li><router-link to="/Favorite">
        <svg viewBox="0 0 38.394 35.2"><use xlink:href="#icon-favorite"></use></svg>
      </router-link></li>
      <li><router-link to="/Search">
        <svg viewBox="0 0 29.648 34.728"><use xlink:href="#icon-search"></use></svg>
      </router-link></li>
      <li><a @click="submenuVisible = !submenuVisible">
        <svg viewBox="0 0 7.234 31.32"><use xlink:href="#icon-submenu"></use></svg>
      </a></li>
    </ul>
    <SubMenu v-if="submenuVisible" v-bind:links="links"></SubMenu>
  </header>
</template>

<script>
import SubMenu from './components/SubMenu'
export default {
  name: 'App_header',
  components: {
    SubMenu
  },
  data(){
    return{
      submenuVisible: false,
      links:[{action:'', text:'Soon more features here'}]
    }
  },
}
</script>

<style>
  #appHeader{
    position:fixed;
    top:0;
    width:100%;
    height:4rem;
    background-color:#4b89dc;
    z-index:100;
  }
  #appHeader .nav{
    list-style-type:none;
    margin:0;
    padding:0.25rem 8% 0.25rem 4%;
    height:100%;
    font-size:0;
  }
  #appHeader .nav li{
    display:inline-block;
    width:23%;
    height:100%;
    text-align:center;
  }
  #appHeader .nav li:last-child{
    display:inline-block;
    width:8%;
  }
  #appHeader .nav a{
    position:relative;
    display:inline-block;
    padding:1rem;
    height:100%;
  }
  #appHeader .nav a:after{
    position:absolute;
    left:50%;
    bottom:0;
    content:'';
    width:0;
    transform:translate(-50%,0);
    height:0.1rem;
    background-color:#215292;
    transition:width 0.5s;
  }
  #appHeader .nav a.router-link-exact-active:after{
    width:100%;
  }
  svg{
    fill:white;
    height:100%;
    transition:fill 0.5s;
  }
  #appHeader .nav a.router-link-exact-active svg{
    fill:#215292;
  }
  #appHeader .submenu{
    top:4rem;
  }
</style>
