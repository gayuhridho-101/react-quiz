import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = ({lastInput, setLastInput}) => {
  const [check, setCheck] = useState(false);

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={check} onChange={() => setCheck(!check)}/>
        { check &&  <input id="mynumber1" type="text" placeholder="input mynumber1" onChange={(e) => setLastInput(e.target.value)}/>}
      </label>
      <Comp2 lastInput={lastInput}/>
    </div>
  )
}

export default Comp1;