using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Web.Configuration;
namespace CapaDatos
{
  public  class sConexion
    {
        public string GetConex()
        {
            //string ConexionEncriptad = EncriptarConexion(ConfigurationManager.AppSettings["systemdba"]);
            //string llave = ConfigurationManager.AppSettings["iKey"];
             string sConexion = WebConfigurationManager.ConnectionStrings["miConex"].ToString();
            //string sConexion = DescripTexto(ConexionEncriptad, llave);
            if (object.ReferenceEquals(sConexion, string.Empty))
            {
                return string.Empty;
            }
            else
            {
                return sConexion;
            }
        }
        /*
        public static string EncriptarConexion(string conexionaEncriptar)
        {
            if (conexionaEncriptar.Equals(string.Empty))
            {
                return conexionaEncriptar;
            }
            protegerDatos dp = new protegerDatos(protegerDatos.Store.Machine);
            byte[] decryptedData = dp.Decrypt(Convert.FromBase64String(conexionaEncriptar), null);
            return Encoding.ASCII.GetString(decryptedData);
        }
        public static string DescripTexto(string textoOrigen, string llave)
        {
            try
            {
                byte[] keyArray;
                byte[] Array_a_Descifrar = Convert.FromBase64String(textoOrigen);
                MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF32Encoding.UTF32.GetBytes(llave));
                hashmd5.Clear();
                TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
                tdes.Key = keyArray;
                tdes.Mode = CipherMode.ECB;
                tdes.Padding = PaddingMode.PKCS7;
                ICryptoTransform cTransform = tdes.CreateDecryptor();
                byte[] resultArray = cTransform.TransformFinalBlock(Array_a_Descifrar, 0, Array_a_Descifrar.Length);
                tdes.Clear();
                textoOrigen = UTF32Encoding.UTF32.GetString(resultArray);

            }
            catch (Exception ex)
            {
                return textoOrigen + ex;
            }
            return textoOrigen;
        }
        */
    }
}
