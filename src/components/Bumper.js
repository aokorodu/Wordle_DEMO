import FlipCard from "./FlipCard";
import BumperCSS from './Bumper.module.css'

function Bumper({ answer }) {
  const ans = answer;
  return (
    <>
      <div className={BumperCSS.holder}>
        <div className={BumperCSS.cardHolder}>
          {ans.map((letter, index) => {
            return <FlipCard key={index} id={`${index}`} letter={letter} delay={1000 + (index * 100)} />;
          })}
        </div>
        <div>GAME OVER</div>
      </div>
    </>
  );
}

export default Bumper;
