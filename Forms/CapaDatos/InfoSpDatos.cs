using CapaEntidad;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
  public  class InfoSpDatos
    {
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public InfoSpDatos()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }
        public RespuestaEntidad getParametrosSp(string nombreSp)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "sp_procedure_params_100_managed";
            DataSet ds = new DataSet();

            DataTable dtParametros = new DataTable();
            dtParametros.Columns.Add("PARAMETER_NAME", typeof(string));
            dtParametros.Columns.Add("MANAGED_DATA_TYPE", typeof(string));
            dtParametros.Columns.Add("CHARACTER_MAXIMUM_LENGTH", typeof(string));
            dtParametros.Columns.Add("NUMERIC_PRECISION", typeof(string));
            dtParametros.Columns.Add("TYPE_NAME", typeof(string));
            try
            {
                SqlParameter[] storedParms = new SqlParameter[0];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value =nombreSp;
                ds = SqlHelper.ExecuteDataset(sqlConnString, System.Data.CommandType.StoredProcedure, spName, storedParms);
                if (ds != null)
                {
                    if (ds.Tables.Count > 0)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                           
                            foreach (DataRow item in ds.Tables[0].Rows)
                            {
                                int tipoParametros =Convert.ToInt32(item["PARAMETER_TYPE"].ToString());
                                if (tipoParametros == 1)
                                {
                                    DataRow nuevaFila = dtParametros.NewRow();
                                    nuevaFila["PARAMETER_NAME"] =item["PARAMETER_NAME"].ToString();
                                    nuevaFila["MANAGED_DATA_TYPE"] = item["MANAGED_DATA_TYPE"].ToString();
                                    nuevaFila["CHARACTER_MAXIMUM_LENGTH"] = item["CHARACTER_MAXIMUM_LENGTH"].ToString();
                                    nuevaFila["NUMERIC_PRECISION"] = item["NUMERIC_PRECISION"].ToString();
                                    nuevaFila["TYPE_NAME"] = item["TYPE_NAME"].ToString();
                                    dtParametros.Rows.Add(nuevaFila);
                                }
                            }
                            if (dtParametros.Rows.Count > 0)
                            {
                                rsp.codigo = 0;
                                rsp.valor = dtParametros;
                            }
                            else
                            {
                                rsp.codigo = -1;
                                rsp.valor = null;
                                rsp.mensaje = "El Procedimiento almacenado " +nombreSp +" no cuenta con ningun parametro de entrada";
                            }
                            
                        }
                        else
                        {
                            rsp.codigo = -2;
                            rsp.mensaje = "No se encontro";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "No se encontro";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "No se encontro";
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
    }
}
