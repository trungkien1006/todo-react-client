import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='font-fredoka'>
      <Routes>  
        <Route path="/" element={<GuestGuard element={<Auth />}/>} />
        <Route path="/home" element={<AuthGuard  element={<Home />}/>} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App
