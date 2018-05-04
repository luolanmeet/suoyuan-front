<template>
<div class="row" id="topDiv">
  <div class="col-md-7 ">
    <div id="leftDiv">

      <div class="topic">
        <h4>创建话题</h4>
        <input type="text" id="title"> <span>标题不少于5个字</span>

        <textarea id="reply" rows="3" cols="20" v-model="content" placeholder="想说的">
        </textarea>

        <div v-show="!showTag" id="addTag"><a v-on:click="showTagInput">添加标签</a></div>

        <div v-show="showTag">
          <input type="text" maxlength="2" id="tag"> <span id="tagSpan">标签为两个汉字</span>
        </div>

        <input type="button" id="createBtn" value="创建">
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

  </div>
</div>
</template>

<script>
export default {
  name: 'suoyuanDesc',
  data() {
    return {
      showTag: false,
      content: ""
    }
  },
  methods: {
    showTagInput() {
      this.showTag = true;
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

.topic {
  background-color: #F5F5F5;
  margin-right: 20px;
  padding-left: 9px;
  text-align: left;
  border:0.5px solid;
  border-radius:5px;
  border-color: #AAAAAA;
}

.topic > h4 {
  margin-top: 25px;
  margin-left: 10px;
}

.topic > span {
  margin-left: 5px;
  color: #777777;
  font-size: 12px;
}

.contentOne {
  width: 80%;
}

.contentOne {
  margin-top: -10px;
  text-align: left;
  height: 180px;
  /* border:0.5px solid; */
  border-radius:5px;
  box-shadow: 4px 5px 8px #AAAAAA;
}

.col-md-2 {
  margin-left: -25px;
  text-align: right;
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

#title {

  width: 200px;
  height: 40px;
  padding-left: 8px;
  margin-bottom: 15px;
  border:0.5px solid;
  border-radius:4px;
  border-color: #AAAAAA;
}

#reply {
  width: 98%;
  height: 280px;
  padding-top: 8px;
  padding-left: 8px;
  resize: none;
  border:0.5px solid;
  border-radius:4px;
  border-color: #AAAAAA;
  font-size: 14px;
}

#createBtn {
  width: 80px;
  height: 35px;
  border-radius:2px;
  margin: 20px;
  margin-left: auto;
}

#addTag, #tag{
  margin-top: 20px;
}

#tag {
  width: 50px;
  height: 30px;
  font-size: 14px;
  padding-left: 10px;
  border:0.5px solid;
  border-radius:4px;
  border-color: #AAAAAA;
}

#tagSpan {
  margin-left: 5px;
  color: #777777;
  font-size: 12px;
}

</style>
