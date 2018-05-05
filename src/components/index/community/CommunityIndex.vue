<template>
<div class="row" id="topDiv">
  <div class="col-md-7">
    <div id="leftDiv">

      <div class="header">
        <span>话题广场</span>
      </div>

      <div class="topic" v-for="topic in topics">
        <a href="">
          <img v-bind:src="topic.avator"/>
          {{ topic.title }}
      </a>
      </div>
    </div>
  </div>

  <div id="rightDiv" class="col-md-5">

    <div class="contentOne well">
      <div class="avator">
        <a><img v-bind:src="avator"/></a>
      </div>
      <p>{{ nickname }}</p>
   </div>

   <div class="contentTwo well">
     <p>热门标签：</p>
     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-1">
       </div>
     </div>

     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-1">
       </div>
     </div>

     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-1">
       </div>
     </div>

     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-1">
       </div>
     </div>

     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-2">
         <a class="" href="">目标</a>
       </div>
       <div class="col-md-1">
       </div>
     </div>

   </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'suoyuanDesc',
  data() {
    return {
      topics: [],
      nickname: "",
      avator: ""
    }
  },
  created() {

    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    let msg = {
      userId: userId,
      token: token,
    }

    if (token != null && userId != null) {

      this.$http.post("http://localhost:8080/topic", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.$router.push({path:"/", query: {}});
                  } else {
                    console.log(response);
                    this.topics = response.body.data;
                    this.avator = window.localStorage.getItem('avator');
                    this.nickname = window.localStorage.getItem('nickname');
                  }
                })
    } else {
      this.$router.push({path:"/", query: {}});
    }
  }
}
</script>

<style scoped>

#topDiv {
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
  padding-right: 200px;
}

#leftDiv {
  margin-left: 25%;
}
#rightDiv {
}

.header, .topic {
  padding-left: 9px;
  margin-right: 20px;
  height: 45px;
  text-align: left;
}

.header {
  padding-top: 10px;
  background-color: #EFEFFF;
  border: 1px solid;
  border-color: #888888;
}
.topic {
  padding-top: 3px;
  border:1px solid;
  border-top: 0px;
  text-align: left;
  border-radius:2px;
  border-color: #888888;
}
.topic > a {
  text-decoration: none;
}
.topic > a > img {
  width: 38px;
  max-height: 38px;
  border-radius:3px;
}

.contentOne, .contentTwo {
  width: 80%;
  /* border:0.5px solid; */
  border-radius:5px;
  box-shadow: 4px 5px 8px #AAAAAA;
}

.contentOne {
  margin-top: -10px;
  text-align: left;
  height: 180px;
}

.contentTwo {
  background-color: #F5F5F5;
}

.contentOne > .avator {
  margin-top: -5px;
  height: 140px;
  width: 140px;
}

.contentOne > .avator > a > img {
  height: 140px;
  width: 140px;
  border-radius:8px;
}

.contentOne > p {
  margin-top: 5px;
  margin-left: -170px;
  text-align: center;
}

.contentTwo > p {
  /* padding-top: 10px; */
  /* padding-left: 12px; */
  text-align: left;
}

.contentTwo > .row > .col-md-2 {
  margin-left: -4px;
  margin-top: 5px;
  width: 18%;
}

.contentTwo > .row > .col-md-2 > a {
  /* background-color: #DDDDDD; */
  font-size: 15px;
  text-decoration: none;
  /* background-color: #EEEEEE; */
    border-radius:2px;
}

.contentTwo > .row > .col-md-2 > a:hover {
  color: #E0FFFF;
  background-color: #CDB79E;
}

</style>
