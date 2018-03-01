<template>
  <div class="register">
      <noLoginNav></noLoginNav>
      <Register></Register>
      <Footer></Footer>
  </div>
</template>

<script>
import NoLoginNav from '@/components/nav/NoLoginNav'
import Register from '@/components/Register'
import Footer from '@/components/Footer'

export default {
  name: 'register',
  data () {
    return {
    }
  },
  components: {
    NoLoginNav,
    Register,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
