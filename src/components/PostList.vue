<template>

  <div class="post_list">
    <div v-for="post in posts" :key="post.id" class="gap-2 text-lg text-bold">
        <SinglePost :posts="post" />
    </div>
  </div>

</template>

<script>
import SinglePost from './SinglePost.vue';

import {onMounted, onUnmounted, onUpdated} from 'vue';

export default {
    props: ['posts'],
    components: {
        SinglePost
    },
    setup() {
        onMounted(() => {
            console.log('mounted')
        })
        onUnmounted(() => {
            console.log('unmounted')
        })
        onUpdated(() => {
            console.log('updated')
        })
    }
}
</script>

<style>

</style>