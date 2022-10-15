import './App.css';
import { useEffect, useState } from 'react';
import getUserInfo from '../api/getUserInfo';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState()

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    getUserInfo(inputValue).then(data => {
      setUserData(data)
    })
  }
  
  return (
    <div className="App">
      <input value={inputValue} onChange={handleInputChange}/> 
      <button onClick={handleButtonClick}>Get User Information</button>
    </div>
  );
}

export default App;
