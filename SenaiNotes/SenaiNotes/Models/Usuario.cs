using System;
using System.Collections.Generic;

namespace SenaiNotes.Models;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string NomeUsuario { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public DateTime? DataCriacao { get; set; }

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();
}
