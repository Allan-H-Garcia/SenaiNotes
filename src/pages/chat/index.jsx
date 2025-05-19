import { useEffect, useState } from "react";
import "./chat.css";
import japan from "../../assets/imgs/japan.png";
// import tag from "../../assets/imgs/Tag.png";
import rectangle from "../../assets/imgs/Rectangle44.png"
import LeftPanel from "../../components/left-painel";
// import archive from "../../assets/Archive.svg";
import enviar from "../../assets/imgs/enviar.png";
import Delete from "../../assets/imgs/Delete.png";
import clock from "../../assets/imgs/CircleClock.png";
import tag from "../../assets/imgs/Tag.png";

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

                    <LeftPanel />

                </div>

                <div className="middle">

                    <div className="allNotes">

                        <h1><strong>All Notes</strong></h1>

                    </div>
                    <div className="center">
                        <div className="newNote">

                            <button className="create">+ Create New Note</button>
                          

                            <button class="tag-button">
                                <img src={japan} alt="imagem do japan." />
                                <div class="note-info">
                                    <h3>Japan Travel Planning</h3>
                                    <div class="info">
                                        <span>Travel</span>
                                        <span>Personal</span>
                                    </div>
                                    <p class="date-info">28 Oct 2024</p>
                                </div>
                            </button>

                            <button class="tag-button">
                                <img src={japan} alt="imagem do japan." />
                                <div class="note-info">
                                    <h3>Japan Travel Planning</h3>
                                    <div class="info">
                                        <span>Travel</span>
                                        <span>Personal</span>
                                    </div>
                                    <p class="date-info">28 Oct 2024</p>
                                </div>
                            </button>

                            <button class="tag-button">
                                <img src={japan} alt="imagem do japan." />
                                <div class="note-info">
                                    <h3>Japan Travel Planning</h3>
                                    <div class="info">
                                        <span>Travel</span>
                                        <span>Personal</span>
                                    </div>
                                    <p class="date-info">28 Oct 2024</p>
                                </div>
                            </button>

                        </div>

                        <div className="edit-nota">

                            <img className="photo" src={rectangle} alt="Rectangle" />

                            <p className="tittle"><strong>React Performance Optimization</strong></p>

                            <div className="organization">
                                <div className="nameTag">
                                    <img className="tag" src={tag} alt="." />
                                    <span>Tags</span>
                                    <span className="space"> Dev, React</span>
                                </div>

                                <div className="time">
                                    <img className="clock" src={clock} alt="." />
                                    <span>Last edited</span>
                                    <span className="space-two">29 Oct 2024</span>
                                </div>
                            </div>




                            <div className="text-content">
                                <p><br></br>Key performance optimization techniques:</p>
                                <div className="list">
                                    <ol> <br></br>

                                        <li>Code Splitting<ul>
                                            <li>Use React.lazy() for route-based splitting</li>
                                            <li>Implement dynamic imports for heavy components</li>
                                        </ul>
                                        </li><br></br>
                                        <li>Memoization<ul>
                                            <li>useMemo for expensive calculations</li>
                                            <li>useCallback for function props</li>
                                            <li>React.memo for component optimization</li>
                                        </ul>
                                        </li> <br></br>
                                        <li>Virtual List Implementation<ul>
                                            <li>Use react-window for long lists</li>
                                            <li>Implement infinite scrolling</li>
                                        </ul>
                                        </li>
                                    </ol> <br></br>
                                    <p>TODO:Benchmark current application and identify bottlenecks</p>
                                    <div className="buttonEdit">
                                        <button className="saveNote">Save note</button>
                                        <button className="cancel">Cancel</button>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="end">
                            <button>
                                <img src={Delete} alt="Enviar" />
                                Archive Note</button>
                            <button>
                                <img src={Delete} alt="Enviar" />

                                Delete Note</button>
                        </div>
                    </div>

                </div>

            </main >
        </>



    )

}
export default Chat;