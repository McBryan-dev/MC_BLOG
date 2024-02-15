<template>

  <div class="post">
    <router-link :to="{name: 'details', params: {id: posts.id}}">
      <h1>{{posts.title}}</h1>
    </router-link>
    <p>{{snippet}}</p>
    <span v-for="tag in posts.tags" :key="tag">{{tag}}</span>
  </div>

</template>

<script>

import {computed} from 'vue';

export default {
    props: ['posts'],
    setup(props) {
        const snippet = computed(() => {
            return props.posts.body.substring(0,100) + '....'
        })
        return {
            snippet
        }
    }
}
</script>

<style>

</style>