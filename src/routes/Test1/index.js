import { useState } from "react";

const Test1 = () => {
  const [text, setText] = useState('');

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {text}
      </p>
      <input type="text" placeholder="input here" onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Test1;