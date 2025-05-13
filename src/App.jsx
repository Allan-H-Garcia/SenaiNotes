import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./assets/Pages/Nuser"
// import Chat from "./pages/chat/Index"
// import Nuser from "./pages/novo usuario/index"


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

        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/chat" element={isAuthenticated() == true? <Chat/> : <Login/>}></Route>
        <Route path="/*" element={<h1>404 Page Not Found</h1>}></Route>
        <Route path="/nuser" element = {<Nuser/>}></Route> */}

        </Routes>

      </BrowserRouter> 

    </>
  )
}

export default App