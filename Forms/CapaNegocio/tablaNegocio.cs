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
   public class tablaNegocio
    {
        tablaDatos _tablaDatos = new tablaDatos();
        public RespuestaEntidad getDataTabla(string nombreSp,DataTable dt)
        {
            return _tablaDatos.getDataTabla(nombreSp,dt);
        }
    }
}
