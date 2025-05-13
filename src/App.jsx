
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chat from "./pages/chat";



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
        <Route path= "/chat" element= {<Chat/>}></Route>
        <Route path= "*" element= {<h1>Not found </h1>}></Route>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
