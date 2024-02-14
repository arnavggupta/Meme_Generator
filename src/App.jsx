import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom";
import HomePage from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditImage from './Pages/Edit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/edit' element={<EditImage />}></Route>
      </Routes>
    </>
  )
}

export default App
