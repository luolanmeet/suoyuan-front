<template>
  <div class="now">
      <HasLoginNav></HasLoginNav>
      <Now></Now>
      <Footer></Footer>
  </div>
</template>

<script>
import HasLoginNav from '@/components/nav/HasLoginNav'
import Now from '@/components/Now'
import Footer from '@/components/Footer'

export default {
  name: 'now',
  data () {
    return {
    }
  },
  components: {
    HasLoginNav,
    Now,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
