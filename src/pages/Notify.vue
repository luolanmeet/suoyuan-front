<template>
  <div class="community">
      <CommunityNav></CommunityNav>
      <Notify></Notify>
      <Footer></Footer>
  </div>
</template>

<script>
import CommunityNav from '@/components/nav/CommunityNav'
import Notify from '@/components/Notify'
import Footer from '@/components/Footer'

export default {
  name: 'notify',
  data () {
    return {
    }
  },
  components: {
    CommunityNav,
    Notify,
    Footer
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
