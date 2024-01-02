import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home,About, Profile, SignIn, SignUp } from './Pages';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign_in" element={<SignIn/>} />
        <Route path="/sign_up" element={<SignUp/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
