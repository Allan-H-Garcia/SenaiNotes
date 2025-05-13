import "./login.css";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState(""); //capturar dados para usar no cod

  const [senha, setSenha] = useState("");

  const onLoginClick = async () => {
    let response = await fetch(
      "https://senai-gpt-api.up.railway.app/login", //verificar api com back , atualizar link
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      }
    );

    if (response.ok == true) {
      alert("Login realizado com sucesso");
      console.log(response);
      let json = await response.json();
      let token = json.accessToken;
      console.log("token: " + token);
      localStorage.setItem("meutoken", token)
      window.location.href = "/chat";
    } else {
      if (response.status == 401) {
        alert("Credenciaias incorretas. Tente novamente");
      } else {
        alert(
          "Erro inesperado aconteceu, caso persista contate os administradores."
        );
      }
    }
  };
  return (
    <>
      <header></header>

      <main>
        <div className="bg">
        <div className="logincontainer">
         

          <h1>Create Your Account</h1>
          <p>Sign up to start organizing your notes and boost your productiviy</p>

          <input
            className="inpt"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Endereço de E-mail"
          />
          <input
            className="inpt"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            type="password"
            placeholder="Cadastre sua senha"
          />

          <button className="btn" onClick={() => onLoginClick()}>
            Entrar
          </button>

          <a className="gotonuser" href="/login">Já tem uma conta?</a>

        </div>
        </div>
      </main>

      <footer>
      </footer>
    </>
  );
}

export default Login;