using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
   public class tablaDatos
    {
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public tablaDatos()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }

        public RespuestaEntidad getDataTabla(string nombreSp,DataTable dtParametros)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            try
            {
                string resultado = string.Empty;
                string sqlConnString = _sConexion;
                SqlCommand cmd = new SqlCommand();
                DataSet ds = new DataSet();
                using (SqlConnection conn = new SqlConnection(sqlConnString))
                {
                    conn.Open();
                    cmd = new SqlCommand(nombreSp.Trim(), conn);
                    cmd.Connection = conn;
                    cmd.CommandType = CommandType.StoredProcedure;

                    foreach (DataRow fila in dtParametros.Rows)
                    {
                        cmd.Parameters.AddWithValue(fila["parametroSp"].ToString(), fila["valor"].ToString());
                    }

                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(ds, "tabla");

                    if (ds != null)
                    {
                        if (ds.Tables.Count > 0)
                        {
                            if (ds.Tables[0].Rows.Count > 0)
                            {
                                rsp.codigo = 0;
                                rsp.valor = ds.Tables[0];
                            }
                            else
                            {
                                rsp.codigo = -1;
                                rsp.valor = null;
                                rsp.mensaje = "La tabla aun no contiene ninguna fila";
                            }
                        }
                        else
                        {
                            rsp.codigo = -1;
                            rsp.valor = null;
                            rsp.mensaje = "La consulta no devolvió ninguna tabla";
                        }
                    }
                    else
                    {
                        rsp.codigo = -1;
                        rsp.valor = null;
                        rsp.mensaje = "La consulta no devolvió ninguna tabla";
                    }
                  

                }
            }
            catch (Exception e)
            {
                rsp.codigo = -1;
                rsp.error = e.ToString();
                rsp.valor = null;
                //throw new Exception(e.Message);
            }
            return rsp;
        }
    }
}
