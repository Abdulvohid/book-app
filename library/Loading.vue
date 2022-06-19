<script>
export default {
  name: 'loading-component',
}
</script>

<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="css" scoped>
.lds-dual-ring {
  display: inline-block;
  width: 25px;
  height: 25px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  margin-left: -10px;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
