using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
  public  class InfoSpNegocio
    {
        InfoSpDatos info = new InfoSpDatos();
        public RespuestaEntidad infoSp(string nombreSp)
        {
            return info.getParametrosSp(nombreSp);
        }
        public RespuestaEntidad infoSpTabla(string nombreSp)
        {
            return info.getParametrosSpTabla(nombreSp);
        }
    }
}
