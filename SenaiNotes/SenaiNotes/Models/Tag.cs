using System;
using System.Collections.Generic;

namespace SenaiNotes.Models;

public partial class Tag
{
    public int TagId { get; set; }

    public string Nome { get; set; } = null!;

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();
}
