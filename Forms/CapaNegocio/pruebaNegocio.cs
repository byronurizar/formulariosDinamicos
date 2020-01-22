using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
   public class pruebaNegocio
    {
        pruebaBD _cajaDatos = new pruebaBD();
        public string RegistrarCaja(pruebaEntidad caja)
        {
            return _cajaDatos.RegistrarCaja(caja);
        }
        public DataSet listarCajas(pruebaEntidad caja)
        {
            return _cajaDatos.ListarCajas(caja);
        }
    }
}
