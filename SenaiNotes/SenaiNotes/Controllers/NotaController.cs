using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiNotes.Context;
using SenaiNotes.Interfaces;
using SenaiNotes.Repositories;

namespace SenaiNotes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaController : ControllerBase
    {
        private readonly SenaiNotesContext _context;

        private INotaRepository _notaRepository;

        public NotaController(INotaRepository notaRepository)
        {
            _notaRepository = notaRepository;
        }

        // GET
        [HttpGet]
        public IActionResult ListarNotas()
        {
            return Ok(_notaRepository.ListarTodos());
        }
    }
}
