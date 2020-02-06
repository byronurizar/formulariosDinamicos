using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
namespace CapaDatos
{
  public  class OrigenesListDatos
    {
        
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public OrigenesListDatos()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }
        public RespuestaEntidad getOrigenesList()
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_getOrigenesLista";
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
                            rsp.mensaje = "No existen registros de origenes para la lista";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "No existen registros de origenes para la lista";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "No existen registros de origenes para la lista";
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
        public RespuestaEntidad getItemsLista(ItemsListaEntidad item)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = item.nombreSp;
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[item.numeroParametros];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                if (storedParms.Length > 0)
                {
                    for (int i = 0; i < item.numeroParametros; i++)
                    {
                        storedParms[i].Value = item.parametros[i];
                    }
                }
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
                            rsp.mensaje = "No existen registros en el origen parametrizado en la lista";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "No existen registros en el origen parametrizado en la lista";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "No existen registros en el origen parametrizado en la lista";
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
