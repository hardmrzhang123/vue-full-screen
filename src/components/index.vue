<template>
  <div class="dashboard">
    <top></top>
    <div class="linePic"></div>
    <div class="uavIcon"></div>
    <div class="title-index">
      <div class="title-font">链上数据汇总</div>
    </div>
    <NavNum></NavNum>
    <Aircrew></Aircrew>
    <FlightNumber></FlightNumber>
    <TotalMileage></TotalMileage>
    <Histogram></Histogram>
    <BlockHeight></BlockHeight>
    <NumberOfNewUAVs></NumberOfNewUAVs>
    <NumberOfNewPilots></NumberOfNewPilots>
    <Middle></Middle>
  </div>
</template>
<script>
import top from "@/components/header";
import NavNum from "@/components/NavNum";
import Aircrew from "@/components/Aircrew";
import FlightNumber from "@/components/FlightNumber";
import TotalMileage from "@/components/TotalMileage";
import Histogram from "@/components/Histogram";
import BlockHeight from "@/components/BlockHeight";
import NumberOfNewPilots from "@/components/NumberOfNewPilots";
import NumberOfNewUAVs from "@/components/NumberOfNewUAVs";
import Middle from "@/components/Middle";
import test from "@/components/test";
export default {
  components: {
    top,
    NavNum,
    Aircrew,
    FlightNumber,
    TotalMileage,
    Histogram,
    BlockHeight,
    NumberOfNewPilots,
    NumberOfNewUAVs,
    Middle,
    test
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 1920px;
  height: 1080px;
  // margin: 0;
}

.uavIcon {
  background: url("../assets/pic02.png") no-repeat;
  background-size: cover;
  position: absolute;
  width: 102px;
  height: 102px;
  top: 128px;
  bottom: 850px;
  left: 43px;
  right: 1775px;
}
.title-index {
  background: url("../assets/pic03.png");
  background-size: cover;
  position: absolute;
  width: 270px;
  height: 70px;
  border: 2px solid;
  border-image: linear-gradient(
      -90deg,
      rgba(0, 187, 234, 0.2),
      rgba(5, 122, 197, 1),
      rgba(0, 161, 254, 0)
    )
    2 2;
  top: 144px;
  bottom: 866px;
  left: 127px;
  right: 1523px;
}
.title-font {
  margin-left: 62px;
  margin-top: 23px;
  // width: 108px;
  height: 70px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
}
.linePic {
  position: absolute;
  background: url("../assets/aa.png");
  background-size: cover;
  width: 1840px;
  height: 10px;
  left: 40px;
  top: 80px;
}
</style>