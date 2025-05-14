using SenaiNotes.Context;
using SenaiNotes.Interfaces;
using SenaiNotes.Models;

namespace SenaiNotes.Repositories
{
    public class NotaRepository : INotaRepository
    {
        private readonly SenaiNotesContext _context;

        public void Atualizar(int id, Nota nota)
        {
            throw new NotImplementedException();
        }

        public Nota BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Nota nota)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Nota> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
