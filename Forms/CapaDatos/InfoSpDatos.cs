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
                            rsp.codigo = 0;
                            rsp.valor = ds.Tables[0];
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
