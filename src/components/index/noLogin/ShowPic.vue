<template>
<div class="row">
  <div class="col-md-1"></div>

  <div class="col-md-2">
    <a href="#" class="thumbnail" v-bind:style="{backgroundImage: 'url(' + pics[0] + ')'}"></a>
  </div>
  <div class="col-md-2">
    <a href="#" class="thumbnail" v-bind:style="{backgroundImage: 'url(' + pics[1] + ')'}"></a>
  </div>
  <div class="col-md-2">
    <a href="#" class="thumbnail" v-bind:style="{backgroundImage: 'url(' + pics[2] + ')'}"></a>
  </div>
  <div class="col-md-2">
    <a href="#" class="thumbnail" v-bind:style="{backgroundImage: 'url(' + pics[3] + ')'}"></a>
  </div>
  <div class="col-md-2">
    <a href="#" class="thumbnail" v-bind:style="{backgroundImage: 'url(' + pics[4] + ')'}"></a>
  </div>

  <div class="col-md-1"></div>
</div>
</template>

<script>
export default {
  name: 'showPic',
  data() {
    return {
      pics: ""
    }
  },
  created() {
    // 请求图片
    this.$http.post("http://localhost:8080/randomPic", {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code == '0') {
                  this.pics = response.body.data;
                }
              })

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

.thumbnail {
  height: 180px;
  width: 180px;
  background-size:cover;
  background-repeat:no-repeat;
  box-shadow: 6px 6px 8px #999999;
}

</style>
