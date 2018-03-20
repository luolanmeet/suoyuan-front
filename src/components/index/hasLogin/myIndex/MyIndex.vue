<template>
<div class="row">
  <div class="col-md-5">
    <img  class="thumbnail" v-bind:src="user.avator">
    <p class="navbar-text">{{ user.signature }}</p>
  </div>

  <div class="col-md-7">
    <div id="date">
      <p>{{ lastDirayDate }}</p>
    </div>

    <div id="context">
      <div v-for="diray in dirays">
        <p class="time">{{ diray.time }}</p>
        <pre class="context">{{ diray.content }}</pre>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'diaryList',
  data() {
    return {
      user: {
        avator: "",
        signature: ""
      },
      lastDirayDate: "",
      dirays: ""
    }
  },
  methods: {
  },
  mounted() {
  },
  created() {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    // 获取用户信息以及用户最后的日志信息
    let msg = {
      userId : userId,
      token : token
    }
    this.$http.post("http://localhost:8080/myIndex", msg, {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code == '0') {
                  this.user.avator = response.body.data.avator;
                  this.user.signature = response.body.data.signature;
                  this.lastDirayDate = response.body.data.lastDirayDate;
                  this.dirays = response.body.data.dirays;
                }
              })

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
}

.col-md-7,
.col-md-5 {
  padding: 0px;
}

.col-md-5 {
  padding-top: 20px;
  padding-left: 120px;
  /* background-color: #EEEEEE; */
}

.col-md-5 > img {
  width: 300px;
  height: 300px;
  margin-left: 180px;
}
.col-md-5 > p {
  width: 300px;
  margin-left: 180px;
  color: #999999;
}

.col-md-7 {
  padding-top: 24px;
  padding-right: 300px;
  /* background-color: #AAAAAA; */
}

#date {
  text-align: left;
  font-size: 18px;
  height: 30px;
  margin-bottom: 12px;
  border-bottom-style: inset;
  border-color: #AAAAAA;
}

.time {
  text-align: left;
  font-size: 14px;
  margin-bottom: 0px;
  color: #AAAAAA;
}
.context {
    text-align: left;
    padding-left: 16px;
    font-size: 15px;
    /* background-color: #FFFFFF; */
    white-space: pre-wrap;
    border: none;
    font-weight:300;
}

</style>
