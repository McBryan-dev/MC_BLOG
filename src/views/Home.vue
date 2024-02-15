<!-- <template>

  <div class="home">
    Home

    <p>{{name}}</p>

    <input type="text" v-model="search">

    <p>search term _ {{search}}</p>

    <div v-for="name in matchingNames" :key="name">{{name}}</div>
  
    <button @click="handleClick">stop watching</button>
  
  </div>
  
</template> --!>

<!-- <script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'home',
  setup() {

    const search = ref('')

    const names =ref(['maria', 'yoshi', 'luigi', 'bowser', 'koopa', 'peach'])

    const stopWatch = watch(search, () => {
      console.log('watching')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect ran', search.value)
    })
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return {
     names,
     search,
     stopWatch,
     stopEffect,
     handleClick,
     matchingNames
    }

  }
}
</script> -->

<template>

  <div class="home align-center p-3 justify-center text-center text-xl">
    <h1>Home</h1>
    <br />
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <div class="bg-slate-400 p-3 w-36 text-center text-red-500" v-if="error">
      {{error}}
    </div>
    <br />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Deleta A Post</button>

  </div>
  
</template>

<script>
import  getPosts from '../composables/getPosts.js'
import PostList from '../components/PostList.vue' 
import {ref} from 'vue';

export default {
  name: 'home',
  components: {
    PostList
  },
  setup() {

    const {posts, error, load} = getPosts()

    load()

    const showPosts = ref(true)

    return {
      posts,
      error,
      load,
      showPosts
    }
    
  }
}
</script>