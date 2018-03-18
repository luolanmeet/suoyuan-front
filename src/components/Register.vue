<template>
<div class="row">
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
export default {
  name: 'register',
  data() {
    return {
      registerMsg: {}
    }
  },
  methods: {
    userRegister(e) {
      alert("aaa");
      var email = this.registerMsg.email.trim();
      var nickname = this.registerMsg.nickname.trim();
      var pwd =  this.registerMsg.password.trim();
      var pwdAgain =  this.registerMsg.passwordAgain.trim();

      if (email == "" || pwd == "" || pwdAgain == "" || nickname == "") {
        alert("字段不能为空");
        e.preventDefault();
        return;
      }

      if (pwd != pwdAgain) {
        alert("密码必须一致");
        e.preventDefault();
        return;
      }
      e.preventDefault();
      let msg = {
        email : email,
        pwd : pwd,
        nickname : nickname
      }
      console.log(msg);
      // 发送注册请求
      this.$http.post("http://localhost:8080/register", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                })

      e.preventDefault();
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
