<template>
<div class="row">
  <Alert v-if="alert" v-bind:message = "alert"></Alert>

    <div class="well">
      <h4>{{ date }}</h4>
      <div>
        <textarea id="content" rows="3" cols="20" v-model="content">
        </textarea>
      </div>
      <button v-on:click="writeDiray" class="btn btn-primary">提交</button>
    </div>
  </div>
</template>

<script>

import Alert from './Alert'

export default {
  name: 'writeDiray',
  data() {
    return {
      date: "",
      content: "",
      alert: ""
    }
  },
  components: {
    Alert
  },
  methods: {
    writeDiray(e) {

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');
      var content = this.content;
      let msg = {
        userId: userId,
        token: token,
        content: content
      }
      this.$http.post("http://localhost:8080/writeDiray", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.alert = response.body.cause;
                  } else {
                    console.log(response);
                    // this.$router.push({path:"/myIndex", query: {}});
                    this.$router.push({path:"/diary", query: {writerId: userId}});
                  }
                })
      e.preventDefault();
    }
  },
  created() {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    var date = new Date();
    var showDay =  new Array('星期日','星期一','星期二',
                      '星期三','星期四','星期五','星期六');
    this.date = date.getFullYear() + "年" + (date.getMonth()+1)
                  + "月" + date.getDate() + "日 "
                  + showDay[date.getDay()];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
  width: 64%;
  margin-left: 18%;
}

#content {
  width: 500px;
  height: 470px;
  resize: none;
  font-size: 20px;
  margin-bottom: 20px;
  /* background-color: #EFEFEF; */
}

</style>
