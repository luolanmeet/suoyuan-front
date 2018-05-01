<template>
<div class="row">
  <div class="col-md-7">
    <div id="leftDiv">

      <div class="header">
        <span>话题广场</span>
      </div>

      <div class="topic">
        <a href=""><img src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg" alt="">
        hello world</a>
      </div>

      <div class="topic">
        <a href=""><img src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg" alt="">
        hello world</a>
      </div>

      <div class="topic">
        <a href=""><img src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg" alt="">
        你做过的最有趣的事情是什么？</a>
      </div>

    </div>
  </div>

  <div id="rightDiv" class="col-md-5">

    <div class="contentOne well">
      <div class="avator">
        <a><img src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg" alt=""></a>
      </div>
      <p>洛兰相遇</p>
   </div>

   <div class="contentTwo well">
     <p>热门标签：</p>
     <div class="row">
       <div class="col-md-1">
       </div>
       <div class="col-md-2">
         <!-- <a class="btn btn-default" href="">目标</a> -->
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
    return {}
  }
}
</script>

<style scoped>

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
  /* border-radius:5px; */
}
.topic {
  padding-top: 3px;
  border:1px solid;
  border-top: 0px;
  text-align: left;
  border-radius:2px;
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
}

.contentOne {
  margin-top: -10px;
  text-align: left;
  height: 180px;
}

.contentTwo {
  /* background-color: #EEEEEE; */
  /* border-top-style: inset; */
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
  margin-left: 40px;
}

.contentTwo > p {
  padding-top: 12px;
  padding-left: 12px;
  text-align: left;
}
.contentTwo > .row:first-child {
  /* padding-top: 6px; */
}

.contentTwo > .row > .col-md-2 {
  /* margin-bottom: 6px; */
}

.contentTwo > .row > .col-md-2 > a {
  /* background-color: #DDDDDD; */
   text-decoration: none;
}

</style>
