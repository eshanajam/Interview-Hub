import Login from "./components/Login"
import Menu from "./components/Menu"
import Home from "./components/Home"
import CompanySignup from "./components/company/CompanySignup"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hub" element={"Hub"} />
          <Route path="/contact" element={"Contact"} />
          <Route path="/about" element={"About"} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/signup" element={<CompanySignup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
