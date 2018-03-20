<template>
<div class="row">
  <div class="col-md-7">

    <div v-for="dirayOfYear in allDirays">
      <h4><span class="label label-success">{{ dirayOfYear.year }}</span></h4>
      <div v-for="userdiray in dirayOfYear.userDirays" class="row">
        <div class="col-md-4">
          <div class="thumbnail">{{ userdiray.month }}</div>
          <div class="thumbnail">{{ userdiray.day }}</div>
        </div>
        <div class="col-md-8 well well-sm">
          <div>{{ userdiray.time }}</div>
          <p class="navbar-text">{{ userdiray.content }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-5">
    <Calendar></Calendar>
  </div>

</div>
</template>

<script>
import Calendar from '@/components/index/hasLogin/index/Calendar'
export default {

  name: 'diaryList',
  data() {
    return {
      allDirays: ""
    }
  },
  methods: {
  },
  created() {
    const token = window.localStorage.getItem('token');
    const userId = window.localStorage.getItem('userId');

    let msg = {
      userId : userId,
      token : token
    }
    this.$http.post("http://localhost:8080/myDirays", msg, {emulateJSON:true})
              .then(function(response){
                console.log(response);
                if (response.body.code == '0') {
                  this.allDirays = response.body.data;
                }
              })
  },
  components: {
    Calendar
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

.col-md-7 {
  padding-top: 20px;
  padding-left: 120px;
  /* background-color: #EEEEEE; */
}

.col-md-5 {
  padding-top: 42px;
  padding-right: 300px;
  /* background-color: #AAAAAA; */
}

.col-md-7 > .row {
  margin-top: 10px;
}

.col-md-4 {
  margin-top: 10px;
  /* background-color: #000000; */
}
.col-md-4 > div {
  width: 50px;
  height: 25px;
  padding-top: 0px;
  margin: 0px;
  margin-left: 180px;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 0;

  text-align: center;
  font-size: 17px;
}

.col-md-4>:first-child {
  padding-top: 2px;
  background-color: #111111;
  color: #EEEEEE;
  font-size: 13px;
}

.col-md-8 {
  text-align: left;
  padding-left: 15px;
  /* background-color: #555555; */
}

h4 {
  margin-left: -340px;
  margin-bottom: 20px;
}

</style>
