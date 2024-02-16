<template>
  <div v-for="pos in post" :key="pos.id">
    <h3>{{pos.title}}</h3>
  </div>
  <div>Hello World</div>
</template>

<script>
export default {
    props:['post'],
    setup() {
        
    }

}
</script>

<style>

</style>