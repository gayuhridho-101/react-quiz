import { useContext, useState } from "react";
import { Filter } from "./context";

const Input = () => {
  const [text, setText] = useState('');
  const {setStateFilter} = useContext(Filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStateFilter(text)
  }

  return (
    <form>
      <input type="text" placeholder="search" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>🔍</button>
    </form>
  )
}

export default Input;
