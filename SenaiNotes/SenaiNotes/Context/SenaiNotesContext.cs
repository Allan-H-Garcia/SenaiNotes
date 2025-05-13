using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using SenaiNotes.Models;

namespace SenaiNotes.Context;

public partial class SenaiNotesContext : DbContext
{
    public SenaiNotesContext()
    {
    }

    public SenaiNotesContext(DbContextOptions<SenaiNotesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Lembrete> Lembretes { get; set; }

    public virtual DbSet<Lixeira> Lixeiras { get; set; }

    public virtual DbSet<Nota> Notas { get; set; }

    public virtual DbSet<Tag> Tags { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-EUMC23F\\SQLEXPRESS;Initial Catalog=SenaiNotes;User Id=sa;Password=Senai@134;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Lembrete>(entity =>
        {
            entity.HasKey(e => e.LembreteId).HasName("PK__lembrete__725CCFFDD4427D0E");

            entity.ToTable("lembretes");

            entity.Property(e => e.LembreteId).HasColumnName("lembrete_id");
            entity.Property(e => e.Ativo)
                .HasDefaultValue(true)
                .HasColumnName("ativo");
            entity.Property(e => e.DataLembrete)
                .HasColumnType("datetime")
                .HasColumnName("data_lembrete");
            entity.Property(e => e.Descricao)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("descricao");
            entity.Property(e => e.NotaId).HasColumnName("nota_id");

            entity.HasOne(d => d.Nota).WithMany(p => p.Lembretes)
                .HasForeignKey(d => d.NotaId)
                .HasConstraintName("FK__lembretes__nota___5441852A");
        });

        modelBuilder.Entity<Lixeira>(entity =>
        {
            entity.HasKey(e => e.LixeiraId).HasName("PK__lixeira__F25ADF1A878AF9C8");

            entity.ToTable("lixeira");

            entity.HasIndex(e => e.NotaId, "UQ__lixeira__333C1C40E609F517").IsUnique();

            entity.Property(e => e.LixeiraId).HasColumnName("lixeira_id");
            entity.Property(e => e.DataExclusao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("data_exclusao");
            entity.Property(e => e.NotaId).HasColumnName("nota_id");

            entity.HasOne(d => d.Nota).WithOne(p => p.Lixeira)
                .HasForeignKey<Lixeira>(d => d.NotaId)
                .HasConstraintName("FK__lixeira__nota_id__60A75C0F");
        });

        modelBuilder.Entity<Nota>(entity =>
        {
            entity.HasKey(e => e.NotaId).HasName("PK__notas__333C1C416394F087");

            entity.ToTable("notas");

            entity.Property(e => e.NotaId).HasColumnName("nota_id");
            entity.Property(e => e.Arquivada)
                .HasDefaultValue(false)
                .HasColumnName("arquivada");
            entity.Property(e => e.Conteudo)
                .HasColumnType("text")
                .HasColumnName("conteudo");
            entity.Property(e => e.DataAtualizacao)
                .HasColumnType("datetime")
                .HasColumnName("data_atualizacao");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("data_criacao");
            entity.Property(e => e.Excluida)
                .HasDefaultValue(false)
                .HasColumnName("excluida");
            entity.Property(e => e.Imagem)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("imagem");
            entity.Property(e => e.Titulo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("titulo");
            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Nota)
                .HasForeignKey(d => d.UsuarioId)
                .HasConstraintName("FK__notas__usuario_i__4E88ABD4");

            entity.HasMany(d => d.Tags).WithMany(p => p.Nota)
                .UsingEntity<Dictionary<string, object>>(
                    "NotaTag",
                    r => r.HasOne<Tag>().WithMany()
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__nota_tags__tag_i__5BE2A6F2"),
                    l => l.HasOne<Nota>().WithMany()
                        .HasForeignKey("NotaId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__nota_tags__nota___5AEE82B9"),
                    j =>
                    {
                        j.HasKey("NotaId", "TagId").HasName("PK__nota_tag__4715766AD4E7D541");
                        j.ToTable("nota_tags");
                        j.IndexerProperty<int>("NotaId").HasColumnName("nota_id");
                        j.IndexerProperty<int>("TagId").HasColumnName("tag_id");
                    });
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.HasKey(e => e.TagId).HasName("PK__tags__4296A2B6C3A776BF");

            entity.ToTable("tags");

            entity.HasIndex(e => e.Nome, "UQ__tags__6F71C0DCAD81A8F5").IsUnique();

            entity.Property(e => e.TagId).HasColumnName("tag_id");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nome");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK__usuarios__2ED7D2AF30B3F348");

            entity.ToTable("usuarios");

            entity.HasIndex(e => e.Email, "UQ__usuarios__AB6E6164E92DBA57").IsUnique();

            entity.HasIndex(e => e.NomeUsuario, "UQ__usuarios__CCB80B0AA6583B98").IsUnique();

            entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");
            entity.Property(e => e.DataCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("data_criacao");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.NomeUsuario)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nome_usuario");
            entity.Property(e => e.Senha)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("senha");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
