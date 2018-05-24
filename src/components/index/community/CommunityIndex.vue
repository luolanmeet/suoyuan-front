<template>
<div class="row" id="topDiv">
  <div class="col-md-7">
    <div id="leftDiv">

      <div class="header">
        <span>{{ headerTitle }}</span>
      </div>

      <div class="topic" v-for="topic in topics">

        <a v-on:click="getTopic(topic.topicId)">
          <img v-bind:src="topic.avator"/>
          {{ topic.title }}
        </a>

      </div>
    </div>
  </div>

  <div id="rightDiv" class="col-md-5">

    <div class="contentOne well row">
      <div class="avator col-md-6">
        <a><img v-bind:src="avator"/></a>
        <div class = "nickname"><p>{{ nickname }}</p></div>
      </div>

      <div class="myMessage col-md-6">
        <a v-on:click="getNoReadMsg()">
          <span class="label label-warning">我的消息</span><span class="badge">{{ messageNum }}</span>
        </a>
      </div>
   </div>

   <div class="contentTwo well">
     <p>热门标签：</p>

     <div v-for="(row,i) in listTemp" class="row">

       <div class="col-md-1"></div>
       <div v-for="(cell,j) in row" class="col-md-2">
         <a class="tag" v-on:click="tagClick(cell.name)" >{{cell.name}}</a>
       </div>
       <div class="col-md-1"></div>

     </div>
   </div>

  </div>
</div>
</template>

<script>

$(function () {
    $('[data-toggle="popover"]').popover();
})

export default {
  name: 'communityIndex',
  data() {
    return {
      topics: [],
      tags: [],
      nickname: "",
      avator: "",
      headerTitle: "话题广场",
      timer: null,
      messageNum: 0
    }
  },
  computed: {
    listTemp: function () {

     var tags = this.tags;
     var arrTemp = [];
     var index = 0;
     var sectionCount = 5;
     for (var i = 0; i < tags.length; i++) {
           index = parseInt(i / sectionCount);
           if (arrTemp.length <= index) {
               arrTemp.push([]);
           }
           arrTemp[index].push(tags[i]);
       }
      return arrTemp;
    }
  },
  beforeDestroy() {
    if(this.timer) {
        clearInterval(this.timer);
    }
  },
  methods: {
    getNoReadMsg() {

      if (this.messageNum != 0) {
        this.$router.push({path:"/notify", query: {}});
      }
    },
    getNoReadNum() {
      console.log("hh");

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');
      let msg = {
        userId: userId,
        token: token
      }

      this.$http.post("http://localhost:8080/getNoReadNum", msg, {emulateJSON:true})
                .then(function(response){
                  if (response.body.code != '0') {
                    this.$router.push({path:"/", query: {}});
                  } else {
                    console.log(response);
                    this.messageNum = response.body.data;
                  }
                })

    },
    getTopic(topicId) {
      this.$router.push({path:"/topic", query: {topicId: topicId}});
    },
    tagClick(tagName) {
      console.log(tagName);

      const token = window.localStorage.getItem('token');
      const userId = window.localStorage.getItem('userId');

      let msg = {
        userId: userId,
        token: token,
        tagName: tagName
      }

      if (token != null && userId != null) {

        this.$http.post("http://localhost:8080/topicWithTag", msg, {emulateJSON:true})
                  .then(function(response){
                    console.log(response);
                    if (response.body.code != '0') {
                      this.$router.push({path:"/", query: {}});
                    } else {
                      console.log(response);
                      this.topics = response.body.data.topics;
                      this.tags = response.body.data.tags;
                      this.headerTitle = "话题广场 -- " + tagName;
                    }
                  })
      } else {
        this.$router.push({path:"/", query: {}});
      }

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
                    this.topics = response.body.data.topics;
                    this.tags = response.body.data.tags;
                    this.avator = window.localStorage.getItem('avator');
                    this.nickname = window.localStorage.getItem('nickname');
                  }
                })
      this.getNoReadNum();
      this.timer = setInterval(() => {
                      this.getNoReadNum();
                   }, 10000);
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
  cursor: pointer;
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
  margin-left: 0.3px;
}

.contentTwo {
  background-color: #F5F5F5;
}

.contentOne > .avator {
  height: 140px;
  width: 140px;
}

.contentOne > .avator > a > img {
  height: 140px;
  width: 140px;
  border-radius:8px;
}

.nickname {
  text-align: center;
  padding-left: 24px;
}

.myMessage {
  padding-left: 30px;
  padding-top: 120px;
}

.contentTwo > p {
  padding-top: 10px;
  padding-left: 12px;
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

.myMessage > a {
  text-decoration: none;
  cursor: pointer;
}

.tag {
  cursor: pointer;
}

</style>
