import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    address: ''
  });
  const [dataSend, setDataSend] = useState({});
  const [shwoModal, setShowModal] = useState(false);
  

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setDataSend({...data});
  }

  const handleReset = () => {
    setData({name: '', age: '', address: ''});
    setDataSend({});
    setShowModal(false);
  }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={handleSumbit}>
        <input type="text" placeholder="name" name="name" value={data.name} onChange={handleInput}/>
        <input type="text" placeholder="age" name="age" value={data.age} onChange={handleInput}/>
        <textarea type="text" placeholder="address"  name="address" value={data.address} onChange={handleInput}/>
        <button>Submit</button>
      </form>
      {shwoModal && <Modal data={dataSend} handleReset={handleReset}/>}
    </div>
  )
}

export default Test8;