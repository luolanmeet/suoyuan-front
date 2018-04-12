<template>
  <div class="article">
      <HasloginNav></HasloginNav>
      <Article></Article>
      <Footer></Footer>
  </div>
</template>

<script>
import HasloginNav from '@/components/nav/HasLoginNav'
import Article from '@/components/Article'
import Footer from '@/components/Footer'

export default {
  name: 'article',
  data () {
    return {
    }
  },
  components: {
    HasloginNav,
    Article,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
