import {Route,Routes } from 'react-router-dom'
import './App.css'
import Title from './title'
import Calen from './calen'
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Title />}></Route>
        <Route path='/calender'  element={<Calen/>}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
