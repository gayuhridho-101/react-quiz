import { cssWrapper, cssModalRight } from './style';
import { NumberContext } from './Comp3';
import { useContext } from 'react';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const {number, changeNumber} = useContext(NumberContext);

  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" onChange={(e) => changeNumber(e.target.value)}></input>
      </div>
    </>
  )
}

export default Comp4;