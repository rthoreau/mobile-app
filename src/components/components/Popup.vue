<template>
  <div class="popup-overlay">
    <div class="popup">
        <slot/>
        <button>Ok</button>
        <button>Annuler</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenu'
}
</script>

<style>
.popup-overlay{
    background-color:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
.popup{
  background-color:white;
  position:fixed;
  top:50%;
  left:50%;
  width:80%;
  padding:1%;
  transform:translate(-50%,-50%);
}
.popup button{
    width:8rem;
    padding:0.5rem;
    border:1px solid #ddd;
}

</style>