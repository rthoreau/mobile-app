<template>
  <div class="submenu">
    <ul>
      <li>Do something</li>
      <li>Do nothing</li>
      <li>Delete all the internet</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SubMenu',
}
</script>

<style>
.submenu{
  background-color:white;
  position:fixed;
  top:8rem;
  right:0;
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
}
</style>