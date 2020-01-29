using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
   public class ItemsListaEntidad
    {
        public string nombreSp { get; set; }
        public int numeroParametros { get; set; }
        public string[] parametros { get; set; }
    }
}
