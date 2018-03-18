<template>
<div class="row">
  <div class="col-md-7">
    <div id="leftDiv" class="jumbotron">
      <form v-on:submit="addCustomer">
        <div class="well">
          <h4>登录信息</h4>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">邮箱</span>
            <input type="text" class="form-control" placeholder="email" aria-describedby="basic-addon1">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">密码</span>
            <input type="password" class="form-control" placeholder="password" aria-describedby="basic-addon1">
          </div>
          <!-- <div class="input-group">
            <span class="input-group-addon" id="basic-addon1">验证码</span>
            <input type="text" class="form-control" placeholder="check code" aria-describedby="basic-addon1">
          </div> -->
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
export default {
  name: 'register',
  data() {
    return {}
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
