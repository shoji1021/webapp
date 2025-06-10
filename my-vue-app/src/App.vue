<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/nav.vue';
export default defineComponent({
  components: {
    HelloWorld,
    NavBar
  }
});
</script>

<template>
  <NavBar/>
  <HelloWorld message="WEB-APP"/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
NavBar{
  background-color: #000000;
  text-align: center;
  top: 0px;
}
</style>