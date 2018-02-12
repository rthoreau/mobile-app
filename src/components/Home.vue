<template>
  <div id="home">
    <h1>c'est la page home</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted(){
    console.log('test')
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
