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
            string json = "{'detalle':[{'idTipoCampo':1,'idTipoDato':2,'tabIndex':0,'etiqueta':'Campo de prueba','valor':'Pruebas','texto':'Pruebas','placeHolder':'Pruebas','longitudMinima':0,'longitudMaxima':0,'valMinimo':'a','valMax':'a','mascara':'a','esRequerido':0,'tipoOrigen':1,'valorLista':'a','elementoJson':'a','seleccionMultiple':0,'urlWebBuscar':'a','validacionScript':'a','visible':1,'soloLectura':0,'numeroLineas':0,'aumentarEn':0,'expresionRegular':'a','tamanioDiv':0}]}";
            DataSet dtCampo = new DataSet();
            dtCampo = JsonConvert.DeserializeObject<DataSet>(json);
            formularioEntidad _formularioEntidad = new formularioEntidad();
            _formularioEntidad.titulo = "Formulario de Prueba";
            _formularioEntidad.descripcion = "Descripcion form de prueba";
            _formularioEntidad.dtCampos = dtCampo.Tables[0];

            formularioNegocio _formularioNegocio = new formularioNegocio();

            string a = _formularioNegocio.registrarForm(_formularioEntidad);



        }
    }
}