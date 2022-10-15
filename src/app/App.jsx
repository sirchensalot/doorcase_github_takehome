import './App.css';
import { useState } from 'react';
import getUserInfo from '../api/getUserInfo';
import UserDataCard from './components/UserDataCard';

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
    <div className="App h-screen">
      <h1 className='text-6xl py-4'>Doorcase GitHub Project</h1>
      <div className='flex flex-col justify-center items-center'>
        <input className='border-black border-2 max-w-xs rounded-md text-center' value={inputValue} onChange={handleInputChange} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleButtonClick()
          }
        }}/> 
        <button className='bg-slate-200 p-2 mt-3 rounded-md' onClick={handleButtonClick}>Get User</button>
      </div>
      {userData ? <UserDataCard userData={userData}/> : <div className='pt-2'>No user information found!</div>}
    </div>
  );
}

export default App;
