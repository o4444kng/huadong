<template>
  <div class="container">

    <scroll-item v-for="(item, index) in state" :key="item.id" :item="item" :target-index="index" ref="itemRefs"/>

  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
}
</style>

<script setup lang="ts">

import ScrollItem from './scroll-item.vue';

import { onMounted, onUnmounted, reactive, ref } from 'vue';

const result = Array(50).fill(0).map((_, index) => {
    return { id: index, imgUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/young_girl.png', isIntersecting: false, isComplete: false }
})

const state = reactive(
  result
);

const intersectionOptions = {
  threshold: 0.5 // 可以根据需要调整交叉阈值
};

// @ts-ignore
function handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      //进入视窗
      const targetIndex = entry.target.getAttribute('target-index') || '0';
      state[parseInt(targetIndex)].isIntersecting = true

    } else {
      //离开视窗
      const targetIndex = entry.target.getAttribute('target-index') || '0';
      state[parseInt(targetIndex)].isIntersecting = false;

    }
  })
}


const itemRefs = ref([])
onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, intersectionOptions)
  itemRefs.value.forEach((itemRef) => {
    // @ts-ignore
    observer.observe(itemRef.$el)//获取组件上的element
  })

  onUnmounted(() => {
    observer.disconnect();
  })
})


</script>
