using System;
using System.Collections.Generic;

namespace SenaiNotes.Models;

public partial class Lixeira
{
    public int LixeiraId { get; set; }

    public int? NotaId { get; set; }

    public DateTime? DataExclusao { get; set; }

    public virtual Nota? Nota { get; set; }
}
