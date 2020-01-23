using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
  public  class formularioNegocio
    {
        formularioDatos _formularioDatos = new formularioDatos();

        public string registrarForm(formularioEntidad form)
        {
            return _formularioDatos.registrarFormulario(form);
        }
    }
}
