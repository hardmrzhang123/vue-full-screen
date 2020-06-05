<template>
  <div class="blockheight">
    <div class="blockheight-title">
      <!-- 区域数据分布TOP10 -->
      <div class="blockheight-title-font">区块高度</div>
    </div>
    <div class="blockheight-data">
      <img class="b0" id="b0" src="../assets/12.png" alt />
      <img class="b1" id="b1" src="../assets/12.png" alt />
      <img class="b2" src="../assets/12.png" alt />
      <img class="b3" src="../assets/12.png" alt />
      <img class="b4" src="../assets/12.png" alt />
      <img class="b5" src="../assets/12.png" alt />
      <div class="point">
        <div class="point_icon"></div>
      </div>
      <div class="line"></div>
      <div class="blockheight-data-info">
        <div class="blockheight-data-info-title">最新区块</div>
        <div class="blockheight-data-info-content">{{block}}</div>
      </div>
    </div>
    <div class="l1"></div>
    <div class="l2"></div>
    <div class="l3"></div>
    <div class="l4"></div>
    <div class="l5"></div>
    <div class="l6"></div>
  </div>
</template>
<script>
import anime from "animejs";
export default {
  data() {
    return {
      block: 31131,
      val1: 100,
      id: "",
      id2: ""
    };
  },
  methods: {
    drawBlock() {
      var b0 = document.querySelector(".b0");
      var b1 = document.querySelector(".b1");
      var b2 = document.querySelector(".b2");
      var b3 = document.querySelector(".b3");
      var b4 = document.querySelector(".b4");
      var b5 = document.querySelector(".b5");
      var animation = anime.timeline({}).add({
        targets: [b0, b1, b2, b3, b4, b5],
        translateY: 35,
        duration: 1000,
        easing: "easeInOutQuad"
      });
      animation.finished.then(this.changeBlock()).then(() => {
        console.log("---",this.id);
        console.log("---",this.id2);
        if (this.id != undefined || this.id2 != undefined) {
        
          clearInterval(this.id);
          clearInterval(this.id2);
         }
         setInterval(() => {
            this.colorLiner("b0");
          }, 20);
       
      });
      // anime({
      //   targets: ".b0",
      //   translateY: 35,
      //   opacity: [0, 0.2],
      //   duration: 3000
      // });
      // anime({
      //   targets: ".b1",
      //   translateY: 35,
      //   opacity: [0.2,1],
      //  duration: 3000
      // });
      // anime({
      //   targets: [".b2"],
      //   translateY: 35,
      //   opacity: 0.2,
      //   duration: 3000
      // });
      // anime({
      //   targets: [".b3", ".b4"],
      //   translateY: 35,
      //   opacity: 0.2,
      //   duration: 3000
      // });
      // anime({
      //   targets: [".b5"],
      //   translateY: 35,
      //   opacity: [0.2, 0],
      //   duration: 3000
      // })
      // .add({
      //   opacity: [0.2, 0],
      //   translateX: 250,
      //   delay: 1000
      // });
      // var t = anime.timeline({
      //   easing: "easeOutExpo",
      //   duration: 3000
      // });
      // t.add({
      //   targets: [".b0", ".b1", ".b2", ".b3", ".b4", ".b5"],
      //   translateY: 35,
      //   // opacity: [0, 0.2],
      //   duration: 3000
      // }).add({
      //     targets: [".b1"],
      //   opacity: [0.2, 1],
      //   duration: 3000
      // }).add({
      //    targets: [".b0"],
      //   opacity: [0, 0.2],
      //   duration: 3000
      // }).add({
      //     targets: [".b2"],
      //   opacity: [1, 0.2],
      //   duration: 3000
      // }).add({
      //     targets: [".b5"],
      //   opacity: [0.2, 0],
      //   duration: 3000
      // })
    },
    changeBlock() {
      anime({
        targets: ".b2",
        opacity: [1, 0.2],
        duration: 2000,
        easing: "linear"
      });
      anime({
        targets: ".b0",
        opacity: [0, 0.2],
        duration: 2000,
        easing: "linear"
        // loop: true
      });
      anime({
        targets: ".b1",
        opacity: [0.2, 1],
        duration: 2000,
        easing: "linear"
      });
      anime({
        targets: ".b5",
        opacity: [0.2, 0],
        duration: 2000,
        easing: "linear"
      });
    },
    colorLiner(param) {
      var Div = document.getElementById(param);
      if (this.val1 >= 0) {
        Div.style.opacity = this.val1 / 100;
      }
      if (this.val1 < 0) {
        Div.style.opacity = -this.val1 / 100;
      }
      if (this.val1 == -100) {
        //由-100变为正100
        this.val1 = -this.val1;
      }
      this.val1--;
    }
  },
  mounted() {
    this.id2 = setInterval(() => {
      this.drawBlock();
    }, 10000);
  },
  created() {
    this.id = setInterval(() => {
      this.colorLiner("b1");
    }, 20);
  }
};
</script>
<style lang="scss" scoped>
.blockheight-title {
  position: absolute;
  top: 677px;
  left: 40px;
  width: 400px;
  height: 45px;
  background: linear-gradient(
    90deg,
    rgba(2, 89, 130, 0.29) 0%,
    rgba(3, 96, 140, 0) 100%
  );
}
.blockheight-title-font {
  text-align: left;
  margin-left: 22px;
  margin-top: 12px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.blockheight-data {
  position: absolute;
  top: 732px;
  left: 40px;
  width: 400px;
  height: 318px;
  background: linear-gradient(
    -39deg,
    rgba(12, 116, 214, 0.1),
    rgba(19, 50, 121, 0.1)
  );
  border: 1px solid;
  border-image: radial-gradient(
      circle,
      rgba(13, 54, 78, 0.35),
      rgba(3, 110, 154, 0.35)
    )
    1 1;
}
.l1 {
  position: absolute;
  top: 677px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l2 {
  position: absolute;
  top: 719px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l3 {
  position: absolute;
  top: 732px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l4 {
  position: absolute;
  top: 1047px;
  left: 40px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l5 {
  position: absolute;
  top: 732px;
  left: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
.l6 {
  position: absolute;
  bottom: 30px;
  left: 437px;
  width: 3px;
  height: 3px;
  background: rgba(0, 215, 255, 1);
}
/** 设置图像透明度 
    opacity是最重要的，因为它是CSS透明的标准属性，取值范围在0-1之间，目前支持的浏览器有：
    Firefox、Chrome、Opera、Safari。（也就是说，除了IE，它支持所有主流浏览器）；
    filter:alpha(opacity=50);是专门给IE设定的属性，取值的范围在0-100之间；
    -moz-opacity是为了兼容一些老版本的Mozilla浏览器，取值范围在0-1之间；
    -khtml-opacity是为了兼容一些老版本的Safari浏览器，取值范围在0-1之间
    排除第二个，其他透明度变小
*/
.blockheight-data img:not(:nth-child(3)) {
  filter: alpha(opacity=1);
  -moz-opacity: 0.2;
  -khtml-opacity: 0.2;
  opacity: 0.2;
}
// .blockheight-data img:nth-child(1) {
//   filter: alpha(opacity=0);
//   -moz-opacity: 0;
//   -khtml-opacity: 0;
//   opacity: 0;
// }
.blockheight-data img {
  position: absolute;
  width: 208px;
  height: 121px;
}

.blockheight-data img:nth-child(1) {
  top: 48px;
  left: 63px;
  z-index: 6;
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}
.blockheight-data img:nth-child(2) {
  top: 71px;
  left: 63px;
  z-index: 5;
}
.blockheight-data img:nth-child(3) {
  top: 94px;
  left: 63px;
  z-index: 4;
}
.blockheight-data img:nth-child(4) {
  top: 117px;
  left: 63px;
  z-index: 3;
}
.blockheight-data img:nth-child(5) {
  top: 140px;
  left: 63px;
  z-index: 2;
}
.blockheight-data img:nth-child(6) {
  top: 163px;
  left: 63px;
  z-index: 1;
}

.point {
  width: 105px;
  height: 70px;
  // background: linear-gradient(
  //   90deg,
  //   rgba(136, 214, 255, 0.8),
  //   rgba(25, 142, 242, 0.2)
  // );
  top: 131px;
  left: 168px;
}
.point_icon {
  width: 6px;
  height: 6px;
  background: rgba(0, 215, 255, 1);
  border-radius: 50%;
  position: absolute;
  top: 159px;
  left: 258px;
  z-index: 5;
}
.line {
  position: absolute;
  width: 49px;
  height: 1px;
  background: rgba(0, 215, 255, 1);
  top: 162px;
  right: 90px;
  z-index: 5;
}
.blockheight-data-info {
  position: absolute;
  top: 154px;
  left: 300px;
  width: 80px;
  height: 25px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
  line-height: 14px;
}
</style>