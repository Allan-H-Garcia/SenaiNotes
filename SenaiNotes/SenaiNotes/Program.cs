using SenaiNotes.Context;
using SenaiNotes.Interfaces;
using SenaiNotes.Repositories;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddDbContext<SenaiNotesContext>();
builder.Services.AddTransient<INotaRepository, NotaRepository>();

var app = builder.Build();

app.Run();
