using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using CapaEntidad;
using CapaNegocio;
using Utilidades;
namespace demoForms
{
    public partial class principal : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                generarRolMenu();
            }
            Class1 nue = new Class1();

            string encriptardo = nue.Encrypt("formulario","79540281");
            string desc = nue.Decrypt(encriptardo, "79540281");
            
            
        }
        public void generarRolMenu()
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            RolMenuNegocio rlMenu = new RolMenuNegocio();
            rsp = rlMenu.getRolMenu(1);

            if (rsp.codigo == 0)
            {
                DataTable dtMenu = new DataTable();

                StringBuilder sbMenu = new StringBuilder();
                
                dtMenu = (DataTable)rsp.valor;
                int idMenu = 0;
                List<Int32> adds = new List<int>();
                foreach (DataRow fila in dtMenu.Select("idMenu<>"+idMenu,"posicion asc"))
                {
                    bool existe = false;
                    idMenu = Convert.ToInt32(fila["idMenu"].ToString());
                    int valor = adds.Find(item=>item==idMenu);

                    if (valor<=0)
                    {
                        sbMenu.Append("<li>");
                        
                        int idMenuPadre = Convert.ToInt32(fila["idMenuPadre"].ToString());
                        bool existeNvl1 = false;
                        string href = fila["hRef"].ToString().Trim();
                        string desc = fila["descripcion"].ToString().Trim();
                        string icono = fila["icono"].ToString().Trim();
                        
                        
                        adds.Add(idMenu);
                        StringBuilder sbMenuNivel1 = new StringBuilder();
                        
                        foreach (DataRow item1 in dtMenu.Select("idMenuPadre=" + idMenu + " and idMenu<>" + idMenu, "posicion asc"))
                        {
                            int idMenuHijo = Convert.ToInt32(item1["idMenu"].ToString());
                            string hrefNvl1 = item1["hRef"].ToString().Trim();
                            string descNvl1 = item1["descripcion"].ToString().Trim();
                            string iconoNvl1 = item1["icono"].ToString().Trim();

                            bool existeNvl2 = false;
                            StringBuilder sbMenuNivel2 = new StringBuilder();
                            foreach (DataRow item2 in dtMenu.Select("idMenuPadre=" + idMenuHijo + " and idMenu<>" + idMenuHijo, "posicion asc"))
                            {
                                int idMenu2 = Convert.ToInt32(item2["idMenu"].ToString());
                                string hrefNvl2 = item2["hRef"].ToString().Trim();
                                string descNvl2 = item2["descripcion"].ToString().Trim();
                                string iconoNvl2 = item2["icono"].ToString().Trim();
                                sbMenuNivel2.Append("<li>");
                                sbMenuNivel2.Append("<a href='").Append(hrefNvl2).Append("'>").Append("<i class='").Append(iconoNvl2).Append("'></i>").Append(descNvl2).Append("</a>");
                                sbMenuNivel2.Append("</li>");
                                existeNvl2 = true;
                                adds.Add(idMenu2);
                            }

                            sbMenuNivel1.Append("<li>");
                            
                            if (existeNvl2)
                            {
                                sbMenuNivel1.Append("<a href='").Append(hrefNvl1).Append("' class='sidebar-header'>").Append("<i class='").Append(iconoNvl1).Append("'></i>").Append("<span>").Append(descNvl1).Append("</span><i class='fa fa-angle-right pull-right'></i>").Append("</a>");
                                sbMenuNivel1.Append("<ul class='sidebar-submenu'>");
                                sbMenuNivel1.Append(sbMenuNivel2.ToString());
                                sbMenuNivel1.Append("</ul>");
                            }
                            else
                            {
                                sbMenuNivel1.Append("<a href='").Append(hrefNvl1).Append("'>").Append("<i class='").Append(iconoNvl1).Append("'></i>").Append(descNvl1).Append("</a>");
                            }
                            sbMenuNivel1.Append("</li>");
                            adds.Add(idMenuHijo);

                            existeNvl1 = true;
                        }
                        
                        if (existeNvl1)
                        {
                            sbMenu.Append("<a href='").Append(href).Append("' class='sidebar-header'>").Append("<i class='").Append(icono).Append("'></i>").Append("<span>").Append(desc).Append("</span><i class='fa fa-angle-right pull-right'></i>").Append("</a>");
                            sbMenu.Append("<ul class='sidebar-submenu'>");
                            sbMenu.Append(sbMenuNivel1.ToString());
                            sbMenu.Append("</ul>");
                        }
                        else
                        {
                            sbMenu.Append("<a href='").Append(href).Append("' class='sidebar-header'>").Append("<i class='").Append(icono).Append("'></i>").Append(desc).Append("</a>");
                        }
                        sbMenu.Append("</li>");
                    }
                }
                lralMenu.Text = sbMenu.ToString();
            }
        }
    }
}