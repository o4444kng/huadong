<template>
    <div class="item">
        <div class="box"></div>
        <div class="box-content" v-if="props.item.isComplete || startShowImg">
            <div class="index-number">{{props.item.id}}</div>
            <img class="index-img" src="https://b.bdstatic.com/searchbox/icms/searchbox/img/young_girl.png" alt="图片地址" @load="imageLoaded"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    width: calc(100vw / 3 - 2px - 14px);
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 10px;
    position: relative;
}

.box {
    width: 100%;
    height: 0;
    padding-bottom: 150%;
    position: relative;
}

.box-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.index-number {
    position: absolute;
    text-align: center;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 30px;
    z-index: 99;
}

.index-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

</style>

<script setup lang="ts">
import { ref, toRef, watch, watchEffect, reactive } from "vue";

type ItemType = {id: number, imgUrl: string, isIntersecting: boolean, isComplete: boolean}
type KeyType = keyof ItemType;
const startShowImg = ref(false);
const props = defineProps<{
    item: ItemType
}>();

const imageLoaded = () => {
    props.item.isComplete = true
}
const { item } = reactive(props);
const imgUrl = toRef<ItemType, KeyType>(item, 'imgUrl', '');
const id = toRef(item, 'id');
watch(props, (newValue, _) => {
    if (newValue.item.isIntersecting) {
        setTimeout(() => {
            if (props.item.isIntersecting) {
                startShowImg.value = true;
            } else {
                startShowImg.value = false;
            }
        }, 300)
    } else {
        startShowImg.value = false;
    }
}, {
    immediate: true,
    deep: true
})
watchEffect(() => {
    console.log('====')
    console.log(imgUrl.value, id.value);
})

</script>