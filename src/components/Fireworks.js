import React, { useRef } from "react";
import Spark from "./Spark";
import styles from "./Fireworks.module.css";

function Fireworks() {
  const num = 60;
  const fwRef = useRef([]);
  let animating = false;

  const addToFWRefs = (el) => {
    if (el && !fwRef.current.includes(el)) {
      fwRef.current.push(el);
    }
  };

  const fire = () => {
    console.log("----------- FIRE -----------------");
    const launchX = 100 + Math.random()*300;
    const launchY = 50 + Math.random()*100
    fwRef.current.forEach((spark, index) => {
      if (!spark.isActive()) {
        spark.activate(launchX, launchY );
      }
    });

    if (!animating) {
      animating = true;
      window.requestAnimationFrame(animateSparks);
    }
    setTimeout(fire, 1000 + Math.random()*2000);
  };

  const animateSparks = () => {
    fwRef.current.forEach((spark, index) => {
      spark.update();
    });

    window.requestAnimationFrame(animateSparks);
  };

  const getSparks = () => {
    const arr = [];
    for (let i = 0; i < num; i++) {
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

export default Fireworks;
