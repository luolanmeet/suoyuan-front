<template>
<div id="now">
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-1"></div>
  </div>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-2">
      <a href="#" class="thumbnail">
        <img src="http://localhost:8080/pic/cat.jpg">
      </a>
    </div>
    <div class="col-md-1"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'showPic',
  data() {
    return {}
  }
}
</script>

<style scoped>

#now {
  /* background-color: #000000; */
  margin-top: 30px;
}

.row {
  width: 74%;
  margin-left: 13%;
}

.col-md-1,
.col-md-2 {
  padding: 8px;
  padding-bottom: 0px;
  padding-top: 0px;
}

.thumbnail {
  box-shadow: 6px 6px 8px #999999;
}

</style>
