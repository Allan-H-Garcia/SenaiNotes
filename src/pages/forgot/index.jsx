import "./forgot.css";
import logo from "../../assets/imgs/LogoWrapper.png";
import { useState } from "react";

// front@gmail.com
//frontdomina
function forgotPassword() {

  const [email, setEmail] = useState("");


  const onForgotClick = async () => {


    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST", //Método que envia dados
      body: JSON.stringify({ //quem define é o back-end
        email: email,
      })

    });

    if (response.ok == true) {

      alert("Email enviado com sucesso!");

      console.log(response);

      let json = await response.json();

      let token = json.accessToken;

      console.log("Token:" + token);

      localStorage.setItem("meuToken", token)

      window.location.href = "/chat";

    } else {

      if (response.status == 401) {
        alert("Erro ao enviar o link. Verifique o email digitado.");
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
          > <strong>Forgotten your password?</strong></h2>
          <h3>Enter your email below, and we’ll send you a link to reset it.</h3>

          <h4>Email Address</h4>
          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />


          <button className="btn" onClick={() => onForgotClick()}>Send Reset Link</button>


        </div>

      </main>

      <footer></footer>
    </>
  )
}

export default forgotPassword;