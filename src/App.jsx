import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

import Counter_App from "./components/Pages/Counter_App"
import Arrayop from "./components/Pages/Arrayop";
import Stringop from "./components/Pages/Stringop";
import Objectop from "./components/Pages/Objectop";
import EmployeeManagement from "./components/Pages/EmployeeManagement";
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Counter_App/>} />
      <Route path="/ArrayOP" element={<Arrayop />} />
      <Route path="/StringOP" element={<Stringop />} />
      <Route path="/ObjectOP" element={<Objectop />} />
      <Route path="/EmployeePage" element={<EmployeeManagement />} />
    </Routes>
    
    </BrowserRouter>
 
  )
}

export default App
