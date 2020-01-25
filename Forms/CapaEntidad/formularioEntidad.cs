using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
  public  class FormularioEntidad
    {
        public InfoFormulario infoFormulario { get; set; }

    }
    public class Campos
    {
        public int idTipoCampo { get; set; }
        public int idTipoDato { get; set; }
        public int tabIndex { get; set; }
        public string etiqueta { get; set; }
        public string valor { get; set; }
        public string texto { get; set; }
        public string placeHolder { get; set; }
        public int longitudMinima { get; set; }
        public int longitudMaxima { get; set; }
        public string valMinimo { get; set; }
        public string valMax { get; set; }
        public string mascara { get; set; }
        public int esRequerido { get; set; }
        public object tipoOrigen { get; set; }
        public object valorLista { get; set; }
        public string elementoJson { get; set; }
        public int seleccionMultiple { get; set; }
        public string urlWebBuscar { get; set; }
        public string validacionScript { get; set; }
        public int visible { get; set; }
        public int soloLectura { get; set; }
        public object numeroLineas { get; set; }
        public int aumentarEn { get; set; }
        public string expresionRegular { get; set; }
        public string tamanioDiv { get; set; }
        public string elementoJsonPadre { get; set; }
    }

    public class InfoFormulario
    {
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public List<Campos> campos { get; set; }
    }
}
