<template>  
  <div class="container border">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
  </div> 
</template>

<script>
export default {
 mounted() {
    //  let isstarted = true;
    // let height = screen.availHeight;
    // let width = screen.availWidth;
    const script = function (p5) {
      var speed = 2;
      var posX = 0;

      // NOTE: Set up is here\
      p5.setup = (_) => {
       let canvas = p5.createCanvas(500, 500);
        canvas.parent("p5Canvas");
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };
      // NOTE: Draw is here
      p5.draw = (_) => {
        p5.background(0);
        // if (isstarted) {
        p5.fill(255);
        p5.text('eo', 10, 10);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;

        p5.push();
        p5.translate(0, p5.height / 2);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;

        if (posX > p5.width || posX < 0) {
          speed *= -1;
        }
        // }
      };
    };
    const P5 = require('p5');
    new P5(script)
  },
}
</script>

<style>
</style>