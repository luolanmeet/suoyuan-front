<template>
<div>

  <form v-on:submit="settings">

    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">昵称</span>
          <input type="text" class="form-control" placeholder="nickname"
            aria-describedby="basic-addon1" v-model="userMsg.nickname">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">个人签名</span>
          <input type="text" class="form-control" placeholder="signature"
            aria-describedby="basic-addon1" v-model="userMsg.signature">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">密码</span>
          <input type="password" class="form-control" placeholder="password"
            aria-describedby="basic-addon1" v-model="userMsg.password">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">确认密码</span>
          <input type="password" class="form-control" placeholder="password again"
            aria-describedby="basic-addon1" v-model="userMsg.passwordAgain">
        </div>
        <div class="input-group">
          <span class="" id="basic-addon1">
            是否公开日记  &nbsp;
            <input type="checkbox" v-model="userMsg.isOpen">
          </span>
        </div>
      </div>
      <div class="col-md-1">
        <div class="thumbnail" id="avatorFrom" action="">
          <div v-bind:style="{backgroundImage: 'url(' + pic + ')'}">
            <a href="javascript:" class="wrapper">
              <input type="file" v-on:change="picChange($event)" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div>
      <button type="submit" class="btn btn-primary">修改</button>
    </div>
  </form>

</div>

</template>

<script>
import Alert from './Alert'

export default {
  name: 'settings',
  data() {
    return {
      userMsg: {},
      pic: "",
      avator:"",
      file: "",
      token:"",
      userId:""
    }
  },
  components: {
    Alert
  },
  methods: {
    settings(e) {

      var nickname = this.userMsg.nickname;
      var signature = this.userMsg.signature;
      var pwd =  this.userMsg.password;
      var pwdAgain =  this.userMsg.passwordAgain;
      var isOpen =  this.userMsg.isOpen;

      if (isOpen) {
        isOpen = 1;
      } else {
        isOpen = 0;
      }

      let formData = new FormData();
      formData.append('nickname', nickname);
      formData.append('signature', signature);
      formData.append('pwd', pwd);
      formData.append('isOpen', isOpen);
      formData.append('token', this.token);
      formData.append('userId', this.userId);
      formData.append('avator', this.avator);

      let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
      }

      // 发送修改请求
      this.$http.post("http://localhost:8080/update", formData, config)
                .then(function(response){
                    if (response.body.code == '0') {
                      this.$router.push({path:"/myIndex", query: {}});
                    }
                })

      e.preventDefault();
    },
    picChange(event) {

        let file = event.target.files[0];
        this.file = file;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var that=this;
        reader.onloadend=function(){
          that.pic = reader.result;
        }

        let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
        if (file && supportedTypes.indexOf(file.type) >= 0) {
        } else {
            alert('文件格式只支持：jpg、jpeg 和 png');
        }

        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('token', this.token);
        formData.append('userId', this.userId);

        let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
        }
        // 发送修改请求
        this.$http.post("http://localhost:8080/uploadPic", formData, config)
                  .then(function(response){
                      if (response.body.code == '0') {
                        this.avator = response.body.data;
                      }
                  })
    }
  },
  created() {

    this.token = window.localStorage.getItem('token');
    this.userId = window.localStorage.getItem('userId');

    let msg = {
      userId : this.userId,
      token : this.token
    }
    this.$http.post("http://localhost:8080/userMsg", msg, {emulateJSON:true})
              .then(function(response){
                if (response.body.code == '0') {
                  this.userMsg.nickname = response.body.data.nickname;
                  this.userMsg.signature = response.body.data.signature;
                  this.userMsg.isOpen = response.body.data.isOpen;
                  this.pic = response.body.data.avator;
                }
              })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 15px;
}
.input-group {
  margin: 8px;
}
span {
  width: 90px;
}
.form-control {
  width: 330px;
}

#avator {
  width: 180px;
  height: 180px;
  border: 5px;
}

#avatorFrom {
  width: 190px;
  height: 190px;
}

#avatorFrom > div {
  width: 180px;
  height: 180px;
  background-size:cover;
}

.wrapper input{
  opacity:0;
  height:180px;
  width:180px;
}

</style>
