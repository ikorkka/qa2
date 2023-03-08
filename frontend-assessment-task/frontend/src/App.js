import './App.css';
import { Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import { AddContext } from './pages/AddContext/AddContext';

function App() {
  const [active, setActive] = useState(false)
  console.log(active);
  // const [auth, setAuth] = useState(false)

  // useEffect(() => {
  //   const auth = JSON.parse(localStorage.getItem('token'));
  //   if(auth.length) {
  //     setAuth(true)
  //   } else{
  //     setAuth(false)
  //   }
  // },[auth])
  return (
    <AddContext.Provider value={{
      active, setActive
    }}>
   <Routes>
       
      <Route path='/' element={<Profile />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    
  
    </Routes>
    </AddContext.Provider>
  );
}

export default App;
