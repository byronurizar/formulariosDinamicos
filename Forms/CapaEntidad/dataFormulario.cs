using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class dataFormulario
    {
        public int idFormulario { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public string nombreSp { get; set; }
        public string javaScript { get; set; }
        public int idTipoFormulario { get; set; }
        public int idUsuario { get; set; }
        public DataTable dtCampos { get; set; }
    }
}
