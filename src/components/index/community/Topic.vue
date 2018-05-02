<template>
<div class="row">
  <div class="col-md-7 ">
    <div id="leftDiv">

      <div class="topic">
        <h4>你做过最有趣的事情是什么？</h4>
        <div class="line"></div>
        <pre>二年级时文艺汇演，家长台下坐的乌压压一片。哥是文艺骨干，唱“让我们荡起双桨”。
  哥双手持麦，一路飙到“迎面吹来了凉爽的……”时，就感觉肚皮一松，校服松紧带崩断了……断了……说时迟那时快，哥左手以迅雷不及掩耳盗铃之势挽住裤腰，单手持麦，完美的演绎完了这首歌。
          台下已笑倒一片。哥从此封麦不再登台。</pre>
      </div>

      <div class="comments">

        <dir class="line"></dir>
        <div class="comment row" v-on:mouseenter="enter(0)">
          <div class="col-md-1">
            <img class="" src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg">
          </div>
          <div class="col-md-9">
            <div class="name">洛兰相遇 </div>
            <div class="content">哈哈 笑死我啦</div>
          </div>
          <div class="col-md-2">
              <p class="time">10天前&nbsp;&nbsp;&nbsp;#1</p>
              <a v-on:click="call(0)" class="reply" v-show="shows[0]" >回复</a>
          </div>
        </div>

        <dir class="line"></dir>
        <div class="comment row" v-on:mouseenter="enter(1)">
          <div class="col-md-1">
            <img class="" src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg">
          </div>
          <div class="col-md-9">
            <div class="name">洛兰相遇 </div>
            <div class="content">哈哈 笑死我啦</div>
          </div>
          <div class="col-md-2">
            <p class="time">10天前&nbsp;&nbsp;&nbsp;#2</p>
            <a v-on:click="call(1)" class="reply" v-show="shows[1]" >回复</a>
          </div>
        </div>

        <dir class="line"></dir>
        <div class="comment row" v-on:mouseenter="enter(2)">
          <div class="col-md-1">
            <img class="" src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg">
          </div>
          <div class="col-md-9">
            <div class="name">洛兰相遇 </div>
            <div class="content">哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦哈哈 笑死我啦</div>
          </div>
          <div class="col-md-2">
            <p class="time">121天前&nbsp;&nbsp;&nbsp;#3</p>
            <a v-on:click="call(2)" class="reply" v-show="shows[2]" >回复</a>
          </div>
        </div>


        <dir class="line"></dir>
        <div class="comment row">
          <div class="col-md-1">
            <img class="" src="http://img5.imgtn.bdimg.com/it/u=2739844137,3941296902&fm=27&gp=0.jpg">
          </div>
          <div class="col-md-9">
            <textarea id="reply" rows="3" cols="20" v-model="replyContent">
            </textarea>
          </div>
          <div class="col-md-2">
            <input type="button" id="commit" value="回复">
          </div>
        </div>

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
      index: -1,
      shows: [],
      replyContent: ""
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
      this.replyContent  = this.replyContent + "@" + index;
    }
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

.topic {
  background-color: #F5F5F5;
  margin-right: 20px;
  padding-left: 9px;
  text-align: left;
  border:0.5px solid;
  border-radius:5px;
}

.topic > h4 {
  margin-top: 25px;
  margin-left: 10px;
}

.topic > .line {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 10px;
  border:0.3px solid;
  border-radius:5px;
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
}

.comments > .line {
  border: 1px solid;
  margin-left: 5px;
  margin-right: 15px;
  margin-bottom: 8px;
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
  border:0.5px solid;
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
  margin-left: 40px;
}

.contentTwo > p {
  padding-top: 12px;
  padding-left: 12px;
  text-align: left;
}

.time {
  font-style: italic;
  font-size: 12px;
  color: #AAAAAA;
}

#reply {
  width: 100%;
  height: 130px;
  resize: none;
}

#commit {
  margin-top: 100px;
}

.reply {
  font-size: 14px;
  cursor: pointer;
}

</style>
