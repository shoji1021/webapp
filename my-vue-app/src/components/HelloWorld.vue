<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>テスト用練習WEBサイト</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 20px;
}
</style>