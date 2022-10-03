import { useState } from "react";

const Input = ({onClick}) => {
  const [text, setText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    onClick(text);
  }

  return (
    <form>
      <input type="text" placeholder="search" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" onClick={handleClick}>🔍</button>
    </form>
  )
};

export default Input;
