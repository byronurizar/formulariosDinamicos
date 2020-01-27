using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using Microsoft.ApplicationBlocks.Data;

namespace CapaDatos
{
   public class FormularioDatos
    {
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public FormularioDatos()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }
        public string registrarFormulario(dataFormulario form)
        {
            string resultado = string.Empty;
            string sqlConnString = _sConexion;
            SqlCommand cmd = new SqlCommand();
            using (SqlConnection conn = new SqlConnection(sqlConnString))
            {
                conn.Open();
                cmd = new SqlCommand("spr_registrarFormulario", conn);
                cmd.Connection = conn;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("titulo", form.titulo);
                cmd.Parameters.AddWithValue("descripcion", form.descripcion);
                cmd.Parameters.AddWithValue("detalle", form.dtCampos);


                //SqlParameter msgErr1 = new SqlParameter("salida", SqlDbType.NVarChar);
                //msgErr1.Direction = ParameterDirection.Output;
                //cmd.Parameters.Add(msgErr1);
                //cmd.Parameters["salida"].Size = 150;
                //cmd.Parameters["salida"].Size = 150;

                using (SqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                {
                    rdr.Read();
                 //   cmd.Parameters["salida"].Value.ToString();
                    resultado = rdr.GetString(0);
                }

              //  var errCode = cmd.Parameters["CODIGO_RESP"].Value.ToString();

            }
            
           
            return resultado;
        }
        public string registrarFormularioV2(dataFormulario form)
        {
            string resultado = string.Empty;
            string spName = string.Empty;
            try
            {
                string sqlConnString = _sConexion;
                spName = "spr_registrarFormulario";

                SqlParameter[] storedParms = new SqlParameter[3];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = form.titulo;
                storedParms[1].Value = form.descripcion;
                storedParms[2].Value = form.dtCampos;

                SqlCommand cmd = new SqlCommand();

                using (SqlConnection conn = new SqlConnection(sqlConnString))
                {
                    conn.Open();
                    cmd.Connection = conn;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.CommandText = spName;
                    foreach (SqlParameter parm in storedParms)
                        cmd.Parameters.Add(parm);

                    using (SqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                    {
                        rdr.Read();
                        resultado = rdr.GetString(0);
                    }
                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }

            return resultado;
        }
    }
}
