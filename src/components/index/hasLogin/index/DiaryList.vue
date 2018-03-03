<template>
<div class="row">
  <div class="col-md-7">

    <div class="row">
      <div class="col-md-4">
        <div class="thumbnail">12月</div>
        <div class="thumbnail">23</div>
      </div>
      <div class="col-md-8 well well-sm">
        <div>09:23</div>
        <p class="navbar-text">
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
          Signed in as Mark Otto Signed in as Mark Otto
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="thumbnail">12月</div>
        <div class="thumbnail">23</div>
      </div>
      <div class="col-md-8 well well-sm">
        <div>09:23</div>
        <p class="navbar-text">Signed in as Mark Otto</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="thumbnail">12月</div>
        <div class="thumbnail">23</div>
      </div>
      <div class="col-md-8 well well-sm">
        <div>09:23</div>
        <p class="navbar-text">Signed in as Mark Otto</p>
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
    return {}
  },
  methods: {
  },
  mounted() {
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
  padding-top: 30px;
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

</style>
