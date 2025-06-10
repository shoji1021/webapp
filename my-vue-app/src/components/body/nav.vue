<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
});
</script>

<template>
  <nav class="nav">
    <ul>
      <li><a href="/">ホーム</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</template>


<style scoped>
.nav {
  background-color: #ffffffd3;
  text-align: center;
  top: 0px;
  height: 70px;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 0px;
  width: 100%;
  display: flex;           /* 横並びにする */
  justify-content: center; /* 中央寄せ */
  align-items: center;     /* 縦方向中央 */
  height: 100%;
}
li {
  margin: 0 20px;          /* リスト間の余白 */
}
a {
  color: #222;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}
:global(body) {
  margin: 0;
  padding: 0;
}
</style>