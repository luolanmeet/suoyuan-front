<template>
  <div class="index">
      <HasloginNav></HasloginNav>
      <DiaryList></DiaryList>
      <Footer></Footer>
      <Calendar></Calendar>
  </div>
</template>

<script>
import HasloginNav from '@/components/nav/HasLoginNav'
import DiaryList from '@/components/index/hasLogin/index/DiaryList'
import Footer from '@/components/Footer'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    HasloginNav,
    DiaryList,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
