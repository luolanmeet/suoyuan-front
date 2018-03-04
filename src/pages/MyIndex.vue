<template>
  <div class="index">
      <HasloginNav></HasloginNav>
      <MyIndex></MyIndex>
      <Footer></Footer>
  </div>
</template>

<script>
import HasloginNav from '@/components/nav/HasLoginNav'
import MyIndex from '@/components/index/hasLogin/myIndex/MyIndex'
import Footer from '@/components/Footer'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    HasloginNav,
    MyIndex,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
