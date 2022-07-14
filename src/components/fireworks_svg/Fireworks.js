import React, { useRef } from "react";
import Spark from "./Spark";
import styles from "./Fireworks.module.css";

function Fireworks_orig({explosions, colorPalette}) {
  const numberOfSparks = 60;
  const numberOfExplosions = explosions;
  let currentExplosion = 0;
  let fwPalette = colorPalette
  const fwRef = useRef([]);
  let animating = false;

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
    const colors = getColors();
    for (let i = 0; i < numberOfSparks; i++) {
      const num = Math.floor(Math.random() * colors.length);
      const color = colors[num];
      arr.push(<Spark key={i} ref={addToFWRefs} color={color}/>);
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
