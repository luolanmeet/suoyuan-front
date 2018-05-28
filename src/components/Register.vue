<template>
<div class="row">
  <Alert v-if="alert" v-bind:message = "alert"></Alert>
  <div class="col-md-7">
    <div id="leftDiv" class="jumbotron">
      <form v-on:submit="userRegister">
        <div class="well">
          <h4>注册信息</h4>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">邮箱</span>
            <input type="text" class="form-control" placeholder="email"
              aria-describedby="basic-addon1" v-model="registerMsg.email">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">昵称</span>
            <input type="text" class="form-control" placeholder="nickname"
              aria-describedby="basic-addon1" v-model="registerMsg.nickname">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">密码</span>
            <input type="password" class="form-control" placeholder="password"
              aria-describedby="basic-addon1" v-model="registerMsg.password">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">确认密码</span>
            <input type="password" class="form-control" placeholder="password again"
              aria-describedby="basic-addon1" v-model="registerMsg.passwordAgain">
          </div>

          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">验证码</span>
            <input type="text" class="form-control" placeholder="verification code"
              aria-describedby="basic-addon1" v-model="registerMsg.vCode">
          </div>

          <div class="code" id="checkCode">
            <span v-on:click="createCode()">
              {{ vCode }}
            </span>
          </div>

          <button type="submit" class="btn btn-primary">注册</button>
        </div>
      </form>
    </div>
  </div>

  <div class="col-md-5">
    <div class="jumbotron">
      <br/><br/>
      <router-link class="btn btn-primary" to="/login">登录</router-link>
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
      registerMsg: {},
      alert:"",
      vCode:""
    }
  },
  components: {
    Alert
  },
  created() {
    this.createCode();
  },
  methods: {
    userRegister(e) {

      var email = this.registerMsg.email;
      var nickname = this.registerMsg.nickname;
      var pwd =  this.registerMsg.password;
      var pwdAgain =  this.registerMsg.passwordAgain;
      var vCode = this.registerMsg.vCode;

      if (email == null || pwd == null || vCode == null
            || pwdAgain == null || nickname == null) {
        this.alert = "字段不能为空";
        e.preventDefault();
        return;
      } else {
        email = email.trim();
        pwd = pwd.trim();
        pwdAgain = pwdAgain.trim();
        nickname = nickname.trim();
        if (email == "" || pwd == ""
            || pwdAgain == "" || nickname == "") {
          this.alert = "字段不能为空";
          e.preventDefault();
          return;
        }
      }

      if (pwd != pwdAgain) {
        this.alert = "密码必须一致";
        e.preventDefault();
        return;
      }

      if (vCode.toLowerCase() != this.vCode.toLowerCase()) {
        this.alert = "请输入正确的验证码";
        e.preventDefault();
        return;
      }

      e.preventDefault();
      let msg = {
        email : email,
        pwd : pwd,
        nickname : nickname
      }

      // 发送注册请求
      this.$http.post("http://localhost:8080/register", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.alert = response.body.cause;
                  } else {
                    this.$router.push({path:"/login", query: {alert: "注册成功,欢迎来到所愿!"}});
                  }
                })

      e.preventDefault();
    },
    createCode() {
      var str="azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
      var vCode="";
      for (var i = 0; i < 5; i++) {
        var index=Math.floor(Math.random()*62);
         vCode += str.charAt(index);
      }
      this.vCode = vCode;
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
  height: 330px;
}
.code {
   margin-right: 40px;
   font-family:Arial;
   font-style:italic;
   color:#1EE30E;
   font-size:15px;
   letter-spacing:3px;
   font-weight:bolder;
   text-align:right;
   vertical-align:middle;
}
.code > span {
  cursor:pointer;
  border-bottom-style: outset;
}
</style>
