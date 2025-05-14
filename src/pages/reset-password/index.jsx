import "./resetpassword.css";
import logo from "../../assets/imgs/LogoWrapper.png";
import { useState } from "react";

// front@gmail.com
//frontdomina
function ConfirPassword() {

    const [password, setPassoword] = useState("");
    const [confirPassword, setConfirPassoword] = useState("");


    const onResetClick = async () => {


        let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

            headers: {
                "Content-Type": "application/json"
            },
            method: "POST", //Método que envia dados
            body: JSON.stringify({ //quem define é o back-end
                password: password,
                confirPassword: confirPassword //não precisa de virgula porque é a ultima propriedade
            })

        });

        if (response.ok == true) {

            alert("Senha alterada com sucesso!");

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
                    > <strong>Reset Your Password</strong></h2>
                    <h3>PChoose a new password to secure your account.</h3>


                    <div className="passwordForgot">
                        <h4>New Password</h4>

                    </div>
                    <input className="inpt" value={password} onChange={event => setPassoword(event.target.value)} type="password" />

                    <h4>Confirm New Password</h4>
                    <input className="inpt" value={password} onChange={event => setPassoword(event.target.value)} type="password" />


                    <button className="btn" onClick={() => onResetClick()}>Reset Password</button>

                </div>

            </main>

            <footer></footer>
        </>
    )
}

export default ConfirPassword;