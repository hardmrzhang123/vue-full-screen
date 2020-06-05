<template>
  <div class="nav-num">
    <div class="nav-num-title">无人机(架)</div>
    <div class="nav-num-info">
      <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
    </div>
    <div class="nav-num-lastmouth-title">上月总数</div>
    <div class="nav-num-lastmouth-info">
      <countTo :startVal="lastStartVal" :endVal="lastEndVal" :duration="3000"></countTo>
    </div>
  </div>
</template>
<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      startVal: 0,
      endVal: 3006,
      lastStartVal: 0,
      lastEndVal: 16098
    };
  }
};
</script>
<style scoped>
.nav-num-title {
  position: absolute;
  top: 140px;
  bottom: 924px;
  left: 481px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.nav-num-info {
  position: absolute;
  top: 185px;
  left: 481px;
  height: 50px;
  font-size: 60px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.nav-num-lastmouth-title {
  position: absolute;
  top: 207px;
  left: 660px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(0, 204, 255, 1);
}
.nav-num-lastmouth-info {
  position: absolute;
  top: 221px;
  bottom: 847px;
  left: 660px;
  right: 1220px;
  height: 20px;
  font-size: 24px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(255, 162, 0, 1);
}
</style>