using System;
using System.Collections.Generic;

namespace SenaiNotes.Models;

public partial class Nota
{
    public int NotaId { get; set; }

    public int? UsuarioId { get; set; }

    public string? Titulo { get; set; }

    public string? Imagem { get; set; }

    public string? Conteudo { get; set; }

    public bool? Excluida { get; set; }

    public bool? Arquivada { get; set; }

    public DateTime? DataCriacao { get; set; }

    public DateTime? DataAtualizacao { get; set; }

    public virtual ICollection<Lembrete> Lembretes { get; set; } = new List<Lembrete>();

    public virtual Lixeira? Lixeira { get; set; }

    public virtual Usuario? Usuario { get; set; }

    public virtual ICollection<Tag> Tags { get; set; } = new List<Tag>();
}
