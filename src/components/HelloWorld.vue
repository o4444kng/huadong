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
// method?: string
//   keepalive?: boolean
//   headers?: HeadersInit
//   body?: BodyInit | nulli
//   redirect?: RequestRedirect
//   integrity?: string
//   signal?: AbortSignal | null
//   credentials?: RequestCredentials
//   mode?: RequestMode
//   referrer?: string
//   referrerPolicy?: ReferrerPolicy
//   window?: null
//   dispatcher?: Dispatcher
//   duplex?: RequestDuplex access_key=YOUR_API_KEY&query=London
const result = ref<string>('')
const gotoRequest = () => {
  console.log('gotoRequest')
  // fetch('/news/api/news/getTrainType', {
  //   method: 'get',
  //   credentials: 'omit'
  // }).then((response) => {
  //   console.log(response)
  //   if (response.ok) {
  //     return response.json()
  //   }
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }).then((data) => {
  //   console.log(data)
  //   result.value = JSON.stringify(data);
  // }).catch((error) => {
  //   console.log(error);
  // })
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
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
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
