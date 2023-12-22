import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home,About, Profile, SignIn, SignUp } from './Pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/sign_in" element={<SignIn/>} />
        <Route path="/sign_up" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
