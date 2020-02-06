using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
   public class RolMenuNegocio
    {
        RolMenuDatos rolMenu = new RolMenuDatos();

        public RespuestaEntidad getRolMenu(int idRol)
        {
            return rolMenu.getRolMenu(idRol);
        }
    }
}
