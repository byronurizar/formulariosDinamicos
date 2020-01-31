using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CapaEntidad;
using CapaNegocio;
namespace demoForms
{
    public partial class gridViewdemo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            InfoSpNegocio info = new InfoSpNegocio();

            RespuestaEntidad rsp = new RespuestaEntidad();

            rsp = info.infoSp("spr_registrarFormulario1");


            //demoGridNegocio demo = new demoGridNegocio();
            //RespuestaEntidad rsp = new RespuestaEntidad();

            //rsp = demo.forms();

            //GridView1.DataSource = rsp.valor;
            //GridView1.DataBind();
            //if (GridView1.Rows.Count > 0)
            //{
            //    GridView1.HeaderRow.TableSection = TableRowSection.TableHeader;
            //    GridView1.FooterRow.TableSection = TableRowSection.TableFooter;
            //}
        }
    }
}