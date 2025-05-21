import { useEffect, useState } from "react";
import "./chat.css";
import japan from "../../assets/imgs/japan.png";
// import tag from "../../assets/imgs/Tag.png";
import rectangle from "../../assets/imgs/Rectangle44.png";
import LeftPanel from "../../components/left-painel";
import archive from "../../assets/imgs/Archive.png";
import enviar from "../../assets/imgs/enviar.png";
import Delete from "../../assets/imgs/Delete.png";
import clock from "../../assets/imgs/CircleClock.png";
import tag from "../../assets/imgs/Tag.png";
import login from "../../assets/imgs/login.png";
// import config from "../../assets/imgs/config.png";
// import js from "@eslint/js";

function Chat() {
  const [notas, setNotas] = useState([]);
  const [NotaSelecionado, setNotaSelecionado] = useState(null);

  useEffect(() => {
    //Executada toda vez que a tela abre.
    getNotas();
  }, []);

  const getNotas = async () => {
    // Arrow Funtion
    let response = await fetch("http://localhost:3000/notes", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("meuToken"),
        //Bearer: é o tipo de autenticaçãonpm
      },
    });

    console.log(response);

    if (response.ok == true) {
      let json = await response.json(); // Pegue as informaçoes dos chats

      setNotas(json);
    } else {
      if (response.status == 401);
      window.location.href = "/login";
    }
  };

  const clickNotas = (nota) => {
    setNotaSelecionado(nota);
  };

  const NovoNota = async () => {
    let novoTitulo = <div className="tittle"></div>;
    let tag = <div className="tag-input"></div>;
    let descricao = <div className="corpo-nota"></div>;
    if (novoTitulo == null || novoTitulo == "") {
      return;
    }
  };

  return (
    <>
      <main className="container">
        <div className="tags">
          <LeftPanel />
        </div>

        <div className="middle">
          <div className="allNotes">
            <h1>
              <strong>All Notes</strong>
            </h1>
          </div>
          <div className="center">
            <div className="newNote">
              <button className="create" onClick={() => NovoNota (notas)}>
                + Create New Note
              </button>

              {notas.map((nota) => (
                <button
                  className="tag-button"
                  onClick={() => clickNotas(notas)}
                >
                  <img src={japan} alt="imagem do japan." />
                  <div className="note-info">
                    <h3>Japan Travel Planning</h3>
                    <div className="info">
                      <span>Travel</span>
                      <span>Personal</span>
                    </div>
                    <p className="date-info">28 Oct 2024</p>
                  </div>
                </button>
              ))}
              <button className="tag-button">
                <img src={japan} alt="imagem do japan." />
                <div className="note-info">
                  <h3>Japan Travel Planning</h3>
                  <div className="info">
                    <span>Travel</span>
                    <span>Personal</span>
                  </div>
                  <p className="date-info">28 Oct 2024</p>
                </div>
              </button>

              <button className="tag-button">
                <img src={japan} alt="imagem do japan." />
                <div className="note-info">
                  <h3>Japan Travel Planning</h3>
                  <div className="info">
                    <span>Travel</span>
                    <span>Personal</span>
                  </div>
                  <p className="date-info">28 Oct 2024</p>
                </div>
              </button>

              <button className="tag-button">
                <img src={japan} alt="imagem do japan." />
                <div className="note-info">
                  <h3>Japan Travel Planning</h3>
                  <div className="info">
                    <span>Travel</span>
                    <span>Personal</span>
                  </div>
                  <p className="date-info">28 Oct 2024</p>
                </div>
              </button>
            </div>

            <div className="edit-nota">
              <img className="photo" src={rectangle} alt="Rectangle" />

              <div className="tittle">
                <input
                  type="text"
                  class="note-tittle"
                  placeholder="Digite o titulo"
                />
              </div>

              <div className="organization">
                <div className="nameTag">
                  <img className="tag" src={tag} alt="." />
                  <span>Tags</span>
                  <input
                    type="text"
                    class="tag-input"
                    placeholder="Inisira uma tag"
                  />
                </div>

                <div className="time">
                  <img className="clock" src={clock} alt="." />
                  <span>Last edited</span>
                  <span className="space-two">29 Oct 2024</span>
                </div>
              </div>

              <div className="text-content">
                <textarea
                  className="corpo-notas"
                  name="corpo-notas"
                  id=""
                  placeholder="Digite sua anotaçao"
                ></textarea>
              </div>
            </div>

            <div className="end">
              <button>
                <img src={Delete} alt="Enviar" />
                Archive Note
              </button>
              <button>
                <img src={Delete} alt="Enviar" />
                Delete Note
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chat;
