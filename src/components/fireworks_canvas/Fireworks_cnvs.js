import React, { useRef, useEffect } from "react";
import Spark from "./Spark";
import styles from "./Fireworks.module.css";

function Fireworks_CNVS({ explosions, colorPalette }) {
  const numberOfSparks = 300;
  const numberOfExplosions = explosions;
  let currentExplosion = 0;
  let sparkArray = [];
  let animating = false;
  let initialized = false;
  let fwPalette = colorPalette
  console.log('fwPalette: ', fwPalette)
  // const colors = () => {
  //   return [
  //     "#FBD9EA",
  //     "#F9AFD6",
  //     "#F970B5",
  //     "#E65BA2",
  //     "#E22387",
  //     "#E20074",
  //     "#B6105F",
  //     "#A10053",
  //     "#6B0438",
  //     "#450224",
  //     "#200010",
  //     "#E20074",
  //   ];
  // };

  const getColors = ()=>{
    const tMobile = [
      "#FBD9EA",
      "#F9AFD6",
      "#F970B5",
      "#E65BA2",
      "#E22387",
      "#E20074",
      "#B6105F",
      "#A10053",
      "#6B0438",
      "#450224",
      "#200010",
      "#E20074",
    ];

    let randomHSL = new Array(360);
    for(let i = 0; i < 360; i++){
      randomHSL[i] = `hsl(${i}, 100%, 50%)`
    }

    const selectedPalette = fwPalette == "random" ? randomHSL : tMobile;

    console.log('selectedPalette: ', selectedPalette)

    return selectedPalette;
  }

  const canvasRef = useRef(null);
  let context = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    sparkArray = getSparks(context);
    hiDef(canvas, context);
  }, []);

  const hiDef = (canvas, context) => {
    console.log("window.devicePixelRatio: ", window.devicePixelRatio);
    if (window.devicePixelRatio) {
      // get current size of the canvas
      let rect = canvas.getBoundingClientRect();

      // increase the actual size of our canvas
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      // ensure all drawing operations are scaled
      context.scale(devicePixelRatio, devicePixelRatio);

      // scale everything down using CSS
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    }
  };

  const fire = () => {
    currentExplosion++;
    if (currentExplosion > numberOfExplosions) return;
    console.log(`---------- FIRE ${currentExplosion}-----------------`);

    const launchX = 100 + Math.random() * 300;
    const launchY = 50 + Math.random() * 100;
    sparkArray.forEach((spark) => {
      if (!spark.isActive()) {
        spark.activate(launchX, launchY);
      }
    });

    if (!animating) {
      animating = true;
      window.requestAnimationFrame(animateSparks);
    }
    setTimeout(fire, 1500 + Math.random() * 2000);
  };

  const animateSparks = () => {
    context.clearRect(0, 0, 500, 500);
    sparkArray.forEach((spark) => {
      spark.update();
    });

    window.requestAnimationFrame(animateSparks);
  };

  const getSparks = (context) => {
    const arr = [];
    const colors = getColors();
    for (let i = 0; i < numberOfSparks; i++) {
      const num = Math.floor(Math.random() * colors.length);
      const color = colors[num];
      arr.push(new Spark(context, color));
    }

    return arr;
  };

  setTimeout(fire, 1000);

  return (
    <>
      <div className={styles.holder}>
        <canvas ref={canvasRef} id="sparkCanvas" width="500" height="500">
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </div>
    </>
  );
}

export default Fireworks_CNVS;
