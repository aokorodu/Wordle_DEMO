import Fireworks_CNVS from "./fireworks_canvas/Fireworks_cnvs"
import Fireworks from "./fireworks_svg/Fireworks"
import BumperCSS from "./Bumper.module.css";

function Winner({canvasFireworks}) {
  console.log('winner canvasFireworks:', canvasFireworks)
  return (
    <>
      <div className={BumperCSS.holder}>
        {canvasFireworks && <Fireworks_CNVS explosions={20}></Fireworks_CNVS>}
        {!canvasFireworks && <Fireworks explosions={20}></Fireworks>}
        <div className={BumperCSS.textHolder}>You Win!!!</div>
      </div>
    </>
  );
}

export default Winner;
