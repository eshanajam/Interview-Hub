import Login from "./components/Login";
import Menu from "./components/Menu";
import Home from "./components/Home";
import CompanySignup from "./components/company/CompanySignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hub from "./components/Hub";
import CompanyDashboard from "./components/company/CompanyDashboard";
import CompanySideMenu from "./components/company/CompanySideMenu";
import SideMenu from "./components/jobseeker/SideMenu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/contact" element={"Contact"} />
          <Route path="/about" element={"About"} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CompanySignup />} />
          <Route path="/company-dashboard" element={<CompanySideMenu />} />
          <Route path="/jobseeker-dashboard" element={<SideMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
