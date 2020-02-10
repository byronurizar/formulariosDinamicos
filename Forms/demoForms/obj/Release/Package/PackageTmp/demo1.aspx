<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="demo1.aspx.cs" Inherits="demoForms.demo1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!-- Container-fluid starts -->
    <div class="container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6">
                    <h3>FORMULARIO DE CONSTRUCCIÓN
                                <small>Podras crear los distintos formularios para los diferentes visitadores médicos</small>
                    </h3>
                </div>
                <div class="col-lg-6">
                    <ol class="breadcrumb pull-right">
                        <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
                        <li class="breadcrumb-item">Construcción</li>
                        <li class="breadcrumb-item active">Formulario</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Container-fluid Ends -->

    <div class="form-builder">

        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Contrucción</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">Tipo de Campo</label>
                                    <select class="custom-select" required>
                                        <option value="">Seleccione uno</option>
                                        <option value="0">text</option>
                                        <option value="0">Area de Texto</option>
                                        <option value="1">Date</option>
                                        <option value="2">Time</option>
                                        <option value="3">email</option>
                                        <option value="4">file</option>
                                        <option value="7">number</option>
                                        <option value="8">password</option>
                                        <option value="9">radio</option>
                                        <option value="10">url</option>
                                        <option value="11">tel</option>
                                        <option value="13">search</option>
                                        <option value="14">Checkbox</option>
                                    </select>
                                    <div class="invalid-feedback">Example invalid custom select feedback</div>
                                </div>

                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">text</label>
                                    <input type="text" class="form-control" id="nombreCiudada" placeholder="City" maxlength="10" minlength="5" readonly="readonly" value="Texto de solo lectura" pattern="" required>
                                    <span id="nombre4HelpBlock" class="form-text text-muted">INgrese su nombre
                                    </span>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">date</label>
                                    <input type="date" class="form-control" max="2020-10-10" min="2000-01-02" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">date</label>
                                    <input type="date" class="form-control" max="2020-10-10" min="2000-01-02" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">time</label>
                                    <input type="time" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">email</label>
                                    <input type="email" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">file</label>
                                    <input type="file" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">number</label>
                                    <input type="number" class="form-control" id="nombreCiudada" placeholder="City" min="0" max="100" step="10" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">password</label>
                                    <input type="password" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">radio</label>
                                    <input type="radio" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">url</label>
                                    <input type="url" class="form-control" id="nombreCiudada" placeholder="City" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="nombreCiudada">tel</label>
                                    <input type="tel" class="form-control" id="nombreCiudada" placeholder="City" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                    <div class="invalid-tooltip">
                                        Selecciones una ciudada
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="validationTooltip04">search</label>
                                    <input type="search" class="form-control" id="validationTooltip04" placeholder="State" required>
                                    <div class="invalid-tooltip">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div class="col-md-12 mb-6">
                                    <label for="validationTooltip05">checkbox</label>
                                    <input type="checkbox" class="form-control" id="validationTooltip05" placeholder="Zip" required>
                                    <div class="invalid-tooltip">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                   <div class="col-md-12 mb-6">
                                    <label for="validationTooltip05">Text Area</label>
                                    <textarea id="textArea" name="textArea" rows="5" class="form-control"></textarea>
                                    <div class="invalid-tooltip">
                                        Please provide a valid zip.
                                    </div>
                                </div>

                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Vista Previa</h5>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends -->

    </div>
</asp:Content>
