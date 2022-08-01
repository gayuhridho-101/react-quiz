import { useState } from "react";

const Input = ({handleFilter}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(text)
  }

  return (
    <form>
      <input type="text" placeholder="search" value={text} onChange={(e) => setText(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>🔍</button>
    </form>
  )
}

export default Input;
