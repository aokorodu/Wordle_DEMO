import "./Bumper.css";
import FlipCard from "./FlipCard";

function Bumper({ answer }) {
  const ans = answer;
  return (
    <>
      <div className="holder">
        <div className="cardHolder">
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
