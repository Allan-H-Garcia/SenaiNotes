import "./login.css";
import logo from "../../assets/imgs/LogoWrapper.png";
import { useState } from "react";

// front@gmail.com
//frontdomina
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  const onLoginClick = async () => {


    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST", //Método que envia dados
      body: JSON.stringify({ //quem define é o back-end
        email: email,
        password: password //não precisa de virgula porque é a ultima propriedade
      })

    });

    if (response.ok == true) {

      alert("Login realizado com sucesso!");

      console.log(response);

      let json = await response.json();

      let token = json.accessToken;

      console.log("Token:" + token);

      localStorage.setItem("meuToken", token)
      
      window.location.href = "/chat";

    } else {

      if (response.status == 401) {
        alert("Credenciais incorretas. Tente novamente.");
      } else {

        alert("Erro inesperado aconteceu, caso persista contate os administradores.");
      }

    }
  }

  return (
    <>
      <header></header>

      <main className="paige-container">

    
        <div className="login-container">

          <img className="logo" src={logo} alt="Logo do SenaiLogo." />
          

          <h2

            id="meutitulo"
            className="titulo"
          > <strong>Welcome to Note</strong></h2>
          <h3>Please log in to continue</h3>

          <h4>Email Address</h4>
          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />
          <h4>Password</h4>  
          <input className="inpt" value={password} onChange={event => setPassoword(event.target.value)} type="password" />
          

          <button className="btn" onClick={() => onLoginClick()}>Login</button> 
          <a className="form-hint" href="/new-user">No account yet?  <strong> Sign Up</strong></a>

        </div>

      </main>

      <footer></footer>
    </>
  )
}

export default Login;