import { cssWrapper } from "./style";

import { createContext, useState } from "react";
import Comp4 from "./Comp4";

export const NumberContext = createContext();

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [ showModal, setShowModal ] = useState(false);
  const [number, setNumber] = useState(0);

  const value = {
    number: number,
    changeNumber: (value) => {
      setNumber(value);
    }
  }

  return(
    <>
      <NumberContext.Provider value={value}>
        <div className={cssWrapper}>The Inputted Value is: {number}</div>
        <button onClick={() => setShowModal(!showModal)} type="button" >{showModal ? "Hide Modal" : "Show Modal"}</button>
        {showModal && <Comp4/>}
      </NumberContext.Provider>
    </>
  )
}

export default Comp3;