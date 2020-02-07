<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="buildForm2.aspx.cs" Inherits="demoForms.buildForm2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
    <!--ace code editor js-->
<script src="../assets/js/ace-editor/ace.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <input id="idFormulario" value="0" type="hidden" />
    <div class="page-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 id="tituloTab">Asignación</h5>
                            <span id="descripcionTab">Información de Formulario</span>
                        </div>
                        <div class="card-body">
                            <div id="regForm" class="form-wizard">
                                <p id="pIntro">Acontinuación podra crear diversos formularios para la utilización dentro de su organización</p>
                                
                                <div class="tab" id="registroForm">
                                    <div class="form-group">
                                        <label for="name">Titulo</label>
                                        <input type="text" class="form-control" id="txtTitulo" name="txtTitulo" placeholder="Titulo para el formulario" required="required">
                                        <span class="text-danger" id="ErrortxtTitulo" style="display: none">Debe de Ingresar un titulo para el formulario</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="lname">Descripción</label>
                                        <input type="text" class="form-control" id="txtDescripcion" name="txtDescripcion" placeholder="Descripción del formulario" required="required">
                                        <span class="text-danger" id="ErrortxtDescripcion" style="display: none">Debe de ingresar una descripción del funcionamiento del formulario</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Tipo de Formulario</label>
                                        <select class="form-control custom-select" id="ltaTipoFormulario" name="ltaTipoFormulario" required>
                                            <option value="">Seleccione uno</option>
                                            <option value="1">Formulario General</option>
                                            <option value="2">Formulario Especifico (Se debe de ingresar nombre de SP a Utilizar)</option>
                                        </select>
                                        <span class="text-danger" id="ErrorltaTipoFormulario" style="display: none">Debe de seleccionar un tipo de formulario</span>
                                    </div>
                                </div>
                                <div class="tab" id="tabBuscarSp">
                                    <div class="form-group m-t-15">
                                        <label for="exampleFormControlInput1">Nombre de Procedimiento almacenado</label>
                                        <input type="text" class="form-control" id="txtNombreSp" name="txtNombreSp" placeholder="Por favor ingrese el nombre del procedimiento almacenado" required="required">
                                        <span class="text-danger" id="ErrortxtNombreSp" style="display: none">Por favor ingrese el nombre del procedimiento almacenado</span>
                                        <span class="text-success" id="SuccesstxtNombreSp" style="display: none">El procedimiento almacenado  es válido</span>
                                    </div>
                                    <button class="btn btn-primary" type="button" id="btnBuscarInfoSp">Buscar</button>
                                </div>
                                <div class="tab" id="tabConstruccion">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Contrucción</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-row" id="divFormulario">
                                                        <div class="col-md-12 mb-6">
                                                            <label for="ltaTpCampo">Tipo de Campo</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaTpCampo" name="ltaTpCampo" required>
                                                                <option value="">Seleccione uno</option>
                                                                <option value="1">Caja de Texto</option>
                                                                <option value="2">Area de Texto</option>
                                                                <option value="3">Lista</option>
                                                                <option value="4">Modal de búsqueda</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divLtaTpDato" style="display: none">
                                                            <label for="ltaTpDato">Tipo de Dato</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaTpDato" name="ltaTpDato" required>
                                                                <option value="">Seleccione uno</option>
                                                                <option value="1">Texto</option>
                                                                <option value="2">Númerico</option>
                                                                <option value="3">Correo electrónico</option>
                                                                <option value="4">Fecha</option>
                                                                <option value="5">Hora</option>
                                                                <option value="6">Teléfono</option>
                                                                <option value="7">Password</option>
                                                                <option value="8">Url</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divLtaTpOrigen" style="display: none">
                                                            <label for="ltaTpOrigen">Tipo de Origen</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaTpOrigen" name="ltaTpOrigen" required>
                                                                <option value="">Seleccione uno</option>
                                                                <option value="1">Usuario</option>
                                                                <option value="2">Procedimiento Almacenado</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divTxtParametroSp" style="display: none">
                                                            <label for="ltaOrigen">Parametros de Procedimiento</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaParametroSp" name="ltaParametroSp" required>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divDataxOrigen" style="display: none">
                                                            <label for="ltaOrigen">Origenes disponibles</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaOrigen" name="ltaOrigen" required>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divCamposExistenes" style="display: none">
                                                            <label for="ltaCamposExistentes">Busqueda depende del campo</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaCamposExistentes" name="ltaCamposExistentes" required>
                                                            </select>
                                                        </div>


                                                        <div class="col-md-12 mb-6" id="divModalsDisponibles" style="display: none">
                                                            <label for="ltaModals">Modals disponibles</label>
                                                            <select class="form-control custom-select form-control-sm" id="ltaModals" name="ltaModals" required>
                                                            </select>
                                                        </div>



                                                        <div class="col-md-12 mb-6" id="divTamanio" style="display: none">
                                                            <label for="tamanioCampo">Tamaño</label>
                                                            <select class="form-control custom-select form-control-sm" id="tamanioCampo" name="tamanioCampo" required>
                                                                <option value="6">Medio</option>
                                                                <option value="12">Grande</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divIdCampo" style="display: none">
                                                            <label for="txtIdCampo">Código</label>
                                                            <input type="text" class="form-control form-control-sm" id="txtIdCampo" name="txtIdCampo" placeholder="Ingrese un id unico del campo en el formulario" required>
                                                            <br />
                                                        </div>



                                                        <div class="col-md-12 mb-6" id="divTituloCampo" style="display: none">
                                                            <label for="txtEtiqueta">Etiqueta</label>
                                                            <input type="text" class="form-control form-control-sm" id="txtEtiqueta" name="txtEtiqueta" placeholder="Texto de titulo de campo" required>
                                                            <br />
                                                        </div>



                                                        <div class="col-md-12 mb-6" id="divNumeroLineas" style="display: none">
                                                            <label for="txtNumeroLineas">Número de lineas</label>
                                                            <input type="number" class="form-control form-control-sm" id="txtNumeroLineas" name="txtNumeroLineas">
                                                            <br />
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divValor" style="display: none">
                                                            <label for="texto">Valor</label>
                                                            <div id="divInputValor">
                                                            </div>
                                                            <br />
                                                        </div>

                                                        <div class="form-group col-md-12 mb-6" id="divSoloLectura" style="display: none">
                                                            <div class="form-check">
                                                                <div class="checkbox p-0">
                                                                    <input id="checkSoloLectura" type="checkbox" class="form-check-input">
                                                                    <label class="form-check-label" for="checkSoloLectura">Campo de solo lectura</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group col-md-12 mb-6" id="divRequeried" style="display: none">
                                                            <div class="form-check">
                                                                <div class="checkbox p-0">
                                                                    <input id="checkRequeried" type="checkbox" class="form-check-input">
                                                                    <label class="form-check-label" for="checkRequeried">Campo obligatorio</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                          <div class="form-group col-md-12 mb-6" id="divVisible" style="display: none">
                                                            <div class="form-check">
                                                                <div class="checkbox p-0">
                                                                    <input id="checkVisible" type="checkbox" checked class="form-check-input">
                                                                    <label class="form-check-label" for="checkVisible">Campo Visible</label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <%--Texto--%>
                                                        <div class="col-md-6 mb-3" id="divMinlength" style="display: none">
                                                            <label for="txtMinlength">Mínimo número de caracteres</label>
                                                            <input type="number" class="form-control form-control-sm" id="txtMinlength" name="txtMinlength">
                                                        </div>

                                                        <div class="col-md-6 mb-3" id="divMaxlength" style="display: none">
                                                            <label for="txtMaxlength">Máximo número de caracteres</label>
                                                            <input type="number" class="form-control form-control-sm" id="txtMaxlength" name="txtMaxlength">
                                                        </div>



                                                        <%--Fechas--%>
                                                        <div class="col-md-6 mb-3" id="divFechaMin" style="display: none">
                                                            <label for="txtMinFecha">Fecha Mínima</label>
                                                            <input type="date" class="form-control form-control-sm" id="txtMinFecha" name="txtMinFecha">
                                                        </div>

                                                        <div class="col-md-6 mb-3" id="divFechaMax" style="display: none">
                                                            <label for="txtMaxFecha">Fecha Máxima</label>
                                                            <div id="divInputFechaMax">
                                                                <input type="date" class="form-control form-control-sm" id="txtMaxFecha" name="txtMaxFecha" disabled="disabled">
                                                            </div>
                                                        </div>


                                                        <%--Numeros--%>
                                                        <div class="col-md-4 mb-2" id="divNumericoMin" style="display: none">
                                                            <label for="txtMinNumber">Valor Mínimo</label>
                                                            <input type="number" class="form-control form-control-sm" id="txtMinNumber" name="txtMinNumber">
                                                        </div>

                                                        <div class="col-md-4 mb-2" id="divNumericoMax" style="display: none">
                                                            <label for="txtMaxNumber">Valor Máximo</label>
                                                            <div id="divInputMaxNumber">
                                                                <input type="number" class="form-control form-control-sm" id="txtMaxNumber" name="txtMaxNumber" disabled="disabled">
                                                            </div>
                                                        </div>


                                                        <div class="col-md-4 mb-2" id="divNumericoStep" style="display: none">
                                                            <label for="txtAumentarEn">Aumentar en</label>
                                                            <input type="number" class="form-control form-control-sm" id="txtAumentarEn" name="txtAumentarEn">
                                                        </div>




                                                        <div class="col-md-12 mb-6" id="divExpReg" style="display: none">
                                                            <label for="txtExpReg">Expresión regular</label>
                                                            <input type="text" class="form-control form-control-sm" id="txtExpReg" name="txtExpReg" placeholder="Ingrese una expresión regular">
                                                            <br />
                                                        </div>

                                                        <div class="col-md-12 mb-6" id="divPlaceholder" style="display: none">
                                                            <label for="txtPlaceholder">Texto de Ayuda</label>
                                                            <input type="text" class="form-control form-control-sm" id="txtPlaceholder" name="txtPlaceholder" placeholder="Ingrese un texto de ayuda al usuario">
                                                            <br />
                                                        </div>
                                                        
                                                          <div class="col-md-12 mb-6" id="divScript" style="display: none">
                                                            <label for="txtPlaceholder">JavaScript</label>
                                                              <%--<textarea class="form-control form-control-sm ace-editor" id="txtScript" name="txtScript" placeholder="Escriba el código JavaScript" rows="10"></textarea>--%>
                                                              <div class="ace-editor" id="txtScript"></div>
                                                            <br />
                                                        </div>

                                                        <div class="form-row" id="divInfoItems" style="display: none">
                                                            <div class="col-md-2 mb-2">
                                                                <label for="txtListValue">Valor</label>
                                                                <input type="text" class="form-control form-control-sm" id="txtListValue" name="txtListValue">
                                                            </div>
                                                            <div class="col-md-7 mb-4">
                                                                <label for="txtListText">Descripción</label>
                                                                <input type="text" class="form-control form-control-sm" id="txtListText" name="txtListText">
                                                            </div>
                                                            <div class="col-md-2 mb-1">
                                                                <label for="btnAgregarElemento">&nbsp&nbsp</label>
                                                                <button type="button" class="btn btn-info btn-sm" id="btnAgregarElemento" name="btnAgregarElemento">+</button>
                                                            </div>
                                                        </div>

                                                        <div class="table-responsive" id="divElementos" style="display: none">
                                                            <table class="table table-sm table-border-vertical ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Valor</th>
                                                                        <th>Texto</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="tbodyElementos">
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <button class="btn btn-primary" name="agregarCampo" id="agregarCampo" type="button" style="display: none">Agregar Campo</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5>Vista Previa</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div class="container-fluid">
                                                        <div class="page-header">
                                                            <div class="row">
                                                                <div class="col-lg-12" id="divTitulo">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="container-fluid">
                                                        <div class="row" id="divCampoFormulario">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-right btn-mb">
                                        <button type="button" class="btn btn-secondary" id="prevBtn" onclick="validarFormulario(-1)">Anterior</button>
                                        <button type="button" class="btn btn-primary" id="nextBtn" onclick="validarFormulario(0)">Empezar</button>
                                    </div>
                                </div>
                                <!-- Circles which indicates the steps of the form: -->
                                <div class="text-center" id="divSteps">
                                    <span class="step"></span>
                                    <span class="step"></span>
                                    <span class="step"></span>
                                </div>
                                <!-- Circles which indicates the steps of the form: -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends -->
    </div>
    <script src="assets/myJs/myjs.js"></script>
</asp:Content>
