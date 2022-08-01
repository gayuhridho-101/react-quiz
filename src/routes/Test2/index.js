import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value)
  }

  const handleClearText =  () => {
    setText('');
  }

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label text={text} handleClearText={handleClearText}/>
      </p>
      <Input text={text} handleChangeText={handleChangeText} />
    </div>
  )
}

export default Test2;