import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login'
import {useStateValue} from './StateProvider'


function App() {
  
  const [{user},dispatch] = useStateValue();//{user} -> comes from destructuring state object

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ):(
            <>
        <Header />
        <div className='app__body'>
          <Sidebar/>
          
          <Routes>
            <Route path='/room/:roomId' element={<Chat/>}/>{/*cualquier cosa que sea domain:3000/room/algo rutea aca  */}
            <Route path='/' element={<h1>Welcome</h1>}/>{/* rutea todo lo que sea domain:3000/ */} 
          </Routes>
        </div>
        </>
       )}
      </Router>
    </div>
  );
}

export default App;
