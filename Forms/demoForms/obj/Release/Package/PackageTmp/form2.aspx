<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="form2.aspx.cs" Inherits="demoForms.form2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-horizontal">
<fieldset>

<!-- Form Name -->
<h6 class="m-t-10">Nombre de Formulario</h6><hr>

<!-- Text input-->
<div class="form-group row">
  <label class="col-lg-12 control-label text-lg-left" for="nombre">Data</label>  
  <div class="col-lg-12">
  <input id="nombre" name="nombre" type="text" placeholder="placeholder" class="form-control btn-square input-md">
  <p class="help-block">Debe de ingresar los datos</p>  
  </div>
</div>

</fieldset>
</div>

</asp:Content>
