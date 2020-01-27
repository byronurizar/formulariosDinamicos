<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="miform.aspx.cs" Inherits="demoForms.miform" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6" id="divTitulo">
                </div>
                <div class="col-lg-6">
                    <ol class="breadcrumb pull-right">
                        <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
                        <li class="breadcrumb-item">Formulario</li>
                        <li class="breadcrumb-item active">1039</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="form-builder">
        <div class="row">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h5>INGRESO DE INFORMACIÓN</h5>
                    </div>
                    <div class="card-body">
                        <div class="row" id="divCampoFormulario">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary" id="btnRegistrar" name="btnRegistrar">Registrar</button>
                        <input type="reset" class="btn btn-light" value="Cancelar">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>

    </script>
</asp:Content>
