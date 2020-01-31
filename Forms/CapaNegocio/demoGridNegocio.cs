using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
    public class demoGridNegocio
    {
        demoGridView demo = new demoGridView();

        public RespuestaEntidad forms()
        {
            return demo.getFormularios();
        }
    }
}
