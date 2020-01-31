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
  public class demoGridView
    {
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public demoGridView()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }
        public RespuestaEntidad getFormularios()
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_todosLosForms";
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[0];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
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
                            rsp.mensaje = "Actualmente no existen modals de búsqueda";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "Actualmente no existen modals de búsqueda";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "Actualmente no existen modals de búsqueda";
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
