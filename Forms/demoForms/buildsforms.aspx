<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="buildsforms.aspx.cs" Inherits="demoForms.buildsforms" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Container-fluid starts -->
    <div class="container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6">
                    <h3>FORMULARIO DE CONSTRUCCIÓN
                                <small>Podras crear los distintos </small>
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

                                <div class="col-md-12 mb-6" id="divDataxOrigen" style="display: none">
                                    <label for="ltaOrigen">Origenes disponibles</label>
                                    <select class="form-control custom-select form-control-sm" id="ltaOrigen" name="ltaOrigen" required>
                                        <option value="">Seleccione uno</option>
                                        <option value="1">Listar Municipio</option>
                                        <option value="3">Listar Departamentos</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-6" id="divCamposExistenes" style="display: none">
                                    <label for="ltaCamposExistentes">Campos Existentes</label>
                                    <select class="form-control custom-select form-control-sm" id="ltaCamposExistentes" name="ltaCamposExistentes" required>
                                        <option value="">Seleccione uno</option>
                                        <option value="1">Departamento de Residencia</option>
                                        <option value="3">Código de cliente</option>
                                    </select>
                                </div>


                                <div class="col-md-12 mb-6" id="divModalsDisponibles" style="display: none">
                                    <label for="ltaModals">Modals disponibles</label>
                                    <select class="form-control custom-select form-control-sm" id="ltaModals" name="ltaModals" required>
                                        <option value="">Seleccione uno</option>
                                        <option value="1">Busqueda de Médico</option>
                                        <option value="3">Busqueda de Empleado</option>
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
                            <button class="btn btn-primary" name="agregarCampo" id="agregarCampo" type="button" style="display: block">Agregar Campo</button>
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
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Registrar Formulario</button>
                            <input type="reset" class="btn btn-light" value="Cancelar">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Container-fluid Ends -->

    </div>
    <script>


        $(document).ready(function () {
            $("#ltaTpCampo").change(function () {
                $("#checkSoloLectura").prop("checked", false);
                $("#checkRequeried").prop("checked", false);
                inputPorTipoDato();
                let tipoCampo = $('#ltaTpCampo').val();
                if (tipoCampo == 1) {
                    $('#divLtaTpDato').show();
                    $('#ltaTpDato').val('');
                } else {
                    $('#divLtaTpDato').hide();
                }
                ocultarCampos();
                if (tipoCampo == 2) {
                    let tipoCampo2 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divMinlength|divMaxlength|divNumeroLineas|divExpReg|divPlaceholder';
                    let campos = tipoCampo2.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }

                if (tipoCampo == 3) {
                    let tipoCampo3 = 'divTamanio|divIdCampo|divTituloCampo|divRequeried|divLtaTpOrigen';
                    let campos = tipoCampo3.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }

                if (tipoCampo == 4) {
                    let tipoCampo3 = 'divTamanio|divIdCampo|divTituloCampo|divRequeried|divModalsDisponibles';
                    let campos = tipoCampo3.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }



            });

            $("#ltaTpDato").change(function () {
                divLimpiarCampos();
                ocultarCampos();
                mostrarCampo();
                inputPorTipoDato();

                $("#txtMaxFecha").prop("disabled", true);
                $("#txtMaxNumber").prop("disabled", true);
            });

            $("#ltaTpOrigen").change(function () {
                let tipoOrigen = $('#ltaTpOrigen').val();
                if (tipoOrigen == 1) {
                    $('#divDataxOrigen').hide();
                    $('#divCamposExistenes').hide();
                    $('#divInfoItems').show();
                    
                }  else if (tipoOrigen == 2) {
                    $('#divDataxOrigen').show();
                    $('#divElementos').hide();
                    $('#divInfoItems').hide();
                }  
            });

            $("#ltaOrigen").change(function () {
                let ltaOrigen = $('#ltaTpOrigen').val();
                $('#divCamposExistenes').show();

            });

            $('#checkSoloLectura').click(function () {
                $("#checkRequeried").prop("checked", false);
                let divSoloLectura = 'divMinlength|divMaxlength|divExpReg|divPlaceholder|divNumericoMax|divNumericoMin|divNumericoStep|divFechaMax|divFechaMin|divRequeried';
                let inputs = 'checkRequeried|txtMinlength|txtMaxlength|txtMinFecha|txtMaxFecha|txtMinNumber|txtMaxNumber|txtAumentarEn|txtExpReg|txtPlaceholder';
                let divs = divSoloLectura.split('|');
                let campos = inputs.split('|');
                if ($(this).is(':checked')) {
                    for (let i = 0; i < divs.length; i++) {
                        let div = divs[i];
                        $(`#${div}`).hide();
                    }

                    for (let i = 0; i < campos.length; i++) {
                        let id = campos[i];
                        $(`#${id}`).val('');
                    }

                } else {
                    let tipoDato = $('#ltaTpDato').val();
                    let tipoCampo = $('#ltaTpCampo').val();

                    if (tipoDato == 1 || tipoCampo == 2) {
                        let campoTpDato1 = "divMinlength|divMaxlength|divExpReg|divPlaceholder|divRequeried";
                        let campos = campoTpDato1.split("|");
                        for (let i = 0; i < campos.length; i++) {
                            let id = campos[i];
                            $(`#${id}`).show();
                        }
                    } else if (tipoDato == 2) {
                        let campoTpDato2 = "divExpReg|divPlaceholder|divRequeried|divNumericoMin|divNumericoMax|divNumericoStep";
                        let campos = campoTpDato2.split("|");
                        for (let i = 0; i < campos.length; i++) {
                            let id = campos[i];
                            $(`#${id}`).show();
                        }
                    } else if (tipoDato == 3 || tipoDato == 6 || tipoDato == 7 || tipoDato == 8) {
                        let campoTpDato4 = "divPlaceholder|divRequeried";
                        let campos = campoTpDato4.split("|");
                        for (let i = 0; i < campos.length; i++) {
                            let id = campos[i];
                            $(`#${id}`).show();
                        }
                    } else if (tipoDato == 4) {
                        let campoTpDato4 = "divRequeried|divFechaMin|divFechaMax";
                        let campos = campoTpDato4.split("|");
                        for (let i = 0; i < campos.length; i++) {
                            let id = campos[i];
                            $(`#${id}`).show();
                        }
                    }
                    else if (tipoDato == 5) {
                        let campoTpDato4 = "divRequeried";
                        let campos = campoTpDato4.split("|");
                        for (let i = 0; i < campos.length; i++) {
                            let id = campos[i];
                            $(`#${id}`).show();
                        }
                    }
                }
            });

            $("#txtMinFecha").change(function () {
                if ($("#txtMinFecha").val().trim().length == 10) {
                    let fechaMin = $("#txtMinFecha").val().trim();
                    let htmlFechaMax = `<input type="date" class="form-control form-control-sm" id="txtMaxFecha" name="txtMaxFecha" min="${fechaMin}">`;
                    $("#divInputFechaMax").html(htmlFechaMax);
                }
            });
            $("#txtMinNumber").change(function () {
                if ($("#txtMinNumber").val().trim().length > 0) {
                    let minNumber = $("#txtMinNumber").val().trim();
                    let htmlMaxNumber = `<input type="number" class="form-control form-control-sm" id="txtMaxNumber" name="txtMaxNumber" min="${minNumber}">`;
                    $("#divInputMaxNumber").html(htmlMaxNumber);
                }
            });

            $("#btnAgregarElemento").click(function (e) {
                let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                let idCampo = '';
                let valor = '';
                let texto = '';
                if ($("#txtIdCampo").val().trim().length > 0) {
                    idCampo = $("#txtIdCampo").val().trim();
                } else {

                }
                valor = $("#txtListValue").val().trim();
                if (idCampo.trim().length > 0) {
                    if (valor.trim().length > 0) {

                        if ($("#txtListText").val().trim().length > 0) {
                            texto = $("#txtListText").val().trim();

                            let arrayItemsCampo = new Array();
                            let infoCampo = JSON.stringify({
                                valor: valor,
                                text: texto,
                                selected: 0
                            });

                            arrayItemsCampo.push(infoCampo);



                            let campoExiste = campoEspeciales.find((items, index) => {
                                if (items.idCampo == idCampo) {
                                    let itemsActuales = new Array();
                                    itemsActuales = campoEspeciales[index].items;

                                    let existe = false;

                                    $.each(itemsActuales, function (i, item) {
                                        let data = JSON.parse(item);
                                        if (data.valor == valor) {
                                            existe = true;
                                            mostrarAlertaGeneral("Error", `Ya existe un elemento en la lista con el mismo valor (${valor})`, "danger");
                                        }
                                        if (data.text == texto) {
                                            existe = true;
                                            mostrarAlertaGeneral("Error", `Ya existe un elemento en la lista con la misma descripción (${texto})`, "danger");
                                        }
                                        if (existe) {
                                            return false;
                                        }
                                    });

                                    if (!existe) {
                                        itemsActuales.push(infoCampo);
                                        campoEspeciales[index].items = itemsActuales;
                                        localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));

                                    }
                                    return true;

                                }
                            });


                            if (!campoExiste) {
                                console.log("La data existe");
                                let campo = JSON.stringify({
                                    idCampo: idCampo,
                                    items: arrayItemsCampo
                                });
                                campoEspeciales.push(JSON.parse(campo));
                                localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
                            }
                            $("#txtListValue").val('');
                            $("#txtListText").val('');
                            pintarItemsLista();
                        } else {
                            mostrarAlertaGeneral("Error", "Debe de ingresar una descripción al elemento de la lista", "danger");
                        }

                    } else {
                        mostrarAlertaGeneral("Error", "Debe de ingresar un valor al elemento de la lista", "danger");
                    }
                } else {
                    mostrarAlertaGeneral("Error", "Antes de agregar un elemento debe de asignarle un id al campo", "danger");
                }
            });



        });

        function divLimpiarCampos() {
            $("#checkSoloLectura").prop("checked", false);
            $("#checkRequeried").prop("checked", false);
            let tipoCampo = $('#ltaTpCampo').val();
            let divPrincipal = document.getElementById('divFormulario');
            let controles = divPrincipal.getElementsByClassName("form-control");
            //Limpiar Campos
            for (let i = 0; i < controles.length; i++) {
                control = controles[i];
                let id = "#" + control.id;
                if (id != "#ltaTpCampo" && id != "#ltaTpDato") {
                    $(id).val('');
                }
            }
        }

        function ocultarCampos() {
            let stringCampos = 'divLtaTpOrigen|divDataxOrigen|divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divMinlength|divMaxlength|divFechaMin|divFechaMax|divNumericoMin|divNumericoMax|divNumericoStep|divNumeroLineas|divExpReg|divPlaceholder|divInfoItems|divElementos|divModalsDisponibles|divCamposExistenes';
            let campos = stringCampos.split('|');
            for (let i = 0; i < campos.length; i++) {
                let campo = campos[i];
                $(`#${campo}`).hide();
            }
        }

        function mostrarCampo() {
            let tipoCampo = $('#ltaTpCampo').val();
            let tipoDato = $('#ltaTpDato').val();
            if (tipoCampo == 1) {
                if (tipoDato == 1) {
                    let camposTipoDato1 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divMinlength|divMaxlength|divExpReg|divPlaceholder';
                    let campos = camposTipoDato1.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                } else if (tipoDato == 2) {
                    let camposTipoDato2 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divNumericoMin|divNumericoMax|divNumericoStep|divExpReg|divPlaceholder';
                    let campos = camposTipoDato2.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 3) {
                    let camposTipoDato3 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divPlaceholder';
                    let campos = camposTipoDato3.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 4) {
                    let camposTipoDato4 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divFechaMin|divFechaMax';
                    let campos = camposTipoDato4.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 5) {
                    let camposTipoDato5 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried';
                    let campos = camposTipoDato5.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 6) {
                    let camposTipoDato6 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divPlaceholder';
                    let campos = camposTipoDato6.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 7) {
                    let camposTipoDato7 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divPlaceholder';
                    let campos = camposTipoDato7.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
                else if (tipoDato == 8) {
                    let camposTipoDato8 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divPlaceholder';
                    let campos = camposTipoDato8.split('|');
                    for (let i = 0; i < campos.length; i++) {
                        let campo = campos[i];
                        $(`#${campo}`).show();
                    }
                }
            }


        }

        function inputPorTipoDato() {
            let tipoCampo = $('#ltaTpCampo').val();
            let htmlInput = '';
            if (tipoCampo == 1) {
                let tipoDato = $('#ltaTpDato').val();
                if (tipoDato == 1) {
                    htmlInput = `<input type="text" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese un valor para el campo">`
                } else if (tipoDato == 2) {
                    htmlInput = `<input type="number" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese número">`
                } else if (tipoDato == 3) {
                    htmlInput = `<input type="email" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese correo">`
                } else if (tipoDato == 4) {
                    htmlInput = `<input type="date" class="form-control form-control-sm" id="value" name="value">`
                } else if (tipoDato == 5) {
                    htmlInput = `<input type="time" class="form-control form-control-sm" id="value" name="value">`
                } else if (tipoDato == 6) {
                    htmlInput = `<input type="number" class="form-control form-control-sm" id="value" name="value" maxlength="10" placeholder="Ingrese el número de télefono">`
                } else if (tipoDato == 7) {
                    htmlInput = `<input type="password" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese contraseña">`
                } else if (tipoDato == 8) {
                    htmlInput = `<input type="url" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese url">`
                }
            } else if (tipoCampo == 2) {
                htmlInput = `<textarea id="value" name="value" placeholder="Ingrese un valor para el campo" rows="5" class="form-control form-control-sm"></textarea>`;
            }
            $("#divInputValor").html(htmlInput);
        }

        function pintarItemsLista() {
            if ($("#txtIdCampo").val().trim().length > 0) {
                idCampo = $("#txtIdCampo").val().trim();
            }
            let data = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
            let infoCampoActual = data.find(item => item.idCampo == idCampo);
            if (infoCampoActual) {
                console.log("Info Campo especifico", infoCampoActual);
                let htmlElemento = '';
                let contador = 0;
                $.each(infoCampoActual.items, function (i, item) {
                    let itemData = JSON.parse(item);
                    let value = itemData.valor;
                    let text = itemData.text;

                    htmlElemento += `<tr>
                                    <td>${value}</td>
                                    <td>${text}</td>
                                    <th scope="col"><a class="btn btn-danger btn-sm" onclick="eliminarItem('${infoCampoActual.idCampo}',${contador})"><span class="icon-trash"></span> </a></th>
                                    </tr>
                                    `;

                    contador++;
                });
                $("#divElementos").show();
                $("#tbodyElementos").html(htmlElemento);
            } else {
                mostrarAlertaGeneral("Error", "No se encontró el campo especificado", "danger");
            }
        }
    </script>
</asp:Content>
