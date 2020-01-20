using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace demoForms
{
    public partial class frm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        static public string registrarFormulario(string stringRequest)
        {
            string jsonResponse = string.Empty;

            return jsonResponse;
        }
    }
}