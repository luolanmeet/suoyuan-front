<template>
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

.row {
  width: 74%;
  margin-left: 13%;
}

.col-md-1, .col-md-2 {
  padding: 2px;
}

</style>
