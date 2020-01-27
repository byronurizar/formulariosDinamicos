using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CapaEntidad;
using CapaNegocio;
using Newtonsoft.Json;

namespace demoForms
{
    public partial class pruebaBD : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            pruebaEntidad _pruebaEntidad = new pruebaEntidad();
            _pruebaEntidad.Descripcion = "Prueba";
            _pruebaEntidad.Estatus = 1;
            _pruebaEntidad.UsuarioCrea =1;

            pruebaNegocio _pruebaNegocio = new pruebaNegocio();

            string mensaje = _pruebaNegocio.RegistrarCaja(_pruebaEntidad);
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            pruebaEntidad _pruebaEntidad = new pruebaEntidad();
            _pruebaEntidad.Descripcion = "Prueba";
            _pruebaEntidad.Estatus = 1;
            _pruebaEntidad.UsuarioCrea = 1;
            _pruebaEntidad.CodigoUsuario = 1;
            _pruebaEntidad.CodigoEmpresa = 1;
            pruebaNegocio _pruebaNegocio = new pruebaNegocio();

            DataSet ds = new DataSet();

            ds = _pruebaNegocio.listarCajas(_pruebaEntidad);
        }

        protected void Button3_Click(object sender, EventArgs e)
        {
     


        }
    }
}