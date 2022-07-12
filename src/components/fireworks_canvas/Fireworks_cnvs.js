import React, { useRef, useEffect } from "react";
import Spark from "./Spark";
import styles from "./Fireworks.module.css";

function Fireworks_CNVS({ explosions }) {
  const numberOfSparks = 500;
  const numberOfExplosions = explosions;
  let currentExplosion = 0;
  let sparkArray = [];
  let animating = false;
  let initialized = false;

  const canvasRef = useRef(null);
  let context = null
  
  useEffect(() => {
    const canvas = canvasRef.current
    context = canvas.getContext('2d')
    sparkArray = getSparks(context);
  }, [])

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
    for (let i = 0; i < numberOfSparks; i++) {
      arr.push(new Spark(context));
    }

    return arr;
  };

  setTimeout(fire, 1000);

  return (
    <>
      <div className={styles.holder}>
        <canvas
        ref={canvasRef}
          id="sparkCanvas"
          width="500"
          height="500"
        >
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </div>
    </>
  );
}

export default Fireworks_CNVS;
