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
        public RespuestaEntidad RegistrarFormulario(dataFormulario form)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            try
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
                    cmd.Parameters.AddWithValue("nombreSp", form.nombreSp);
                    cmd.Parameters.AddWithValue("idTipoFormulario", form.idTipoFormulario);
                    cmd.Parameters.AddWithValue("idUsuario", form.idUsuario);
                    cmd.Parameters.AddWithValue("detalle", form.dtCampos);


                    SqlParameter CodRes = new SqlParameter("codigo", SqlDbType.Int);
                    CodRes.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(CodRes);

                    SqlParameter msgErr1 = new SqlParameter("mensaje", SqlDbType.NVarChar);
                    msgErr1.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr1);

                    SqlParameter msgErr2 = new SqlParameter("error", SqlDbType.NVarChar);
                    msgErr2.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr2);

                    cmd.Parameters["titulo"].Size = 200;
                    cmd.Parameters["descripcion"].Size = 300;
                    cmd.Parameters["nombreSp"].Size = 200;

                    cmd.Parameters["mensaje"].Size = 200;
                    cmd.Parameters["error"].Size = 200;


                    using (SqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                    {
                        rdr.Read();
                        rsp.codigo=Convert.ToInt32(cmd.Parameters["codigo"].Value.ToString());
                        rsp.mensaje = cmd.Parameters["mensaje"].Value.ToString();
                        rsp.error = cmd.Parameters["error"].Value.ToString();
                    }

                }
            }
            catch (Exception e)
            {
                rsp.codigo = -1;
                rsp.error = e.ToString();
                throw new Exception(e.Message);
            }
            return rsp;
        }
        public RespuestaEntidad RegistrarValoresFormulario(dataFormulario form)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            try
            {
                string resultado = string.Empty;
                string sqlConnString = _sConexion;
                SqlCommand cmd = new SqlCommand();
                using (SqlConnection conn = new SqlConnection(sqlConnString))
                {
                    conn.Open();
                    cmd = new SqlCommand("spr_registrarHsFormulario", conn);
                    cmd.Connection = conn;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("idformulario", form.idFormulario);
                    cmd.Parameters.AddWithValue("detalle", form.dtCampos);
                    cmd.Parameters.AddWithValue("idUsuario", form.idUsuario);


                    SqlParameter CodRes = new SqlParameter("codigo", SqlDbType.Int);
                    CodRes.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(CodRes);

                    SqlParameter msgErr1 = new SqlParameter("mensaje", SqlDbType.NVarChar);
                    msgErr1.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr1);

                    SqlParameter msgErr2 = new SqlParameter("error", SqlDbType.NVarChar);
                    msgErr2.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr2);

                    cmd.Parameters["mensaje"].Size = 200;
                    cmd.Parameters["error"].Size = 200;


                    using (SqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                    {
                        rdr.Read();
                        rsp.codigo = Convert.ToInt32(cmd.Parameters["codigo"].Value.ToString());
                        rsp.mensaje = cmd.Parameters["mensaje"].Value.ToString();
                        rsp.error = cmd.Parameters["error"].Value.ToString();
                    }

                }
            }
            catch (Exception e)
            {
                rsp.codigo = -1;
                rsp.error = e.ToString();
                rsp.valor = null;
               // throw new Exception(e.Message);
            }
            return rsp;
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
        public RespuestaEntidad getFormulario(int id)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_listarFormulario";
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[1];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = id;
                ds = SqlHelper.ExecuteDataset(sqlConnString, System.Data.CommandType.StoredProcedure, spName, storedParms);
                if (ds != null)
                {
                    if (ds.Tables.Count > 0)
                    {
                        if (ds.Tables[0].Rows.Count > 0 && ds.Tables[1].Rows.Count > 0)
                        {
                            rsp.codigo = 0;
                            rsp.valor = ds;
                        }
                        else
                        {
                            rsp.codigo = -2;
                            rsp.mensaje = "No existe información del formulario";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "No existe información del formulario";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "No existe información del formulario";
                }
            }
            catch (Exception e)
            {
                rsp.codigo = -1;
                rsp.error = e.Message.ToString();
                throw new Exception(e.Message);
            }
            return rsp;
        }
        public RespuestaEntidad RegistrarFormSpEspecifico(dataFormulario form)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            try
            {
                string resultado = string.Empty;
                string sqlConnString = _sConexion;
                SqlCommand cmd = new SqlCommand();
                using (SqlConnection conn = new SqlConnection(sqlConnString))
                {
                    conn.Open();
                    cmd = new SqlCommand(form.nombreSp.Trim(), conn);
                    cmd.Connection = conn;
                    cmd.CommandType = CommandType.StoredProcedure;

                    foreach (DataRow fila in form.dtCampos.Rows)
                    {
                        cmd.Parameters.AddWithValue(fila["parametroSp"].ToString(), fila["valor"].ToString());
                    }

                    SqlParameter CodRes = new SqlParameter("codigo", SqlDbType.Int);
                    CodRes.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(CodRes);

                    SqlParameter msgErr1 = new SqlParameter("mensaje", SqlDbType.NVarChar);
                    msgErr1.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr1);

                    SqlParameter msgErr2 = new SqlParameter("error", SqlDbType.NVarChar);
                    msgErr2.Direction = ParameterDirection.Output;
                    cmd.Parameters.Add(msgErr2);

                    cmd.Parameters["mensaje"].Size = 200;
                    cmd.Parameters["error"].Size = 200;

                    using (SqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
                    {
                        rdr.Read();
                        rsp.codigo = Convert.ToInt32(cmd.Parameters["codigo"].Value.ToString());
                        rsp.mensaje = cmd.Parameters["mensaje"].Value.ToString();
                        rsp.error = cmd.Parameters["error"].Value.ToString();
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
