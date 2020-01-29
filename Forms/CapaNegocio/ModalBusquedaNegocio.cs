using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;
namespace CapaNegocio
{
    public class ModalBusquedaNegocio
    {
        ModalBusquedaDatos _ModalBusquedaDatos = new ModalBusquedaDatos();
        public RespuestaEntidad getModalsBusqueda()
        {
            return _ModalBusquedaDatos.getModalsBusqueda();
        }
        public RespuestaEntidad getInfoModal(int idModal)
        {
            return _ModalBusquedaDatos.getInfoModal(idModal);
        }
        public RespuestaEntidad getBusquedaModal(int idModal,string parametro)
        {
            return _ModalBusquedaDatos.getBusquedaModal(idModal,parametro);
        }
    }
}
