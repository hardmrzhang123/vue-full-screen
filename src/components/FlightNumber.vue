<template>
  <div class="flight-num">
    <div class="flight-num-title">飞行架次(次)</div>
    <div class="flight-num-info">
      <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
    </div>
    <div class="flight-num-lastmouth-title">上月总数</div>
    <div class="flight-num-lastmouth-info">
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
      endVal: 179803,
      lastStartVal:0,
      lastEndVal:16098
    };
  }
};
</script>
<style scoped>
.flight-num-title {
  position: absolute;
  top: 140px;
  left: 1190px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.flight-num-info {
  position: absolute;
  top: 185px;
  left: 1190px;
  height: 50px;
  font-size: 60px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.flight-num-lastmouth-title {
  position: absolute;
  top: 207px;
  left: 1416px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(0, 204, 255, 1);
}
.flight-num-lastmouth-info {
  position: absolute;
  top: 221px;
  left: 1416px;
  height: 20px;
  font-size: 24px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(255, 162, 0, 1);
}
</style>