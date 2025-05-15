
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chat from "./pages/chat";
import NewUser from "./pages/new-user/index";
import ForgotPassword from "./pages/forgot/index";
import ConfirmPassword from "./pages/reset-password";
import Notes from "./pages/notes";




function App() {

const isAuthenticated = () => {

let token = localStorage.getItem("meutoken")

if (token == null){
  return false;
} else {

  return true;
}

}

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Login/>}></Route>
        <Route path= "/login" element= {<Login/>}></Route>
        <Route path= "/notes" element= {<Notes/>}></Route>
        <Route path= "*" element= {<h1>Not found </h1>}></Route>
        <Route path="/new-user" element={<NewUser/>}></Route>
        <Route path="/forgot" element={<ForgotPassword/>}></Route>
        <Route path="/reset-password" element={<ConfirmPassword/>}></Route>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
