import Fireworks from "./Fireworks";
import BumperCSS from "./Bumper.module.css";

function Winner() {
  return (
    <>
      <div className={BumperCSS.holder}>
        <Fireworks explosions={10}></Fireworks>
        <div className={BumperCSS.textHolder}>You Win!!!</div>
      </div>
    </>
  );
}

export default Winner;
