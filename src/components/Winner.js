import BumperCSS from './Bumper.module.css'

function Winner() {

  return (
    <>
      <div className={BumperCSS.holder}>
        <div>You Win!!!</div>
      </div>
    </>
  );
}

export default Winner;
