<template>
<div class="row">
  <div class="col-md-7">
    <div id = "leftDiv" class="jumbotron">
      <h2>所愿</h2>
      <br/>如果那些埋伏在字句间而又呼之欲出的意象是一首诗的生命，
      <br/> 那么，在我们真正的生命里，
      <br/>那些平日暗暗牵连纠缠却又会在某一瞬间铮然闪现的记忆，
      <br/> 是不是在本质上就已经成为一首诗？
    </div>
  </div>

  <div class="col-md-5">
    <div class="jumbotron">
      <br/><br/>
      <button class="btn btn-primary">登录</button>
      <button class="btn btn-primary">注册</button>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
  width: 100%;
}

.col-md-7, .col-md-5 {
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

.jumbotron {
  background-color: #FFFFFF;
}

#leftDiv {
  border-right-style: outset;
}

</style>
