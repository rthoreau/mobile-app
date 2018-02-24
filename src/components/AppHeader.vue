<template>
  <header id="appHeader">
    <ul>
      <li><router-link to="/">
        <svg viewBox="0 0 37.779 35.262"><use xlink:href="#icon-home"></use></svg>
      </router-link></li>
      <li><router-link to="/Playlist">
        <svg viewBox="0 0 38.394 35.2"><use xlink:href="#icon-playlist"></use></svg>
      </router-link></li>
      <li><router-link to="/Favorite">
        <svg viewBox="0 0 38.394 35.2"><use xlink:href="#icon-favorite"></use></svg>
      </router-link></li>
      <li><router-link to="/Search">
        <svg viewBox="0 0 29.648 34.728"><use xlink:href="#icon-search"></use></svg>
      </router-link></li>
      <li><router-link to="/Submenu">
        <svg viewBox="0 0 7.234 31.32"><use xlink:href="#icon-submenu"></use></svg>
      </router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'App_header'
}
</script>

<style>
  #appHeader{
    position:fixed;
    top:0;
    width:100%;
    height:4em;
    background-color:#4b89dc;
    z-index:100;
  }
  #appHeader ul{
    list-style-type:none;
    margin:0;
    padding:0.25rem 8% 0.25rem 4%;
    height:100%;
    font-size:0;
  }
  #appHeader li{
    display:inline-block;
    width:23%;
    height:100%;
    text-align:center;
  }
  #appHeader li:last-child{
    display:inline-block;
    width:8%;
  }
  #appHeader a{
    position:relative;
    display:inline-block;
    padding:1rem;
    height:100%;
  }
  #appHeader a:after{
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
  #appHeader a.router-link-exact-active:after{
    width:100%;
  }
  #appHeader svg{
    fill:white;
    height:100%;
    transition:fill 0.5s;
  }
  #appHeader a.router-link-exact-active svg{
    fill:#215292;
  }
</style>
