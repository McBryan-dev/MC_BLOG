<template>
  <div>
    <SingleOtherVue :post="post" />
  </div>
</template>

<script>
import SingleOtherVue from './SingleOther.vue';
import {ref} from 'vue';

export default {

    components: {
        SingleOtherVue
    },
    setup() {

        const error = ref(null)
        const post = ref()

        const getPosts = async () => {
            try {
                const res = await fetch ('http://localhost:3000/posts')

                // const data = res.json()

                if(!res.ok) {
                    console.log(error)
                } else {
                    post.value = res.json();
                }
            } catch(err) {
                error.value = err.message
                alert(err)
            }   
        }

        getPosts()

        return {
            error,
            post,
            getPosts
        }
    }
}
</script>

<style>

</style>