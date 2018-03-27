<template>
  <div class="register">
      <HasloginNav></HasloginNav>
      <Settings></Settings>
      <Footer></Footer>
  </div>
</template>

<script>
import HasloginNav from '@/components/nav/HasLoginNav'
import Settings from '@/components/Settings'
import Footer from '@/components/Footer'

export default {
  name: 'settings',
  data () {
    return {
    }
  },
  components: {
    HasloginNav,
    Settings,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
