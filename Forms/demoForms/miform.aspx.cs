using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using CapaEntidad;
using CapaNegocio;
using Newtonsoft.Json;

namespace demoForms
{
    public partial class miform : System.Web.UI.Page
    {
        RespuestaEntidad rsp = new RespuestaEntidad();
        protected void Page_Load(object sender, EventArgs e)
        {

            OrigenesListNegocio _origenesListNegocio = new OrigenesListNegocio();
//            RespuestaEntidad rsp = new RespuestaEntidad();
            string jsonResponse = string.Empty;
            FormularioNegocio frm = new FormularioNegocio();

            try
            {
                rsp = frm.getFormulario(10);

                DataSet ds = new DataSet();

                ds =(DataSet)rsp.valor;

                InfoFormulario info = new InfoFormulario();
                info.nombre = ds.Tables[0].Rows[0]["titulo"].ToString(); ;
                info.descripcion = ds.Tables[0].Rows[0]["descripcion"].ToString();

                List<Campos> listaCampos = new List<Campos>();

                foreach (DataRow item in ds.Tables[1].Rows)
                {
                    Campos campo = new Campos();
                    campo.idTipoCampo =Convert.ToInt32(item["idTipoCampo"].ToString());
                    campo.idTipoDato = Convert.ToInt32(item["idTipoDato"].ToString());
                    campo.tabIndex = Convert.ToInt32(item["tabIndex"].ToString());
                    campo.etiqueta = item["etiqueta"].ToString();
                    campo.valor = item["valor"].ToString();
                    campo.texto = item["texto"].ToString();
                    campo.placeHolder = item["placeHolder"].ToString();
                    campo.longitudMinima = Convert.ToInt32(item["longitudMinima"].ToString());
                    campo.longitudMaxima = Convert.ToInt32(item["longitudMaxima"].ToString());
                    campo.valMinimo = item["valMinimo"].ToString();
                    campo.valMax = item["valMax"].ToString();
                    campo.mascara = item["mascara"].ToString();
                    campo.esRequerido = Convert.ToInt32(item["esRequerido"].ToString());
                    campo.tipoOrigen = item["tipoOrigen"].ToString();
                    campo.valorLista = item["valorLista"].ToString();
                    campo.elementoJson = item["elementoJson"].ToString();
                    campo.seleccionMultiple = Convert.ToInt32(item["seleccionMultiple"].ToString());
                    campo.urlWebBuscar = item["urlWebBuscar"].ToString();
                    campo.validacionScript = item["validacionScript"].ToString();
                    campo.visible = Convert.ToInt32(item["visible"].ToString());
                    campo.soloLectura = Convert.ToInt32(item["soloLectura"].ToString());
                    campo.numeroLineas = item["numeroLineas"].ToString();
                    campo.aumentarEn = Convert.ToInt32(item["aumentarEn"].ToString());
                    campo.expresionRegular = item["expresionRegular"].ToString();
                    campo.tamanioDiv = item["tamanioDiv"].ToString();
                    campo.elementoJsonPadre = item["elementoJsonPadre"].ToString();
                    listaCampos.Add(campo);
                }

                info.campos=listaCampos;

                jsonResponse = JsonConvert.SerializeObject(info);
            }
            catch (Exception ex)
            {
                rsp.codigo = -1;
                rsp.mensaje = "Ocurrió un error al serializar el objeto";
                rsp.error = ex.ToString();
                jsonResponse = JsonConvert.SerializeObject(rsp);
            }

        }
        [WebMethod]
        static public string getFormulario(string stringRequest)
        {
            
            return "";

        }
    }
   
}