import { useState } from "react";
import "./newuser.css";
import logo from "../../assets/imgs/LogoWrapper.png";
import inforCircle from "../../assets/imgs/infocircle.svg";



function NewUser() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onNewUserClick = async () => {

        let response = await fetch("https://senai-gpt-api.up.railway.app/users", {

            headers: {
                "Content-Type": "application/json",
            },
            method: "POST", // Método que envia dados
            body: JSON.stringify({
                email: email,
                password: password,
            })

        });

        if (response.ok == true) { // Verifica se a requisição deu certo.

            alert("Cadastro realizado com sucesso!");

            window.location.href = "/login";

        } else {

            if (response.status == 401) {

                alert("Credenciais incorretas. Tente novamente.");

            } else {

                alert("Erro inesperado aconteceu, caso persista, contate os administradores.");

            }

        }

    }



    return (

        <>
            <header></header>

            <main className="page-container">


                <div className="login-container">

                    <img className="login-logo" src={logo} alt="Logo do SenaiGPT." />

                    <h2
                        id="meutitulo"
                        className="titulo"
                    ><strong>Create Your Account</strong></h2>

                    <h3>Sign up to start organizing your notes and boost your productivity.</h3>

                    <h4>Email Address</h4>
                    <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="email@example.com" />
                    <h4>Password</h4>
                    <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" />

                    <div className="infor">
                        <img src={inforCircle} alt="ícone de informação." />
                        <h5> At least 8 characters</h5>
                    </div>


                    <button className="btn" onClick={() => onNewUserClick()}>Sing Up</button> <br />
                    <a className="form-hint" href="/login">Already have an account? <strong>Login</strong></a>

                </div>

            </main>

            <footer></footer>
        </>


    )

}

export default NewUser;