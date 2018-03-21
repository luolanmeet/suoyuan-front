<template>
  <div class="wirteDiary">
      <HasloginNav></HasloginNav>
      <WirteDiary></WirteDiary>
      <Footer></Footer>
  </div>
</template>

<script>
import HasloginNav from '@/components/nav/HasLoginNav'
import WirteDiary from '@/components/WirteDiary'
import Footer from '@/components/Footer'

export default {
  name: 'wirteDiary',
  data () {
    return {
    }
  },
  components: {
    HasloginNav,
    WirteDiary,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
