const Input = ({text, handleChangeText}) => {
  return <input type="text" placeholder="input here" value={text} onChange={(e) => handleChangeText(e.target.value)} />
}

export default Input;
