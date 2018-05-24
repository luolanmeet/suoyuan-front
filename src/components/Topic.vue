<template>
<div class="row" id="topDiv">
  <div class="col-md-7 ">
    <div id="leftDiv">

      <div class="topic">
        <h4>{{ title }}</h4>
        <div class="line1"></div>
        <pre>{{ content }}</pre>
      </div>

      <div class="comments">

        <div v-for="(reply, index) in replys">

          <div class="line2"></div>

          <div class="comment row" v-on:mouseenter="enter(index)">
            <div class="col-md-1">
              <img v-bind:src="reply.avator"/>
            </div>
            <div class="col-md-9">
              <div class="name"> {{ reply.nickname }} </div>
              <div class="content">
                <a class="toNickname" v-if="reply.toNickname" >@{{ reply.toNickname }}</a>
                {{ reply.content }}
              </div>
            </div>
            <div class="col-md-2">
              <p class="time">{{ reply.time }}&nbsp;&nbsp;&nbsp;#{{ reply.no }}</p>
              <a v-on:click="call(index)" class="reply" v-show="shows[index]" >回复</a>
              <br>
              <a class="toNickname"
                    v-on:click="lookReply(reply.replyId)"
                    v-if="reply.toNickname"
                    v-show="shows[index]" >查看对话</a>
            </div>
          </div>

        </div>

        <div class="line2"></div>

        <div class="alert alert-warning alert-dismissible" v-show="a2u" id = "toReplyUser">
            <button type="button" class="close" v-on:click="closeA2u" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            {{ a2uName }}
        </div>

        <div class="comment row">
          <div class="col-md-1">
            <img v-bind:src="avator"/>
          </div>
          <div class="col-md-9">
            <textarea id="reply" rows="3" cols="20" v-model="replyContent" v-on:click="clickTextarea">
            </textarea>
          </div>
          <div class="col-md-2">
            <input type="button" id="commit" v-on:click="reply" value="回复">
          </div>
        </div>

      </div>

    </div>
  </div>

  <div id="rightDiv" class="col-md-5" v-show="!showRightDivTopic">

    <div class="contentOne well">
      <div class="avator">
        <a><img v-bind:src="tAvator"/></a>
      </div>
      <p>{{ tNickname }}</p>
   </div>

  </div>

  <div id="rightDivTopic" class="col-md-5" v-show="showRightDivTopic">

    <div class="rightDivTopicContentOne well">

      <button type="button" class="close" v-on:click="closeRightDivTopic" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      <br>

      <div v-for="(reply, index) in lookReplys">

        <div class="line2"></div>

        <div class="row">
          <div class="col-md-1">
            <img class="topicDetailImg" v-bind:src="reply.avator"/>
          </div>
          <div class="topicDetailDiv col-md-9">
            <div class="topicDetailName"> {{ reply.nickname }} </div>
            <div class="topicDetailContent">
              <a class="topicDetailToNickname" v-if="reply.toNickname" >@{{ reply.toNickname }}</a>
              {{ reply.content }}
            </div>
          </div>
          <div class="col-md-2">
            <p class="time">{{ reply.time }}</p>
          </div>
        </div>

      </div>
   </div>

  </div>


</div>
</template>

