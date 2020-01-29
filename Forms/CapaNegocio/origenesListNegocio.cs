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
        OrigenesListDatos _origenesListDatos = new OrigenesListDatos();

        public RespuestaEntidad getOrigenesList()
        {
            return _origenesListDatos.getOrigenesList();
        }
        public RespuestaEntidad getItemsLista(ItemsListaEntidad item)
        {
            return _origenesListDatos.getItemsLista(item);
        }
    }
}
