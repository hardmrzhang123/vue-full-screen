<template>
  <div class="title">
    <div class="header-left-time">2020年5月20日 周四 10:00 农历八月十一</div>
    <div class="header-middle">无人机区块链存证平台</div>
    <div class="header-right-info">多云 北风1~2级 气温25~32℃ 空气质量：优 pm2.5:32</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  width: 1920px;
  height: 90px;
  // border: 1px solid;
  // border-image: linear-gradient(
  //     -90deg,
  //     rgba(0, 187, 234, 0),
  //     rgba(3, 77, 129, 1),
  //     rgba(0, 161, 254, 0)
  //   )
  //   1 1;
  // box-shadow: 0px 0px 46px 0px rgba(8, 91, 168, 0.4);
  background: url("../assets/header.png");
  background-size: cover;
}
.header-left-time {
  position: absolute;
  left: 36px;
  top: 19px;
  // width: 363px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(10, 183, 255, 1);
}
.header-middle {
  position: absolute;
  right: 811px;
  top: 12.99px;
  // bottom: 17.5px;
  // width: 150px;
  height: 29px;
  font-size: 30px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(10, 183, 255, 1);
}
.header-right-info {
  position: absolute;
  // left: 760.5px;
  top: 19px;
  right: 36px;
  bottom: 28.5px;
  // width:363px;
  height: 14px;
  font-size: 14px;
  font-family: Heiti SC;
  font-weight: 300;
  color: rgba(10, 183, 255, 1);
}
</style>