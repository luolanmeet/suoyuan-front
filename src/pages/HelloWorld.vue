<template>
  <div class="hello">
      <noLoginNav></noLoginNav>
      <router-link class="btn btn btn-danger" to="/hw">link</router-link>
  </div>
</template>


<script>

const noLoginNav = () => import('@/components/nav/NoLoginNav')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    noLoginNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
