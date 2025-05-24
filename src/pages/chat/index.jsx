import { useEffect, useState } from "react";
import "./chat.css";
import japan from "../../assets/imgs/japan.png";
// import tag from "../../assets/imgs/Tag.png";
import rectangle from "../../assets/imgs/Rectangle44.png";
import LeftPanel from "../../components/left-painel";
import archive from "../../assets/imgs/Archive.png";
// import enviar from "../../assets/imgs/enviar.png";
import Delete from "../../assets/imgs/Delete.png";
import clock from "../../assets/imgs/CircleClock.png";
import tag from "../../assets/imgs/Tag.png";
// import login from "../../assets/imgs/login.png";


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
    let novoTitulo = prompt("Insira o título do chat:");
    if (!novoTitulo) {
      alert("Insira um título");
      return;
    }

    let nNota = {
      title: novoTitulo,
      description: "",
      tags: [],
      date: new Date().toISOString(),
    };

    let response = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("meuToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nNota),
    });

    if (response.ok) {
      const notaCriada = await response.json(); // essa deve ter o `id`
      setNotaSelecionado(notaCriada);
      getNotas(); // atualiza a lista na tela
    } else {
      console.error("Erro ao criar a nota.");
    }
  };

  const salvarNota = async () => {
    if (!NotaSelecionado) {
      alert("Nenhuma nota selecionada.");
      return;
    }

    const notaParaSalvar = {
      ...NotaSelecionado,
      image: "assets/sample.png",
      date: new Date().toISOString(),
    };

    const method = NotaSelecionado.id ? "PUT" : "POST";
    const url = NotaSelecionado.id
      ? `http://localhost:3000/notes/${NotaSelecionado.id}`
      : `http://localhost:3000/notes`;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("meuToken"),
      },
      body: JSON.stringify(notaParaSalvar),
    });

    if (response.ok) {
      const notaAtualizada = await response.json();
      setNotaSelecionado(notaAtualizada);
      getNotas();
      alert("Nota salva com sucesso!");
    } else {
      alert("Erro ao salvar a nota.");
    }
  };

const deleteNota = async () => {
  if (!NotaSelecionado) {
    alert("Nenhuma nota selecionada.");
    return;
  }

  const response = await fetch(`http://localhost:3000/notes/${NotaSelecionado.id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("meuToken"),
    },
  });

  if (response.ok) {
    alert("Nota deletada com sucesso!");
    setNotas(notas.filter(nota => nota.id !== NotaSelecionado.id));
    setNotaSelecionado(null); // Limpa a nota selecionada
  } else {
    console.error("Erro ao deletar a nota.");
  }
};


// const AtualizacaoArquivo = ({ dataAtualizacao }) => {
//   const dataFormatada = new Date(dataAtualizacao).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long', 
//     day: 'numeric',
//   });
//     }  


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
              <button className="create" onClick={() => NovoNota()}>
                + Create New Note
              </button>

              {notas.map((nota) => (
                <button className="tag-button" onClick={() => clickNotas(nota)}>
                  <img src={japan} alt="imagem do japan." />
                  <div className="note-info">
                    <h3>{nota.title}</h3>
                    <div className="info">
                      <span>Travel</span>
                      <span>Personal</span>
                    </div>
                    <p className="date-info">28 Oct 2024</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="edit-nota">
              <img className="photo" src={rectangle} alt="Rectangle" />

              <div className="tittle">
                <input
                  type="text"
                  className="note-tittle"
                  placeholder="Adicione um título"
                  value={NotaSelecionado?.title}
                  onChange={(event) =>
                    setNotaSelecionado({
                      ...NotaSelecionado,
                      title: event.target.value,
                    })
                  }
                />
              </div>

              <div className="organization">
                <div className="nameTag">
                  <img className="tag" src={tag} alt="." />
                  <span>Tags</span>
                  <input
                    type="text"
                    className="tag-input"
                    placeholder="Adicione uma tag"
                    value={NotaSelecionado?.tags}
                    onChange={(event) =>
                      setNotaSelecionado({
                        ...NotaSelecionado,
                        tags: event.target.value,
                      })
                    }
                  />
                </div>

                <div className="time">
                  <img className="clock" src={clock} alt="." />
                  <span>Last edited</span>
                  <span className="space-two">
                    {new Date(NotaSelecionado?.date).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="text-content">
                <textarea
                  className="corpo-notas"
                  name="corpo-notas"
                  id=""
                  placeholder="Escreva suas anotações aqui!"
                  value={NotaSelecionado?.description}
                  onChange={(event) =>
                    setNotaSelecionado({
                      ...NotaSelecionado,
                      description: event.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="buttonEdit">
                <button className="saveNote" onClick={salvarNota}>
                  Save note
                </button>
                <button className="cancel">Cancel</button>
              </div>
            </div>

            <div className="end">
              <button>
                <img src={archive} alt="Enviar" />
                Archive Note
              </button>
              <button onClick={deleteNota}>
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
