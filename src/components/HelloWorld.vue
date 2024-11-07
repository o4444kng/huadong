<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router';
// @ts-ignore
import startGetCurrentVersion from '../tools/getCurrentVersion';

defineProps<{ msg: string }>()

const count = ref(0)

const router = useRouter();
const goToScroll = () => {
  router.push('/scroll');
}

const htmlValue = ref(`<button>点击</button>`)

const result = ref<string>('')
const gotoRequest = () => {
  console.log('gotoRequest')

  const xhr = new XMLHttpRequest()
  xhr.open('get', '/news/api/news/getTrainType', true)
  xhr.onload = ((ev) => {
    console.log('ev = ', ev)
    const responseText = xhr.responseText
    console.log('responseText = ', responseText)
  });

  xhr.send()
}

startGetCurrentVersion()

</script>

<template>
  <h1>msg - {{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit-111
      <code>components/HelloWorld.vue</code> to test HMR-222
    </p>
  </div>

  <p>
    Check out-11
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the-111
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <button @click="goToScroll">Go to Scroll</button>
  <div v-html="htmlValue"></div>
  <div>result = {{result}}</div>
  <button @click="gotoRequest">requestAction</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
