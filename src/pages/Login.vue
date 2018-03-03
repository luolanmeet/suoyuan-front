<template>
  <div class="login">
      <noLoginNav></noLoginNav>
      <Login></Login>
      <Footer></Footer>
  </div>
</template>

<script>
import NoLoginNav from '@/components/nav/NoLoginNav'
import Login from '@/components/Login'
import Footer from '@/components/Footer'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {
    NoLoginNav,
    Login,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
