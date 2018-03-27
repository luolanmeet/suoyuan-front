<template>
  <div id="noLoginNav">
    <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="">所愿</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
              <li><router-link to="/index">首页</router-link></li>
              <li><router-link to="/myindex">我的首页</router-link></li>
              <li><router-link to="/now">此刻</router-link></li>
            </ul>

            <ul id = "rightUL" class="nav navbar-nav navbar-right">
              <li><router-link to="/write">写日记</router-link></li>
              <li><router-link to="/settings">设置</router-link></li>
              <li><router-link to="/register">退出</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'noLoginNav',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  background-color: #546b83;
  margin-bottom: 0px;
}

#noLoginNav a {
  color: #f5f5dc;
}

.navbar-header {
  margin-left: 13%;
}

#rightUL {
  margin-right: 13%;
}

</style>
