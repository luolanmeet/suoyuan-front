<template>
<div id="now">

  <div id="article"><router-link to="/article">每日文章</router-link></div>

  <div class="row" v-for="openDirayUsers in openDirayUserss">
    <div class="col-md-1"></div>

    <div v-for="openDirayUser in openDirayUsers" class="col-md-2">
      <a href="" class="thumbnail" v-on:click="diray(openDirayUser.id)"
         v-bind:style="{backgroundImage: 'url(' + openDirayUser.avator + ')'}"></a>
    </div>

    <div class="col-md-1"></div>
  </div>

</div>
</template>

<script>
export default {
  name: 'now',
  data() {
    return {
      openDirayUserss: ""
    }
  },
  methods: {
    diray(writerId) {
      this.$router.push({path:"/diary", query: {writerId: writerId}});
      e.preventDefault();
    }
  },
  created() {

    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    let msg = {
      userId : userId,
      token : token
    }

    // 请求图片
    this.$http.post("http://localhost:8080/getOpenDirayUser", msg, {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code == '0') {
                  this.openDirayUserss = response.body.data;
                }
              })

  }
}
</script>

<style scoped>

#now {
  /* background-color: #000000; */
  /* margin-top: 30px; */
}

#article{
  margin: 6px;
  margin-right: -800px;
}

.row {
  width: 74%;
  margin-left: 13%;
}

.col-md-1,
.col-md-2 {
  padding: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.thumbnail {
  height: 170px;
  width: 170px;
  background-size:cover;
  background-repeat:no-repeat;
  box-shadow: 6px 6px 8px #999999;
}
</style>
