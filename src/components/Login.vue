<template>
<div class="row">
  <Alert v-if="alert" v-bind:message = "alert"></Alert>
  <div class="col-md-7">
    <div id="leftDiv" class="jumbotron">
      <form v-on:submit="userLogin">
        <div class="well">
          <h4>登录信息</h4>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">邮箱</span>
            <input type="text" class="form-control" placeholder="email"
              aria-describedby="basic-addon1" v-model="loginMsg.email">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">密码</span>
            <input type="password" class="form-control" placeholder="password"
              aria-describedby="basic-addon1" v-model="loginMsg.pwd">
          </div>
          <button type="submit" class="btn btn-primary">登录</button>
        </div>
      </form>
    </div>
  </div>

  <div class="col-md-5">
    <div class="jumbotron">
      <br/><br/>
      <router-link class="btn btn-primary" to="/register">注册</router-link>
    </div>
  </div>
</div>
</template>

<script>

import Alert from './Alert'

export default {
  name: 'register',
  data() {
    return {
      loginMsg : {},
      alert:""
    }
  },
  components: {
    Alert
  },
  methods: {
    userLogin(e) {
      var email = this.loginMsg.email;
      var pwd =  this.loginMsg.pwd;
      if (email == null || pwd == null) {
        this.alert = "错误的登录信息";
        e.preventDefault();
        return;
      } else {
        email = email.trim();
        pwd = pwd.trim();
        if (email == "" || pwd == "" ) {
          this.alert = "错误的登录信息";
          e.preventDefault();
          return;
        }
      }

      let msg = {
        email : email,
        pwd : pwd
      }
      // 发送登录请求
      this.$http.post("http://localhost:8080/login", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.alert = response.body.cause;
                  } else {
                    console.log(response);
                    window.localStorage.setItem('token', response.body.data.token);
                    window.localStorage.setItem('userId', response.body.data.userId);
                    this.$router.push({path:"/myIndex", query: {}});
                  }
                })
      e.preventDefault();
    }
  },
  created() {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
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

.col-md-7 {
  padding-top: 20px;
  padding-left: 120px;
}

.col-md-5 {
  padding-top: 30px;
  padding-right: 258px;
}

.jumbotron {
  background-color: #FFFFFF;
}

.well {
  width: 74%;
  margin-left: 24%;
  background-color: #FFFFFF;
  border: none;
  /* border-bottom-style: inset;
  border-bottom-color: #EEEEEE; */
}

.input-group {
  margin: 8px;
}

span {
  width: 90px;
  /* background-color: #FFFFFF; */
}

.form-control {
  width: 400px;
}

h4 {
  margin-left: -420px;
  margin-bottom: 20px;
}

.well > .btn {
  margin-top: 14px;
  margin-right: -360px;
}

#leftDiv {
  border-right-style: outset;
  padding-top: 4px;
  height: 300px;
}
</style>
