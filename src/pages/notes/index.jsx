import "../notes/index.jsx";
function Notes() {
  return (
    <>
      <body>
        <div class="page-container">
          <div class="Painel-lateral">
            <img src="" alt="Logo" />
            <div class="Painel-lateral-top">
              <button>All notes</button>
              <button>Archived notes</button>
            </div>
            <div class="Painel-lateral-bot">
              <p>tags</p>
              <li>
                <ul>tag 1</ul>
                <ul>tag 2</ul>
                <ul>tag 3</ul>
                <ul>tag 4</ul>
                <ul>tag 5</ul>
              </li>
            </div>
          </div>
        </div>
        <div class="notas-criadas">
          <button>Create new note</button>
          <button>Nota 1</button>
          <button>Nota 2</button>
          <button>Nota 3</button>
          <button>Nota 4</button>
        </div>
        <div class="Painel-central">
          <h1>All notes</h1>

          <div class="nova-nota">
            <input
              type="text"
              class="note-tittle"
              placeholder="Digite o titulo"
            />
          </div>
          <div class="tags">
            <p>Tags</p>
            <input
              type="text"
              class="tag-input"
              placeholder="Inisira uma tag"
            />
          </div>
          {/* <!-- <div class="editado"></div>  insirir dado de ultima vez editado--> */}
          <textarea
            name="corpo-notas"
            id=""
            placeholder="Digite sua anotaçao"
          ></textarea>
          <div class="acoes-nota">
            <button class="save-note">Salvar a nota</button>
            <button class="cancelar">Cancelar a nota</button>
          </div>
        </div>
        <div class="Painel-lateral-dir">
          <button>Arquivar nota</button>
          <button>Delete nota</button>
        </div>
      </body>
    </>
  );
}

export default Notes;
