<template>
<div class="row">
  <div class="col-md-5">
    <img  class="thumbnail" v-bind:src="user.avator">
    <p class="navbar-text">{{ user.signature }}</p>
  </div>

  <div class="col-md-7">
    <div id="date">
      <p>
        2018年3月4号 星期天
      </p>
    </div>
    <div id="context">
      <div>
        <p class="time">07:30</p>
        <pre class="context">圣人之道，吾性自足圣人之道，吾性自足圣人之道，吾性自足
        圣人之道，吾性自足
        圣人之道，吾性自足
        圣人之道，吾性自足</pre>
      </div>

      <div>
        <p class="time">05:30</p>
        <pre class="context">圣人之道，吾性自足圣人之道，吾性自足圣人之道，吾性自足
        圣人之道，吾性自足
        圣人之道，吾性自足
        圣人之道，吾性自足</pre>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'diaryList',
  data() {
    return {
      user: {}
    }
  },
  methods: {
  },
  mounted() {
  },
  created() {
    const token = window.localStorage.getItem('token');
    const id = window.localStorage.getItem('id');

    // 获取用户信息以及用户最后的日志信息
    this.user.avator = "http://imgsrc.baidu.com/forum/w%3D580/sign=cbf1608fca177f3e1034fc0540cf3bb9/d3d6b013b07eca807f01cbde922397dda04483ce.jpg";
    this.user.signature = "圣人之道，吾性自足";
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

.col-md-5 {
  padding-top: 20px;
  padding-left: 120px;
  /* background-color: #EEEEEE; */
}

.col-md-5 > img {
  width: 300px;
  height: 300px;
  margin-left: 180px;
}
.col-md-5 > p {
  width: 300px;
  margin-left: 180px;
  color: #999999;
}

.col-md-7 {
  padding-top: 24px;
  padding-right: 300px;
  /* background-color: #AAAAAA; */
}

#date {
  text-align: left;
  font-size: 18px;
  height: 30px;
  margin-bottom: 12px;
  border-bottom-style: inset;
  border-color: #AAAAAA;
}

.time {
  text-align: left;
  font-size: 14px;
  margin-bottom: 0px;
  color: #AAAAAA;
}
.context {
    text-align: left;
    padding-left: 16px;
    font-size: 15px;
    /* background-color: #FFFFFF; */
    white-space: pre-wrap;
    border: none;
    font-weight:300;
}

</style>
