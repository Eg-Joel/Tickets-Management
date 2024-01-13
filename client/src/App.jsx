
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import TicketDetails from './pages/TicketDetails'

function App() {


  return (
    <>
      <BrowserRouter>
 
 <Routes>
  

  <Route path='/' element={ <Home/>}></Route>
  <Route path='/ticketDetails' element={ <TicketDetails/>}></Route>
 </Routes>
 
 </BrowserRouter>
      
    </>
  )
}

export default App
