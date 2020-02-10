<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="gridViewdemo.aspx.cs" Inherits="demoForms.gridViewdemo" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/datatables/jquery.dataTables.min.js"></script>
    <script src="assets/js/datatables/dataTables.bootstrap4.min.js"></script>
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:GridView ID="GridView1" CssClass="gvv table table-bordered table-striped" runat="server"></asp:GridView>
     <script type="text/javascript">
         $(document).ready(function () {
             $(function () {
                 $('.gvv').DataTable({
                     "paging": true,
                     "lengthChange": true,
                     "searching": true,
                     "ordering": true,
                     "info": true,
                     "autoWidth": true
                     , "scrollX": true,
                     language: {
                         processing: "Cargando información",
                         search: "Filtrar por:",
                         lengthMenu: "Mostrar _MENU_ filas",
                         info: "Vizualización  _END_ de _TOTAL_ filas",
                         infoEmpty: "Vizualización del elemento 0 a 0 de 0 filas",
                         infoFiltered: "(Filtrado de _MAX_ filas en total)",
                         infoPostFix: "",
                         loadingRecords: "Cargando...",
                         zeroRecords: "No se logró encontrar ninguna coincidencia",
                         emptyTable: "Aucune donnée disponible dans le tableau",
                         paginate: {
                             first: "Primera",
                             previous: "Anterior",
                             next: "Siguiente",
                             last: "Ultima"
                         },
                         aria: {
                             sortAscending: ": active para ordenar la columna en orden ascendente",
                             sortDescending: ": active para ordenar la columna en orden descendente"
                         }
                     }
                 });
             });
         });
    </script>
</asp:Content>
