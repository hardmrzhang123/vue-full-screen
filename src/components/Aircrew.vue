<template>
  <div class="aircrew-num">
    <div class="aircrew-num-title">飞行员(人)</div>
    <div class="aircrew-num-info">
      <countTo :startVal="startVal" :endVal="endVal" :duration="3000"></countTo>
    </div>
    <div class="aircrew-num-lastmouth-title">上月总数</div>
    <div class="aircrew-num-lastmouth-info">
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
      lastEndVal: 19127
    };
  }
};
</script>
<style scoped>
.aircrew-num-title {
  position: absolute;
  top: 140px;
  bottom: 924px;
  left: 841px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.aircrew-num-info {
  position: absolute;
  top: 185px;
  bottom: 841px;
  left: 845px;
  right: 964px;
  height: 50px;
  font-size: 60px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.aircrew-num-lastmouth-title {
  position: absolute;
  top: 207px;
  left: 1040px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(0, 204, 255, 1);
}
.aircrew-num-lastmouth-info {
  position: absolute;
  top: 221px;
  left: 1040px;
  height: 20px;
  font-size: 24px;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(255, 162, 0, 1);
}
</style>