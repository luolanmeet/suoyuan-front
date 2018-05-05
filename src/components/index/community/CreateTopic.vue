<template>
<div class="row" id="topDiv">
  <div class="col-md-7 ">
    <div id="leftDiv">

      <div class="topic">
        <h4>创建话题</h4>
        <input type="text" id="title" v-model="title"> <span>标题不少于5个字</span>

        <textarea id="reply" rows="3" cols="20" v-model="content" placeholder="想说的">
        </textarea>

        <div v-show="!showTag" id="addTag"><a v-on:click="showTagInput">添加标签</a></div>

        <div v-show="showTag">
          <input type="text" maxlength="2" id="tag" v-model="tag"> <span id="tagSpan">标签为两个汉字</span>
        </div>

        <input type="button" id="createBtn" value="创建" v-on:click="createTopic">
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

   <div id = "error" v-if="error" class="alert alert-danger">{{ error }}</div>

  </div>
</div>
</template>

<script>
export default {
  name: 'suoyuanDesc',
  data() {
    return {
      showTag: false,
      title: "",
      content: "",
      tag:"",
      avator: "",
      nickname: "",
      error:""
    }
  },
  methods: {
    showTagInput() {
      this.showTag = true;
    },
    createTopic(e) {

      var content = this.content;
      var title = this.title;
      var tag = this.tag;

      if (title.length < 5) {
        this.error = "标题不少于五个字哦";
        return ;
      }
      if (content.length == 0) {
        this.error = "内容不能为空哦";
        return ;
      }

      if (tag.length != 0) {
        if (tag.length != 2) {
          this.error = "标签必须是两个汉字哦";
          return ;
        }
        if(!/^[\u4e00-\u9fa5]+$/gi.test(tag))  {
          this.error = "标签只能是汉字哦";
          return ;
        }
      }

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      let msg = {
        userId: userId,
        token: token,
        title: title,
        tag: tag,
        content: content
      }

      this.$http.post("http://localhost:8080/createTopic", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.error = response.body.cause;
                  } else {
                    console.log(response);
                    this.$router.push({path:"/community", query: {}});
                  }
                })
      e.preventDefault();
    }
  },
  created() {
      this.avator = window.localStorage.getItem('avator');
      this.nickname = window.localStorage.getItem('nickname');
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

.contentOne, #error {
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
  margin-left: -172px;
  text-align: center;
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

#addTag > a {
  cursor: pointer;
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
