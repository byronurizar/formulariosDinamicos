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
using Newtonsoft.Json.Linq;

namespace demoForms
{
    public partial class miform : System.Web.UI.Page
    {
        RespuestaEntidad rsp = new RespuestaEntidad();
        protected void Page_Load(object sender, EventArgs e)
        {

            OrigenesListNegocio _origenesListNegocio = new OrigenesListNegocio();
            RespuestaEntidad rsp = new RespuestaEntidad();
            RespuestaEntidad response = new RespuestaEntidad();
            string jsonResponse = string.Empty;
            FormularioNegocio frm = new FormularioNegocio();

            try
            {
                rsp = frm.getFormulario(10);

                DataSet ds = new DataSet();

                ds = (DataSet)rsp.valor;

                InfoFormulario info = new InfoFormulario();
                info.nombre = ds.Tables[0].Rows[0]["titulo"].ToString(); ;
                info.descripcion = ds.Tables[0].Rows[0]["descripcion"].ToString();

                List<Campos> listaCampos = new List<Campos>();

                foreach (DataRow item in ds.Tables[1].Select("", "tabIndex asc"))
                {
                    Campos campo = new Campos();
                    campo.idTipoCampo = Convert.ToInt32(item["idTipoCampo"].ToString());
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

                info.campos = listaCampos;

                response.valor = info;
                response.codigo = 0;
                response.mensaje = string.Empty;
                response.error = string.Empty;
                jsonResponse = JsonConvert.SerializeObject(response);
                ClientScript.RegisterStartupScript(this.GetType(), "campos", "pintarCampos(" + jsonResponse + ");", true);

            }
            catch (Exception ex)
            {
                response.codigo = -1;
                response.mensaje = "Ocurrió un error al serializar el objeto";
                response.error = ex.ToString();
                response.valor = null;
                jsonResponse = JsonConvert.SerializeObject(response);
            }


        }

        [WebMethod]
        static public string getItemsLista(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                ItemsListaEntidad items = new ItemsListaEntidad();
                items.numeroParametros = 1;
                items.nombreSp =(string)solicitud["nombreSp"];
                string valPrametro= (string)solicitud["parametro"];
                
                string[] parametro = { valPrametro };
                items.parametros = parametro;

                OrigenesListNegocio origenLista = new OrigenesListNegocio();
                response = origenLista.getItemsLista(items);
                jsonResponse = JsonConvert.SerializeObject(response);
            }
            catch (Exception ex)
            {
                response.codigo = -1;
                response.mensaje = "Ocurrió un error al serializar el objeto";
                response.error = ex.ToString();
                response.valor = null;
                jsonResponse = JsonConvert.SerializeObject(response);

            }
            return jsonResponse;

        }
        [WebMethod]
        static public string getInfoModal(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                ModalBusquedaNegocio modal = new ModalBusquedaNegocio();
                int parametro = (Int32)solicitud["idModal"];
                response = modal.getInfoModal(parametro);
                jsonResponse = JsonConvert.SerializeObject(response);
            }
            catch (Exception ex)
            {
                response.codigo = -1;
                response.mensaje = "Ocurrió un error al serializar el objeto";
                response.error = ex.ToString();
                response.valor = null;
                jsonResponse = JsonConvert.SerializeObject(response);

            }
            return jsonResponse;

        }
        [WebMethod]
        static public string getBusquedaModal(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                ModalBusquedaNegocio modal = new ModalBusquedaNegocio();
                int idModal = (Int32)solicitud["idModal"];
                string parametro = (string)solicitud["parametro"];

                response = modal.getBusquedaModal(idModal,parametro.Trim());
                jsonResponse = JsonConvert.SerializeObject(response);
            }
            catch (Exception ex)
            {
                response.codigo = -1;
                response.mensaje = "Ocurrió un error al serializar el objeto";
                response.error = ex.ToString();
                response.valor = null;
                jsonResponse = JsonConvert.SerializeObject(response);

            }
            return jsonResponse;

        }
    }

}