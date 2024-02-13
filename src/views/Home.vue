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

  <div class="home align-center justify-center">
    <h1>Home</h1>
  </div>

<PostList :posts="posts" />
  
</template>

<script>
import PostList from '../components/PostList.vue' 
import {ref} from 'vue';

export default {
  name: 'home',
  components: {
    PostList
  },
  setup() {

    const posts = ref([
      {title: 'Welcome to the blog', body: 'Lorem ipsum', id: 1},
      {title: 'Top 5 CSS tips', blody: 'Lorem ipsum', id: 2}
    ])

    return {
      posts
    }
    
  }
}
</script>