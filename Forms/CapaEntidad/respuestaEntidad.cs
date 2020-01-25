using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class RespuestaEntidad
    {
        /*
         *0 Resultado exitoso
         *-1 Error
         * -2 No existen registros
         */ 
        public int codigo { get; set; }
        public string mensaje { get; set; } 
        public string error { get; set; }
        public object valor { get; set; }
    }
}
