<template>
  <div class="noLoginIndex">
      <NoLoginNav></NoLoginNav>
      <SuoyuanDesc></SuoyuanDesc>
      <ShowPic></ShowPic>
      <Footer></Footer>
  </div>
</template>

<script>
import NoLoginNav from '@/components/nav/NoLoginNav'
import SuoyuanDesc from '@/components/index/noLogin/SuoyuanDesc'
import ShowPic from '@/components/index/noLogin/ShowPic'
import Footer from '@/components/Footer'

export default {
  name: 'noLoginIndex',
  data () {
    return {
    }
  },
  components: {
    NoLoginNav,
    SuoyuanDesc,
    ShowPic,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
