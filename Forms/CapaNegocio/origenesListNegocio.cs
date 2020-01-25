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
  public  class OrigenesListNegocio
    {
        origenesListDatos _origenesListDatos = new origenesListDatos();

        public RespuestaEntidad getOrigenesList()
        {
            return _origenesListDatos.getOrigenesList();
        }
    }
}
