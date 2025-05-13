import { useEffect, useState } from "react";
import logo2 from "../../assets/imgs/Chat.png";
import "./chat.css"
// import js from "@eslint/js";

function Chat() {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        //Executada toda vez que a tela abre.
        getChats();


    }, []);

    const getChats = async () => {
        // Arrow Funtion
        let response = await fetch("https://senai-gpt-api.azurewebsite.net/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
                //Bearer: é o tipo de autenticação
            }


        })

        console.log(response);

        if (response.ok == true) {

            let json = await response.json(); // Pegue as informaçoes dos chats

            setChats(json);


        } else {

            if (response.status == 401)
                alert("Token invalido. Faça o login novamente.").
                    window.location.href = "/login";
        }
    }

    return (

        <>
            <main className="container2">
                <div className="chats">

                    <div className="superior">

                    <button className="New-chat">+ New chat</button>

                        {chats.map( chat => (
                            <button className="chat1">
                                <img src="../assets/imgs/chat.svg" alt="icone de chat." />
                                {chat.chatTitle}
                            </button>


                        ))}
                        


                    </div>

                    <div className="inferior">
                        <button className="chat2" style={{ "border-top": "1px solid #ccc" }}>
                            <img src="../assets/imgs/lixeira.svg" alt="lixeira" />
                            Clear conversations
                        </button>
                        <button className="chat2">
                            <img src="../assets/imgs/sol.svg" alt="sol" />
                            Ligth mode
                        </button>
                        <button className="chat2">
                            <img src="../assets/imgs/pessoa.svg" alt="pessoa" />
                            My account
                        </button>
                        <button className="chat2">
                            <img src="../assets/imgs/updates.svg" alt="updates" />
                            Updates & FAQ
                        </button>
                        <button className="chat2">
                            <img src="../assets/imgs/logout.svg" alt="log out" />
                            Login
                        </button>
                    </div>
                </div>


                <div className="contexto">

                    <img className="logo2" src={logo2} alt="Logo do SenaiGPT" />

                    <table className="tabela">
                        <thead>
                            <tr>
                                <th>
                                    <img src="../assets/imgs/examples.svg" alt="Examples" />
                                    Examples
                                </th>
                                <th>
                                    <img src="../assets/imgs/capabilites.svg" alt="Capabilites" />
                                    Capabilites
                                </th>
                                <th>
                                    <img src="../assets/imgs/limitations.svg" alt="Limitations" />
                                    Limitations
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <button>"Explain quantum computing insimples terms"</button>
                                </td>
                                <td>
                                    <button>Remember what user saidearlier in the conversation.</button>
                                </td>
                                <td>
                                    <button>May occasionally generate incorrect information.</button>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    <button>Remember what user saidearlier in the conversation.</button>
                                </td>
                                <td>
                                    <button>Allows user to provide follow-up corrections.</button>
                                </td>
                                <td>
                                    <button>May occasionally produce harmful instructions or baised content.</button>
                                </td>
                            </tr>


                            <tr>
                                <td>
                                    <button>"How do I make na HTTP requestin Javascript?"</button>
                                </td>
                                <td>
                                    <button>Trainer to decline inappropriate requests.</button>
                                </td>
                                <td>
                                    <button>Limited knowledge of world andevents after 2021.</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>


                    <div className="input-container">
                        <img src="../assets/imgs/microfone.svg" alt="microfone" />
                        <img src="../assets/imgs/foto.svg" alt="foto" />
                        <input placeholder="Type a message." type="text" />
                        <img className="enviar" src="../assets/imgs/enviar.svg" alt="enviar" />
                    </div>



                </div>



            </main>
        </>



    )

}
export default Chat;