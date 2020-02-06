using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
  public  class FormularioNegocio
    {
        FormularioDatos _formularioDatos = new FormularioDatos();

        public RespuestaEntidad RegistrarFormulario(dataFormulario form)
        {
            return _formularioDatos.RegistrarFormulario(form);
        }
        public RespuestaEntidad getFormulario(int id)
        {
            return _formularioDatos.getFormulario(id);
        }
        public RespuestaEntidad RegistrarValoresFormulario(dataFormulario form)
        {
            return _formularioDatos.RegistrarValoresFormulario(form);
        }
        public RespuestaEntidad RegistrarFormSpEspecifico(dataFormulario form)
        {
            return _formularioDatos.RegistrarFormSpEspecifico(form);
        }
    }
}
