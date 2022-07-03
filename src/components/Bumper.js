import './Bumper.css';

function Bumper({answer}) {
    const ans = answer;
  return (
   <>
   <div className="holder">
   <div className='answerHolder'>{ans}</div>
   <div>GAME OVER</div>
   </div>
   
   </>
  );
}

export default Bumper;