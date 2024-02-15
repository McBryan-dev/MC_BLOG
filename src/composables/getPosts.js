import {ref} from 'vue'

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
    //   error.value = 'Loading...'
      try {
        const data = await fetch('http://localhost:3000/posts')

        if(!data.ok) {
          throw Error('no data available')
        } else {
          posts.value = await data.json()
        }
        
      } catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return {
        posts,
        error,
        load
    }

}

export default getPosts;