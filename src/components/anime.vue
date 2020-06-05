<template>
  <div class="blockImage">
    <img src="../assets/12.png" alt />
    <img src="../assets/12.png" alt />
    <img src="../assets/12.png" alt />
    <img src="../assets/12.png" alt />
    <img src="../assets/12.png" alt />
  </div>
</template>
<script>
import anime from "animejs";
export default {
  data() {
    return {};
  },
  methods: {
    drawBlock() {
      anime({
        targets: ".blockImage",
        translateX: 20
      });
    }
  },
  mounted() {
    this.drawBlock();
  }
};
</script>
<style scoped>
.blockImage{
   width: 400px;
   height: 318px;
   /* position:relative */
}
/** 设置图像透明度 
    opacity是最重要的，因为它是CSS透明的标准属性，取值范围在0-1之间，目前支持的浏览器有：
    Firefox、Chrome、Opera、Safari。（也就是说，除了IE，它支持所有主流浏览器）；
    filter:alpha(opacity=50);是专门给IE设定的属性，取值的范围在0-100之间；
    -moz-opacity是为了兼容一些老版本的Mozilla浏览器，取值范围在0-1之间；
    -khtml-opacity是为了兼容一些老版本的Safari浏览器，取值范围在0-1之间
    排除第二个，其他透明度变小
*/
.blockImage img:not(:nth-child(2)){
  filter: alpha(opacity=50);
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  opacity: 0.15;
}
.blockImage img{
    position:absolute;
    width: 208px;
    height: 130px;
}
.blockImage img:nth-child(1){
    top: 20px;
}
.blockImage img:nth-child(2){
    top: 40px;
}
.blockImage img:nth-child(3){
    top: 60px;
}
.blockImage img:nth-child(4){
    top: 80px;
}
.blockImage img:nth-child(5){
    top: 100px;
}

</style>