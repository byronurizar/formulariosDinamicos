using System;
using System.Collections.Generic;
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
    public partial class buildForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        static public string getInfoSp(string stringRequest)
        {
            string jsonResponse = string.Empty;
            RespuestaEntidad response = new RespuestaEntidad();
            InfoSpNegocio infoSp = new InfoSpNegocio();
            try
            {
                JObject solicitud = JObject.Parse(stringRequest);
                string nombreSp = (string)solicitud["nombreSp"];

                response = infoSp.infoSp(nombreSp);
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