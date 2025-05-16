import { useEffect, useState } from "react";
import logo from "../../assets/imgs/LogoWrapper.png";
import "./chat.css";
import japan from "../../assets/imgs/japan.png";
import tag from "../../assets/imgs/Tag.png";
import home from "../../assets/imgs/Home.svg";
import rectangle from "../../assets/imgs/Rectangle44.png"
// import archive from "../../assets/Archive.svg";

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
                alert("Token invalido. Faça o login novamente.");
            window.location.href = "/login";
        }
    }

    return (

        <>
            <main className="container">
                <div className="tags">

                    <img className="logo" src={logo} alt="Logo do SenaiLogo." />

                    <div className="globo-tags">
                        <button>
                            <img className="tag" src={home} alt="." />
                            All Notes</button>
                        <button>
                            <img className="tag" src={home} alt="." />
                            Archived Notes</button>

                        <p>Tags</p>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>
                        <button>
                            <img className="tag" src={tag} alt="Tag." />
                            Cooking</button>

                    </div>
                </div>

                <div className="middle">

                    <div className="allNotes">

                        <h1><strong>All Notes</strong></h1>

                    </div>

                    <div className="newNote">

                        <button className="create">+ Create New Note</button>

                        <div className="notes">

                            {/* <button className="note"> */}
                                {/* <img src={japan} alt="Japan" />
                                <div className="note-content">
                                    <div className="note-title">Japan Travel Planning</div>
                                    <div className="note-tags">
                                        <span className="tag">Travel</span>
                                        <span className="tag">Personal</span>
                                    </div>
                                    <div className="note-date">28 Oct 2024</div>
                                </div>
                            </button> */}

                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>

                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>
                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>
                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>
                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>
                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>
                            <button>
                                <img src={japan} alt="imagem do japan." />
                                <div className="note-text">Japan Travel Planning</div>
                            </button>



                        </div>
                    </div>

                    <div className="edit-nota">

                        <img className="photo" src={rectangle} alt="Rectangle" />

                        {/* <h1><strong>React Performance Optimization</strong></h1> */}



                    </div>

                    <div className="end">
                        <button>Archive Note</button>
                        <button>Delete Note</button>
                    </div>

                </div>


            </main >
        </>



    )

}
export default Chat;