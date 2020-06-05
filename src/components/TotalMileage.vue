<template>
  <div class="total-mileage">
    <div class="total-mileage-title">飞行总里程(公里)</div>
    <div class="total-mileage-info">
      <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
    </div>
    <div class="total-mileage-lastmouth-title">上月总数</div>
    <div class="total-mileage-lastmouth-info">
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
      endVal: 21547,
      lastStartVal: 0,
      lastEndVal:14098
    };
  }
};
</script>
<style scoped>
.total-mileage-title {
  position: absolute;
  top: 140px;
  left: 1564px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.total-mileage-info {
  position: absolute;
  top: 185px;
  left: 1564px;
  height: 47px;
  font-size: 60px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.total-mileage-lastmouth-title {
  position: absolute;
  top: 207px;
  left: 1766px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(0, 204, 255, 1);
}
.total-mileage-lastmouth-info {
  position: absolute;
  top: 221px;
  left: 1766px;
  right: 610px;
  height: 19px;
  font-size: 24px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(255, 162, 0, 1);
}
</style>