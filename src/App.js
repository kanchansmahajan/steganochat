
//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";

import { useContext } from "react";
import Home from "./pages/Home";
import UploadImage from "./components/UploadImage";
import Nav from "./components/Nav";
import './App.css';
  import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Sidebar from "./components/Sidebar";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
                <Home/>          
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
