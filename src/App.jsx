import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Painel from './pages/painel'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/painel' element={<Painel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
