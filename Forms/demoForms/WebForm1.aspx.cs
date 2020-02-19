using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
namespace demoForms
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            int rangoInicial = 1;
            int rangoFinal = 1;
            DataTable dtCampo = new DataTable();
            dtCampo.Columns.Add("idLote", typeof(string));
            dtCampo.Columns.Add("rango", typeof(string));

            DataTable dtUtilizados = new DataTable();
            dtUtilizados.Columns.Add("certificado", typeof(string));

            //DataRow nuevaFila1 = dtUtilizados.NewRow();
            //nuevaFila1["certificado"] = 1;
            //dtUtilizados.Rows.Add(nuevaFila1);

            //DataRow nuevaFila21 = dtUtilizados.NewRow();
            //nuevaFila21["certificado"] = 2;
            //dtUtilizados.Rows.Add(nuevaFila21);

            //DataRow nuevaFila211 = dtUtilizados.NewRow();
            //nuevaFila211["certificado"] = 3;
            //dtUtilizados.Rows.Add(nuevaFila211);

            int r1 = rangoInicial;
            int r2 = 0;
            string rango = string.Empty;
            int contador = 0;
            for (int a = rangoInicial; a <= rangoFinal; a++)
            {
                bool existe = false;
                foreach (DataRow item in dtUtilizados.Select("certificado="+a, ""))
                {
                    existe = true;
                    break;
                }

                if (existe)
                {
                    if ((r2 - r1) > 0)
                    {
                        rango = r1 + " - " + (r2 - 1);
                        DataRow nuevaFila = dtCampo.NewRow();
                        nuevaFila["idLote"] = 412;
                        nuevaFila["rango"] = rango;
                        dtCampo.Rows.Add(nuevaFila);

                        r1 = a + 1;
                        contador = 0;
                    }
                    else
                    {
                        r1 = a+1;
                    }
                }
                else
                {
                    r2 = a + 1;
                    contador++;
                }
            }

            if (contador > 0)
            {
                rango = r1 + " - " + (r2 - 1);
                DataRow nuevaFila2 = dtCampo.NewRow();
                nuevaFila2["idLote"] = 412;
                nuevaFila2["rango"] = rango;
                dtCampo.Rows.Add(nuevaFila2);
            }
            

            string ax = "";
        }
    }
}