<template>
<div class="row">
  <Alert v-if="alert" v-bind:message = "alert"></Alert>

    <div class="well">
      <h4>{{ title }}</h4>
      <p>{{ author }}</p>
      <pre>{{ content }}</pre>
    </div>
  </div>
</template>

<script>

import Alert from './Alert'

export default {
  name: 'writeDiray',
  data() {
    return {
      title: "",
      author: "",
      content: "",
      alert: ""
    }
  },
  components: {
    Alert
  },
  methods: {

  },
  created() {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');
    let msg = {
      userId: userId,
      token: token
    }
    this.$http.post("http://localhost:8080/getArticle", msg, {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code != '0') {
                  this.alert = response.body.cause;
                } else {
                  console.log(response);
                  this.title = response.body.data.title;
                  this.author = response.body.data.author;
                  this.content = response.body.data.content;
                }
              })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
  width: 64%;
  margin-left: 18%;
}

.well {
  /* text-align: left; */
}

pre {
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
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
