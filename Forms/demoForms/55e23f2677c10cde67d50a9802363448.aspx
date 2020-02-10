<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="55e23f2677c10cde67d50a9802363448.aspx.cs" Inherits="demoForms._55e23f2677c10cde67d50a9802363448" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <script src="assets/js/jquery-3.2.1.min.js"></script>

    <!--Datatable js-->
    <script src="assets/js/datatables/jquery.dataTables.min.js"></script>
    <script src="assets/myJs/myjs2.js"></script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:HiddenField ID="hidIdFormulario" runat="server" Value="0" ClientIDMode="Static" />
    <div class="form-builder">
        <div class="row">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header" id="divTitulo">
                    </div>
                    <div class="card-body">
                        <div class="row" id="divCampoFormulario">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary" id="btnRegistrar" name="btnRegistrar">Registrar</button>
                        <input type="reset" class="btn btn-light" value="Limpiar">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade bd-example-modal-lg" id="modalBusqueda" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <input id="txtCodigoModal" type="hidden" value="0" />
        <input id="txtElementoJson" type="hidden" value="" />
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="tituLoModal"></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label id="TituloDivModal"></label>
                        <div class="input-group">
                            <input type="search" class="form-control" id="txtCriterioBusqueda" name="txtCriterioBusqueda">
                            <div class="input-group-append">
                                <a class="btn btn-info" id="btnBuscar" name="btnBuscar" onclick="getBusquedaModal()"><span class="fa fa-search"></span>Buscar</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap" id="tblModal">
                            <thead id="tbTitulo">
                            </thead>
                            <tbody id="tBody">
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/form-validation-custom.js" ></script>
  
</asp:Content>

