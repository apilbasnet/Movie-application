import { AuthContextProvider } from "./context/AuthContext"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Navbar from "./Component/Navbar"


function App() {


  return (
    <>
      <AuthContextProvider>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />        
        </Routes>


      </AuthContextProvider >
    </>
  )
}

export default App
