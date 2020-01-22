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
    public class pruebaBD
    {

        sConexion _Conexionbd = new sConexion();
        string _sConexion = string.Empty;
        public pruebaBD()
        {
            _sConexion = _Conexionbd.GetConex().ToString();
        }

        public string RegistrarCaja(pruebaEntidad caja)
        {
            string resultado = string.Empty;
            string spName = string.Empty;
            try
            {
                string sqlConnString = _sConexion;
                spName = "spr_registrarCaja";

                SqlParameter[] storedParms = new SqlParameter[3];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = caja.Descripcion;
                storedParms[1].Value = caja.Estatus;
                storedParms[2].Value = caja.UsuarioCrea;

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
        public DataSet ListarCajas(pruebaEntidad caja)
        {
            string sqlConnString = _sConexion;
            string spName = "spr_listarCajas";
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] storedParms = new SqlParameter[3];
                storedParms = SqlHelperParameterCache.GetSpParameterSet(sqlConnString, spName);
                storedParms[0].Value = caja.Estatus;
                storedParms[1].Value = caja.CodigoUsuario;
                storedParms[2].Value = caja.CodigoEmpresa;
                ds = SqlHelper.ExecuteDataset(sqlConnString, System.Data.CommandType.StoredProcedure, spName, storedParms);
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            return ds;
        }
    }
}