<script>
export default {
  name: 'topic',
  data() {
    return {

      showRightDivTopic: false,
      a2u : false,
      a2uName: "",
      index: -1,
      shows: [],
      replyContent: "",
      replyIndex: -1,
      avator: "",
      nickname: "",

      title: "",
      tAvator: "",
      topicId: "",
      content: "",
      tNickname: "",
      replys: [],
      lookReplys: []
    }
  },
  methods: {
    enter(index) {

      this.shows.splice(index, 1, true);
      if (index != this.index) {
        this.shows.splice(this.index, 1, false);
        this.index = index;
      }
    },
    call(index) {

      this.a2uName = "@" + this.replys[index].nickname + " ";
      this.replyIndex = index;

      if (this.a2u == false) {
        this.a2u = true;
      }
    },
    closeA2u() {

      this.replyIndex = -1;
      this.a2u = false
      this.shows.splice(this.index, 1, false);
    },
    closeRightDivTopic() {
      this.showRightDivTopic = false;
    },
    clickTextarea() {
      this.shows.splice(this.index, 1, false);
    },
    lookReply(replyId) {

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      let msg = {
        userId: userId,
        token: token,
        replyId: replyId
      }

      this.$http.post("http://localhost:8080/getLookReplys", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.$router.push({path:"/", query: {}});
                  } else {
                    console.log(response);
                    this.lookReplys = response.body.data;
                  }
                })

      this.showRightDivTopic = true;
    },
    reply() {

      var replyIndex = this.replyIndex;
      var toUserId = -1;
      var toReplyId = -1;
      var toNickname = "";
      console.log(replyIndex);
      if (replyIndex != -1) {
        var name1 = this.replys[replyIndex].nickname;
        toUserId = this.replys[replyIndex].userId;
        toReplyId = this.replys[replyIndex].replyId;
        toNickname = this.replys[replyIndex].nickname;
        console.log(name1);
      }

      var replyContent = this.replyContent;

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      let msg = {
        userId: userId,
        token: token,
        topicId: this.topicId,
        fromUserId: userId,
        nickname: this.nickname,
        avator: this.avator,
        toUserId: toUserId,
        toReplyId: toReplyId,
        content: replyContent,
        toNickname: toNickname
      }

      console.log(msg);

      this.$http.post("http://localhost:8080/reply", msg, {emulateJSON:true})
                .then(function(response){
                  console.log(response);
                  if (response.body.code != '0') {
                    this.$router.push({path:"/", query: {}});
                  } else {
                    console.log("success");
                    this.replyContent = "";
                    this.replyIndex = -1;
                    this.a2u = false
                    this.shows.splice(this.index, 1, false);
                    this.init();
                  }
                })
    },
    init() {

      this.avator = window.localStorage.getItem('avator');
      this.nickname = window.localStorage.getItem('nickname');
      var topicId = this.$route.query.topicId;
      this.topicId = topicId;
      // alert(topicId);

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      let msg = {
        userId: userId,
        token: token,
        topicId: topicId
      }

      if (token != null && userId != null) {

        this.$http.post("http://localhost:8080/getTopic", msg, {emulateJSON:true})
                  .then(function(response){
                    console.log(response);
                    if (response.body.code != '0') {
                      this.$router.push({path:"/", query: {}});
                    } else {
                      console.log(response);
                      this.title = response.body.data.title;
                      this.tAvator = response.body.data.avator;
                      this.tNickname = response.body.data.nickname;
                      this.content = response.body.data.content;
                      this.replys = response.body.data.replys;
                    }
                  })
      } else {
        this.$router.push({path:"/", query: {}});
      }

    }
  },
  created() {
    this.init();
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
  border:0.8px solid;
  border-radius:5px;
  border-color: #AAAAAA;
}

.topic > h4 {
  margin-top: 25px;
  margin-left: 10px;
}

.topic > .line1 {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 10px;
  border:0.8px solid;
  border-radius:5px;
  border-color: #BBBBBB;
}

.comments {

  margin-top: 16px;
  padding-top: 20px;
  background-color: #F5F5F5;
  margin-right: 20px;
  padding-left: 9px;
  text-align: left;
  border:0.5px solid;
  border-radius:5px;
  border-color: #AAAAAA;
}

.line2 {
  border: 0.8px solid;
  margin-left: 5px;
  margin-right: 15px;
  margin-bottom: 8px;
  border-color: #BBBBBB;
}

.comment {
  margin-bottom: 10px;
}

.comment > .col-md-1 > img {
  width: 60px;
  border-radius:3px;
}

pre {
  font-size: 17px;
  text-align: left;
  white-space:pre-wrap;
  white-space:-moz-pre-wrap;
  white-space:-pre-wrap;
  white-space:-o-pre-wrap;
  word-wrap:break-word;
  border:0px solid;
}

.comment > .col-md-9 {
  padding-left: 40px;
  text-align: left;
}

.comment > .col-md-9 > .name {
  text-decoration-color: #EEEEEE;
}

.contentOne, .contentTwo {
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

.rightDivTopicContentOne > button {
  margin-top: -10px;
}

.rightDivTopicContentOne {
  width: 90%;
  margin-top: -10px;
  text-align: left;
  border-radius:5px;
}

.contentTwo {
  /* background-color: #EEEEEE; */
  /* border-top-style: inset; */
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

.contentTwo > p {
  padding-top: 12px;
  padding-left: 12px;
  text-align: left;
}

.time {
  /* font-style: italic; */
  font-size: 10px;
  color: #AAAAAA;
}

#reply {
  width: 100%;
  height: 130px;
  resize: none;
  padding-left: 8px;
}

#commit {
  margin-top: 102px;
  width: 50px;
}

.reply {
  font-size: 14px;
  cursor: pointer;
}

#toReplyUser {
    margin: 0px;
    margin-left: 73px;
    margin-right: 97px;
    height: 34px;
    padding-top: 8px;
}

.toNickname {
  cursor: pointer;
  text-decoration:none;
}

.topicDetailImg {
  width: 40px;
  border-radius:3px;
}

.topicDetailDiv {
    padding-left: 32px;
}

</style>
