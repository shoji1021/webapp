<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hello World',
  props: {
    message: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>テスト用WEBサイト作成</p>
  </div>
</template>


<style scoped>
.hello {
  text-align: center;
}
</style>