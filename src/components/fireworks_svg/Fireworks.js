import React, { useRef } from "react";
import Spark from "./Spark";
import styles from "./Fireworks.module.css";

function Fireworks_orig({explosions}) {
  const numberOfSparks = 60;
  const numberOfExplosions = explosions;
  let currentExplosion = 0;
  const fwRef = useRef([]);
  let animating = false;

  const addToFWRefs = (el) => {
    if (el && !fwRef.current.includes(el)) {
      fwRef.current.push(el);
    }
  };

  const fire = () => {
    currentExplosion++;
    if(currentExplosion > numberOfExplosions) return;
    console.log(`---------- FIRE ${currentExplosion}-----------------`);

    const launchX = 100 + Math.random()*300;
    const launchY = 50 + Math.random()*100
    fwRef.current.forEach((spark) => {
      if (!spark.isActive()) {
        spark.activate(launchX, launchY );
      }
    });

    if (!animating) {
      animating = true;
      window.requestAnimationFrame(animateSparks);
    }
    setTimeout(fire, 1500 + Math.random()*2000);
  };

  const animateSparks = () => {
    fwRef.current.forEach((spark) => {
      spark.update();
    });

    window.requestAnimationFrame(animateSparks);
  };

  const getSparks = () => {
    const arr = [];
    for (let i = 0; i < numberOfSparks; i++) {
      arr.push(<Spark key={i} ref={addToFWRefs} x={250} y={50} />);
    }

    return arr;
  };

  setTimeout(fire, 1000);

  return (
    <>
      <div className={styles.holder}>
        <svg viewBox="0 0 500 500">
          <g>{getSparks()}</g>
        </svg>
      </div>
    </>
  );
}

export default Fireworks_orig;
