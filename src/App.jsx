import Housing from "./Components/Housing"
import LandingPage from "./Components/LandingPage"
import Login from "./Components/Login"

import SignUp from "./Components/SignUp"
import { BrowserRouter , Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App