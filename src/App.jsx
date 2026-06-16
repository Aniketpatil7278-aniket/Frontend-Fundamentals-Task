import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

import Counter_App from "./components/Pages/Counter_App"
import Arrayop from "./components/Pages/Arrayop";
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Counter_App/>} />
      <Route path="/ArrayOP" element={<Arrayop />} />
    </Routes>
    
    </BrowserRouter>
 
  )
}

export default App
