<template>
<div class="row" id="topDiv">

  <div class="panel panel-success">

    <div class="panel-heading">
      <h3 class="panel-title">我的消息</h3>
    </div>


    <div class="panel-body" v-for="notify in notifys">
      <a v-on:click="getTopic(notify.topicId, notify.id)">
        {{ notify.msg }}
      </a>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'notify',
  data() {
    return {
      notifys : []
    }
  },
  methods: {
    getTopic(topicId, notifyId) {

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');
      let msg = {
        userId: userId,
        token: token,
        notifyId: notifyId
      }
      
      this.$http.post("http://localhost:8080/updateRead", msg, {emulateJSON:true})
                .then(function(response){
                  if (response.body.code != '0') {
                    this.$router.push({path:"/", query: {}});
                  }
                })

      this.$router.push({path:"/topic", query: {topicId: topicId}});
    }
  },
  created() {

    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');
    let msg = {
      userId: userId,
      token: token
    }

    this.$http.post("http://localhost:8080/getNoReadMsg", msg, {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code != '0') {
                  this.$router.push({path:"/", query: {}});
                } else {
                  this.notifys = response.body.data;
                }
              })

  }
}
</script>

<style scoped>

.panel {
  width: 60%;
  margin-left: 20%;
  margin-top: 20px;
  text-align: left;
}

.panel-body {
  border-top: 1px solid;
  border-color: #CCCCCC;
}

.panel-body > a {
  cursor: pointer;
}

</style>
