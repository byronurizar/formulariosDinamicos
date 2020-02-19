using CapaEntidad;
using CapaNegocio;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace demoForms
{
    public partial class _55e23f2677c10cde67d50a9802363448 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            prueba();
            if (!IsPostBack)
            {
                string idFormulario = Request.QueryString["i"];
                hidIdFormulario.Value = idFormulario;
                OrigenesListNegocio _origenesListNegocio = new OrigenesListNegocio();
                RespuestaEntidad rsp = new RespuestaEntidad();
                RespuestaEntidad response = new RespuestaEntidad();
                string jsonResponse = string.Empty;
                FormularioNegocio frm = new FormularioNegocio();

                try
                {
                    rsp = frm.getFormulario(Convert.ToInt32(idFormulario));

                    DataSet ds = new DataSet();

                    ds = (DataSet)rsp.valor;

                    InfoFormulario info = new InfoFormulario();
                    info.titulo = ds.Tables[0].Rows[0]["titulo"].ToString();
                    info.descripcion = ds.Tables[0].Rows[0]["descripcion"].ToString();
                    info.javaScript= ds.Tables[0].Rows[0]["javaScript"].ToString();
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
        }
       public void prueba()
        {
            //getDataTabla("");
        }

        [WebMethod]
        static public string getTabla(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                tablaNegocio _tablaNegocio = new tablaNegocio();
                JObject solicitud = JObject.Parse(stringRequest);
                string nombreSp = (string)solicitud["nombreSp"];
                var dataCampos = solicitud["data"];
                string strinCampos = dataCampos.ToString();
                DataTable dtCamposValue = new DataTable();
                dtCamposValue = JsonConvert.DeserializeObject<DataTable>(strinCampos);

                DataTable dtParametro = new DataTable();
                dtParametro.Columns.Add("parametroSp", typeof(string));
                dtParametro.Columns.Add("valor", typeof(string));

                DataRow nuevaFila = dtParametro.NewRow();
                nuevaFila["parametroSp"] = "@id";
                nuevaFila["valor"] = 1;
                dtParametro.Rows.Add(nuevaFila);

                DataRow nuevaFila2 = dtParametro.NewRow();
                nuevaFila2["parametroSp"] = "@nombre";
                nuevaFila2["valor"] = "Prueba";
                dtParametro.Rows.Add(nuevaFila2);
                response = _tablaNegocio.getDataTabla(nombreSp, dtCamposValue);
                jsonResponse = JsonConvert.SerializeObject(response);
            }
            catch(Exception ex)
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
        static public string getItemsLista(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                ItemsListaEntidad items = new ItemsListaEntidad();
                items.numeroParametros = 1;
                items.nombreSp = (string)solicitud["nombreSp"];
                string valPrametro = (string)solicitud["parametro"];

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

                response = modal.getBusquedaModal(idModal, parametro.Trim());
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
        static public string regForm(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                ModalBusquedaNegocio modal = new ModalBusquedaNegocio();
                int idForm = (Int32)solicitud["idForm"];
                var dataCampos = solicitud["data"];
                string strinCampos = dataCampos.ToString();
                DataTable dtCamposValue = new DataTable();
                dtCamposValue = JsonConvert.DeserializeObject<DataTable>(strinCampos);

                if (dtCamposValue != null)
                {
                    if (dtCamposValue.Rows.Count > 0)
                    {
                        FormularioNegocio frm = new FormularioNegocio();
                        RespuestaEntidad rsp = new RespuestaEntidad();
                        rsp = frm.getFormulario(idForm);
                        int tipoFormulario = 0;
                        if (rsp.codigo == 0)
                        {
                            DataSet dsCamposForm = new DataSet();
                            
                            dsCamposForm = (DataSet)rsp.valor;
                            tipoFormulario = Convert.ToInt32(dsCamposForm.Tables[0].Rows[0]["idTipoFormulario"].ToString());
                            DataTable dtCampo = new DataTable();
                            dtCampo.Columns.Add("idCampo", typeof(string));
                            dtCampo.Columns.Add("elementoJson", typeof(string));
                            dtCampo.Columns.Add("etiqueta", typeof(string));
                            dtCampo.Columns.Add("valor", typeof(string));
                            dtCampo.Columns.Add("texto", typeof(string));

                            if (tipoFormulario == 2)
                            {
                                dtCampo.Columns.Add("parametroSp", typeof(string));
                            }
                            

                            foreach (DataRow fila in dsCamposForm.Tables[1].Rows)
                            {
                                string elementoJson = fila["elementoJson"].ToString();
                                int visible = Convert.ToInt32(fila["visible"].ToString());
                                int idCampo = Convert.ToInt32(fila["idCampo"].ToString());
                                int idTipoCampo = Convert.ToInt32(fila["idTipoCampo"].ToString());
                                int idTipoDato = Convert.ToInt32(fila["idTipoDato"].ToString());
                                string etiqueta = fila["etiqueta"].ToString();
                                string valor = fila["valor"].ToString();
                                string texto = fila["texto"].ToString();
                                string parametroSp= fila["parametroSp"].ToString();
                                int esRequerido = Convert.ToInt32(fila["esRequerido"].ToString());
                                int soloLectura = Convert.ToInt32(fila["soloLectura"].ToString());
                                if (soloLectura != 1)
                                {
                                    foreach (DataRow item in dtCamposValue.Select("elementoJson='" + elementoJson + "'", ""))
                                    {
                                        valor = item["valor"].ToString();
                                        texto = item["texto"].ToString();
                                        break;
                                    }

                                }
                                DataRow nuevaFila = dtCampo.NewRow();
                                nuevaFila["idCampo"] = idCampo;
                                nuevaFila["elementoJson"] = elementoJson;
                                nuevaFila["etiqueta"] = etiqueta;
                                nuevaFila["valor"] = valor;
                                nuevaFila["texto"] = texto;
                                if (tipoFormulario == 2)
                                {
                                    nuevaFila["parametroSp"] = parametroSp;
                                }
                                dtCampo.Rows.Add(nuevaFila);
                            }

                            
                            dataFormulario dataFormValue = new dataFormulario();
                            dataFormValue.idFormulario = idForm;
                            dataFormValue.dtCampos = dtCampo;
                            dataFormValue.idUsuario = 1;
                            if (tipoFormulario == 1)
                            {
                                rsp = frm.RegistrarValoresFormulario(dataFormValue);

                            }
                            else if (tipoFormulario == 2)
                            {
                                dataFormValue.nombreSp = dsCamposForm.Tables[0].Rows[0]["nombreSp"].ToString();
                                rsp = frm.RegistrarFormSpEspecifico(dataFormValue);

                            }

                            if (rsp.codigo == 0)
                            {
                                response = rsp;
                            }
                            else
                            {
                                response.valor = null;
                                response.mensaje = "Ocurrió un error al realizar el registro";
                                response.error = "";
                            }
                        }
                        else
                        {
                            response = rsp;
                        }
                    }
                    else
                    {
                        response.codigo = -1;
                        response.mensaje = "El formulario se encuentra vacio";
                    }
                }
                else
                {
                    response.codigo = -1;
                    response.mensaje = "El formulario se encuentra vacio";
                }

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