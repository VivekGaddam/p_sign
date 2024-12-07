import './App.css';
import SignIn from './components/Sign_in'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
