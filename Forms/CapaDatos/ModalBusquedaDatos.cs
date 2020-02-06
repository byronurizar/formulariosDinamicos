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
    public class ModalBusquedaDatos
    {
        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public ModalBusquedaDatos()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }
        public RespuestaEntidad getModalsBusqueda()
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_getModalBusqueda";
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
        public RespuestaEntidad getInfoModal(int idModal)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_getInfoModal";
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[0];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = idModal;
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
                            rsp.mensaje = "El modal de busqueda no existe por favor comuniquese con el administrador del sistema";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "El modal de busqueda no existe por favor comuniquese con el administrador del sistema";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "El modal de busqueda no existe por favor comuniquese con el administrador del sistema";
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
        public RespuestaEntidad getBusquedaModal(int idModal,string parametro)
        {
            RespuestaEntidad rsp = new RespuestaEntidad();
            string sqlConnString = _sConexion;
            string spName = "spr_getBusquedaModal";
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[0];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = idModal;
                storedParms[1].Value = parametro;
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
                            rsp.mensaje = "No se logró encontrar ninguna coincidencia con los criterios especificados";
                        }
                    }
                    else
                    {
                        rsp.codigo = -2;
                        rsp.mensaje = "No se logró encontrar ninguna coincidencia con los criterios especificados";
                    }
                }
                else
                {
                    rsp.codigo = -2;
                    rsp.mensaje = "No se logró encontrar ninguna coincidencia con los criterios especificados";
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
