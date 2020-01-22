using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class pruebaEntidad
    {
        int codigoCaja;
        string descripcion = string.Empty;
        int estatus;
        int usuarioCrea;
        int usuarioModifica;
        int codigoUsuario;
        decimal saldoInicial;
        decimal saldoFinal;
        int codigoEmpresa;
        decimal diferencia;
        string razonDiferencia;
        public int CodigoCaja { get => codigoCaja; set => codigoCaja = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        public int Estatus { get => estatus; set => estatus = value; }
        public int UsuarioCrea { get => usuarioCrea; set => usuarioCrea = value; }
        public int UsuarioModifica { get => usuarioModifica; set => usuarioModifica = value; }
        public int CodigoUsuario { get => codigoUsuario; set => codigoUsuario = value; }
        public decimal SaldoInicial { get => saldoInicial; set => saldoInicial = value; }
        public decimal SaldoFinal { get => saldoFinal; set => saldoFinal = value; }
        public int CodigoEmpresa { get => codigoEmpresa; set => codigoEmpresa = value; }
        public decimal Diferencia { get => diferencia; set => diferencia = value; }
        public string RazonDiferencia { get => razonDiferencia; set => razonDiferencia = value; }
    }
}
