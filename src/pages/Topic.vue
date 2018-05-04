<template>
  <div class="community">
      <CommunityNav></CommunityNav>
      <Topic></Topic>
      <Footer></Footer>
  </div>
</template>

<script>
import CommunityNav from '@/components/nav/CommunityNav'
import Topic from '@/components/index/community/Topic'
import Footer from '@/components/Footer'

export default {
  name: 'community',
  data () {
    return {
    }
  },
  components: {
    CommunityNav,
    Topic,
    Footer
  },
  created() {

    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');
    // if (token != null && userId != null) {
    //   this.$router.push({path:"/diary", query: {writerId: userId}});
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
