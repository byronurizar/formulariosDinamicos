<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="formulario.aspx.cs" Inherits="demoForms.formulario" %>

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

    <div class="form-builder" id="app">

        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>Contrucción</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="col-md-12 mb-6">
                                    <label for="tipoCampo">Tipo de Campo</label>
                                    <select class="custom-select" id="tipoCampo" name="tipoCampo" required>
                                        <option value="">Seleccione uno</option>
                                        <option value="0">Texto</option>
                                        <option value="1">Area de Texto</option>
                                        <option value="2">Fecha</option>
                                        <option value="3">Hora</option>
                                        <option value="4">Correo electrónico</option>
                                        <option value="5">Númerico</option>
                                        <option value="6">Teléfono</option>
                                        <option value="7">Lista</option>
                                        <%--<option value="8">Archivo</option>--%>
                                        <option value="9">Password</option>
                                        <option value="10">Url</option>
                                        <%--<option value="11">checkBox</option>
                                        <option value="12">Option</option>
                                        <option value="13">Formulario de búsqueda</option>--%>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-6" id="divTamanio" style="display: none">
                                    <label for="tamanioCampo">Tamaño</label>
                                    <select class="custom-select" id="tamanioCampo" name="tamanioCampo" required>
                                        <option value="6">Seleccione uno</option>
                                        <option value="6">Medio</option>
                                        <option value="12">Grande</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-6" id="divIdCampo" style="display: none">
                                    <label for="idCampo">Id</label>
                                    <input type="text" class="form-control form-control-sm" id="idCampo" name="idCampo" placeholder="Ingrese un id unico del campo en el formulario" required>
                                    <br />
                                </div>



                                <div class="col-md-12 mb-6" id="divTituloCampo" style="display: none">
                                    <label for="texto">Titulo</label>
                                    <input type="text" class="form-control form-control-sm" id="texto" name="texto" placeholder="Texto de titulo de campo" required>
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
                                    <label for="texto">Mínimo número de caracteres</label>
                                    <input type="number" class="form-control form-control-sm" id="minlength" name="minlength">
                                </div>

                                <div class="col-md-6 mb-3" id="divMaxlength" style="display: none">
                                    <label for="texto">Máximo número de caracteres</label>
                                    <input type="number" class="form-control form-control-sm" id="maxlength" name="maxlength">
                                </div>



                                <%--Fechas--%>
                                <div class="col-md-6 mb-3" id="divFechaMin" style="display: none">
                                    <label for="texto">Fecha Mínima</label>
                                    <input type="date" class="form-control form-control-sm" id="minFecha" name="minFecha">
                                </div>

                                <div class="col-md-6 mb-3" id="divFechaMax" style="display: none">
                                    <label for="texto">Fecha Máxima</label>
                                    <div id="divInputFechaMax">
                                        <input type="date" class="form-control form-control-sm" id="maxFecha" name="maxFecha" disabled="disabled">
                                    </div>
                                </div>


                                <%--Numeros--%>
                                <div class="col-md-4 mb-2" id="divNumericoMin" style="display: none">
                                    <label for="texto">Valor Mínimo</label>
                                    <input type="number" class="form-control form-control-sm" id="minNumber" name="minNumber">
                                </div>

                                <div class="col-md-4 mb-2" id="divNumericoMax" style="display: none">
                                    <label for="texto">Valor Máximo</label>
                                    <div id="divInputMaxNumber">
                                        <input type="number" class="form-control form-control-sm" id="maxNumber" name="maxNumber" disabled="disabled">
                                    </div>
                                </div>


                                <div class="col-md-4 mb-2" id="divNumericoStep" style="display: none">
                                    <label for="texto">Aumentar en</label>
                                    <input type="number" class="form-control form-control-sm" id="aumentarEn" name="aumentarEn">
                                </div>


                                <div class="col-md-12 mb-6" id="divNumeroLineas" style="display: none">
                                    <label for="texto">Número de lineas</label>
                                    <input type="number" class="form-control form-control-sm" id="numeroLineas" name="numeroLineas">
                                    <br />
                                </div>

                                <div class="col-md-12 mb-6" id="divPattern" style="display: none">
                                    <label for="texto">Expresión regular</label>
                                    <input type="text" class="form-control form-control-sm" id="pattern" name="pattern" placeholder="Ingrese una expresión regular">
                                    <br />
                                </div>

                                <div class="col-md-12 mb-6" id="divPlaceholder" style="display: none">
                                    <label for="texto">Texto de Ayuda</label>
                                    <input type="text" class="form-control form-control-sm" id="placeholder" name="placeholder" placeholder="Ingrese un texto de ayuda al usuario">
                                    <br />
                                </div>

                                <div class="form-row" id="divInfoItems" style="display: none">
                                    <div class="col-md-2 mb-2">
                                        <label for="texto">Valor</label>
                                        <input type="text" class="form-control form-control-sm" id="listValue" name="listValue">
                                    </div>
                                    <div class="col-md-7 mb-4">
                                        <label for="texto">Descripción</label>
                                        <input type="text" class="form-control form-control-sm" id="listText" name="listText">
                                    </div>
                                    <div class="col-md-2 mb-1">
                                        <label for="texto">&nbsp&nbsp</label>
                                        <button type="button" class="btn btn-info btn-sm" id="btnAgregarElemento">+</button>
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
        //    localStorage.removeItem("infoForms");

            $("#btnAgregarElemento").click(function (e) {
                let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                let idCampo = '';
                let valor = '';
                let texto = '';
                if ($("#idCampo").val().trim().length > 0) {
                    idCampo = $("#idCampo").val().trim();
                } else {

                }
                valor = $("#listValue").val().trim();
                if (idCampo.trim().length > 0) {
                    if (valor.trim().length > 0) {

                        if ($("#listText").val().trim().length > 0) {
                            texto = $("#listText").val().trim();

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
                            $("#listText").val('');
                            $("#listValue").val('');
                            pintarItems();


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
            $("#agregarCampo").click(function (e) {
                let infoFormulario = JSON.parse(localStorage.getItem('infoForms'));

                if (!infoFormulario) {
                    infoFormulario = { nombre: 'Prueba', descripcion: 'Descripcion de prueba', campos: [] }
                }

                let agregarCampo = false;
                let tipoCampo = 1;
                let tamanio = 6;
                let titulo = '';
                let id = '';
                let value = '';
                let numeroLineas = 0;
                let readonly = 0;
                let maxlength = 0;
                let minlength = 0;
                let min = '';
                let max = '';
                let step = 0;
                let required = 1;
                let pattern = '';
                let placeholder = '';
                let mensajeError = '';
                tipoCampo = parseInt($("#tipoCampo").val());
                tamanio = parseInt($("#tamanioCampo").val());

                if ($("#texto").val().trim().length > 0) {
                    titulo = $("#texto").val().trim();
                    agregarCampo = true;
                } else {
                    mensajeError += 'Ingresar titulo para campo '
                    agregarCampo = false;
                }


                if ($("#idCampo").val().trim().length > 0) {
                    id = $("#idCampo").val().trim();
                    agregarCampo = true;
                } else {
                    mensajeError += 'Ingresar id único para campo '
                    agregarCampo = false;
                }

                if (tipoCampo != 7) {
                    if ($("#value").val().trim().length > 0) {
                        value = $("#value").val().trim();
                    }
                }

                if (tipoCampo == 0 || tipoCampo == 1) {
                    if ($("#maxlength").val().trim().length > 0) {
                        maxlength = $("#maxlength").val().trim();
                    }
                    if ($("#minlength").val().trim().length > 0) {
                        minlength = $("#minlength").val().trim();
                    }
                }

                if (tipoCampo == 1) {
                    if ($("#numeroLineas").val().trim().length > 0) {
                        numeroLineas = parseInt($("#numeroLineas").val());
                    }
                }

                if (tipoCampo == 5) {
                    min = $("#minNumber").val().trim();
                    max = $("#maxNumber").val().trim()
                    step = $("#aumentarEn").val().trim();
                }

                if (tipoCampo == 2) {
                    min = $("#minFecha").val().trim();
                    max = $("#maxFecha").val().trim()
                }


                if ($("#pattern").val().trim().length > 0) {
                    pattern = $("#pattern").val().trim();
                }

                if ($("#checkSoloLectura").is(':checked')) {
                    readonly = 1;
                } else {
                    readonly = 0;
                }

                if ($("#checkRequeried").is(':checked')) {
                    required = 1;
                } else {
                    required = 0;
                }

                placeholder = $("#placeholder").val();



                if (agregarCampo) {
                    let existeCampo = false;

                    $.each(infoFormulario.campos, function (i, item) {
                        console.log("Campo formulario", item);
                        let itemActual = JSON.parse(item);
                        console.log("Campo itemActual", itemActual);
                        if (itemActual.id == id) {
                            existeCampo = true;
                            return false;
                        }
                    });

                    let itemsActuales = new Array();
                    let listaValida = true;
                    if (tipoCampo == 7) {
                        let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                        let campoExiste = campoEspeciales.find((items, index) => {
                            if (items.idCampo == id) {
                                itemsActuales = campoEspeciales[index].items;
                                campoEspeciales.splice(index, 1);
                                localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
                            }
                        });

                        if (!itemsActuales.length > 0) {
                            listaValida = false;
                            mostrarAlertaGeneral("Error", "Debe de ingresar elementos a la lista", "danger");
                        }
                    }
                    if (!existeCampo) {
                        if (listaValida) {
                            let infoCampo = JSON.stringify({
                                tipoCampo,
                                tamanio,
                                titulo,
                                id,
                                value,
                                numeroLineas,
                                readonly,
                                maxlength,
                                minlength,
                                min,
                                max,
                                step,
                                required,
                                pattern,
                                placeholder,
                                items: itemsActuales
                            });
                            infoFormulario.campos.push(infoCampo);
                            localStorage.setItem('infoForms', JSON.stringify(infoFormulario));

                            pintarCampos().then(res => {
                                $("#divCampoFormulario").html(res);
                            }).catch(error => {
                                console.log("Data error", error);
                            });
                        }
                    } else {
                        mostrarAlertaGeneral("Error", "El id del campo que intenta agregar ya existe por favor verifique", "danger");
                    }


                } else {
                    mostrarAlertaGeneral("Error", "Debe de completar los siguientes campos:" + mensajeError, "danger");
                }

            });

            $('#checkSoloLectura').click(function () {
                if ($(this).is(':checked')) {
                    $('#divMinlength').hide();
                    $('#divMaxlength').hide();
                    $('#divPattern').hide();
                    $('#divPlaceholder').hide();
                    $('#divNumericoMax').hide();
                    $('#divNumericoMin').hide();
                    $('#divNumericoStep').hide()
                    $('#divFechaMax').hide();
                    $('#divFechaMin').hide();
                    $('#divRequeried').hide();

                } else {
                    ocultarMostrarCampos();
                    $('#divRequeried').show();
                }
            });
            $("#tipoCampo").change(function () {
                $("#checkSoloLectura").prop("checked", false);
                $("#idCampo").val('');
                $("#texto").val('');
                $("#minlength").val('');
                $("#maxlength").val('');
                $("#minFecha").val('');
                $("#minNumber").val('');
                $("#maxNumber").val('');
                $("#aumentarEn").val('');
                $("#numeroLineas").val('');
                $("#pattern").val('');
                $("#placeholder").val('');
                $("#listValue").val('');
                $("#listText").val('');

                inputPorTipoCampo();
                ocultarMostrarCampos();
            });
            $("#minFecha").change(function () {
                if ($("#minFecha").val().trim().length == 10) {
                    let fechaMin = $("#minFecha").val().trim();
                    let htmlFechaMax = `<input type="date" class="form-control form-control-sm" id="maxFecha" name="maxFecha" min="${fechaMin}">`;
                    $("#divInputFechaMax").html(htmlFechaMax);
                }
            });
            $("#minNumber").change(function () {
                if ($("#minNumber").val().trim().length > 0) {
                    let minNumber = $("#minNumber").val().trim();
                    let htmlMaxNumber = `<input type="number" class="form-control form-control-sm" id="maxNumber" name="maxNumber" min="${minNumber}">`;
                    $("#divInputMaxNumber").html(htmlMaxNumber);
                }
            });

            //pintarCampos().then(res => {
            //    $("#divCampoFormulario").html(res);
            //}).catch(error => {
            //    console.log("Data error", error);
            //});
        });
        function pintarItems() {
            if ($("#idCampo").val().trim().length > 0) {
                idCampo = $("#idCampo").val().trim();
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
        function eliminarItem(idCampo, indexDelete) {
            let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];

            let campoExiste = campoEspeciales.find((items, index) => {
                if (items.idCampo == idCampo) {
                    let itemsActuales = new Array();
                    itemsActuales = campoEspeciales[index].items;
                    console.log("Item econtrado", itemsActuales);
                    itemsActuales.splice(indexDelete, 1);
                    campoEspeciales[index].items = itemsActuales;
                    localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
                    pintarItems();
                }
            });
        }
        function inputPorTipoCampo() {
            let tipoCampo = $("#tipoCampo").val();
            let visible = false;
            let htmlInput = '';
            if (tipoCampo == 0) {
                htmlInput = `<input type="text" class="form-control form-control-sm" id="value" name="value" placeholder="Ingrese un valor para el campo">`
                visible = true;
            } else if (tipoCampo == 1) {
                htmlInput = `<textarea id="value" name="value" placeholder="Ingrese un valor para el campo" rows="5" class="form-control form-control-sm"></textarea>`;
                visible = true;
            } else if (tipoCampo == 2) {
                htmlInput = `<input type="date" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            } else if (tipoCampo == 3) {
                htmlInput = `<input type="time" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            } else if (tipoCampo == 4) {
                htmlInput = `<input type="email" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            } else if (tipoCampo == 5 || tipoCampo == 6) {
                htmlInput = `<input type="number" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            } else if (tipoCampo == 9) {
                htmlInput = `<input type="password" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            }
            else if (tipoCampo == 10) {
                htmlInput = `<input type="url" class="form-control form-control-sm" id="value" name="value">`
                visible = true;
            }

            if (visible) {
                $("#divInputValor").html(htmlInput);
            } else {
                $("#divInputValor").html('');
            }

        }
        function ocultarMostrarCampos() {
            let tipoCampo = $('#tipoCampo').val();
            if (tipoCampo) {
                $('#divIdCampo').show();
                $('#divTituloCampo').show();
                $('#divSoloLectura').show();
                $('#divRequeried').show();
                $('#agregarCampo').show();
                $("#divTamanio").show();
                $("#divSoloLectura").show();

            } else {
                $('#divIdCampo').hide();
                $('#divTituloCampo').hide();
                $('#divSoloLectura').hide();
                $('#divRequeried').hide();
                $('#agregarCampo').hide();
                $("#divTamanio").hide();
                $("#divSoloLectura").hide();
            }

            if (tipoCampo == 0 || tipoCampo == 1) {
                $('#divMinlength').show();
                $('#divMaxlength').show();
                $('#divPattern').show();
                $('#divPlaceholder').show();
                $("#divValor").show();
            } else {
                $('#divMinlength').hide();
                $('#divMaxlength').hide();
                $('#divPattern').hide();
                $('#divPlaceholder').hide();
            }

            if (tipoCampo == 1) {
                $('#divNumeroLineas').show();
                $("#divValor").show();
            } else {
                $('#divNumeroLineas').hide();
            }

            if (tipoCampo == 5) {
                $('#divNumericoMax').show();
                $('#divNumericoMin').show();
                $('#divNumericoStep').show();
                $("#divValor").show();
            } else {
                $('#divNumericoMax').hide();
                $('#divNumericoMin').hide();
                $('#divNumericoStep').hide()
            }

            if (tipoCampo == 2) {
                $('#divFechaMax').show();
                $('#divFechaMin').show();
                $("#divValor").show();
            } else {
                $('#divFechaMax').hide();
                $('#divFechaMin').hide();
            }

            if (tipoCampo == 7) {
                $("#divValor").hide();
                $('#divInfoItems').show();
                $("#divSoloLectura").hide();

            } else {
                $('#divInfoItems').hide();
                $("#divElementos").hide();
            }

            if (tipoCampo == 10) {
                $("#divValor").show();
            }
        }
        function pintarCampos() {
            return new Promise((resolver, reject) => {

                try {
                    let infoFormulario;
                    infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];

                    console.log("Data Formulario", infoFormulario);

                    let tituloFormulario = infoFormulario.nombre;
                    let descripcion = infoFormulario.descripcion;

                    let htmlTitulo = `<h3>${tituloFormulario}
                                <small>${descripcion}</small>
                                          </h3>`;

                    $("#divTitulo").html(htmlTitulo);


                    let htmlCampo = '';
                    let indexCampo = 0;
                    $.each(infoFormulario.campos, function (i, itemCampo) {

                        let campo = JSON.parse(itemCampo);
                        let tipoCampo = campo.tipoCampo;
                        let tamanio = campo.tamanio;
                        let titulo = campo.titulo;
                        let numeroLineas = campo.numeroLineas;
                        let id = campo.id;
                        let value = campo.value;
                        let readonly = campo.readonly;
                        let maxlength = campo.maxlength;
                        let minlength = campo.minlength;
                        let min = campo.min;
                        let max = campo.max;
                        let step = campo.step;
                        let required = campo.required;
                        let pattern = campo.pattern;
                        let placeholder = campo.placeholder;
                        let htmlTamanio = "col-md-6 mb-3";

                        if (tamanio == 12) {
                            htmlTamanio = "col-md-12 mb-6";
                        }

                        let htmlAdd = '';
                        if (required == 1) {
                            htmlAdd += ` required`
                        }
                        if (readonly > 0) {
                            htmlAdd += ` readonly="readonly"`
                        }

                        if (tipoCampo == 0 || tipoCampo == 1) {

                            if (readonly == 0) {
                                if (maxlength > 0) {
                                    htmlAdd += ` maxlength=${maxlength}`
                                }
                                if (minlength < maxlength) {
                                    htmlAdd += ` minlength=${minlength}`
                                }

                            }

                            if (tipoCampo == 0) {
                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="text" class="form-control" id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" pattern="${pattern}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                            } else if (tipoCampo == 1) {

                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <textarea id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" pattern="${pattern}" ${htmlAdd} rows="${numeroLineas}" class="form-control"></textarea>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                            }



                        }
                        else if (tipoCampo == 2 || tipoCampo == 5) {
                            if (readonly == 0) {
                                if (min.trim().length > 0) {
                                    htmlAdd += `min="${min}"`;
                                }
                                if (max.trim().length > 0) {
                                    htmlAdd += `max="${max}"`;
                                }
                                if (step > 0) {
                                    htmlAdd += `step="${step}"`;
                                }
                            }

                            if (tipoCampo == 2) {
                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="date" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                            }
                            if (tipoCampo == 5) {
                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="number" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                            }
                        }

                        if (tipoCampo == 3) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="time" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                        }
                        if (tipoCampo == 4) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="email" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                        }

                        if (tipoCampo == 6) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="number" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                        }
                        if (tipoCampo == 9) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="password" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                        }

                        if (tipoCampo == 10) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="url" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                                </div>
                                `;
                        }

                        if (tipoCampo == 7) {
                            let itemsLista = campo.items;
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                  <select class="custom-select" id="${id}" name="${id}" ${htmlAdd}>
                                        <option value="">Seleccione</option>
                                `;

                            $.each(itemsLista, function (i, item) {
                                let data = JSON.parse(item);
                                htmlCampo += `
                                        <option value="${data.valor}">${data.text}</option>
                                `;
                            });

                            htmlCampo += `</select>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a></div>`;
                        }

                        indexCampo++;
                    });
                    resolver(htmlCampo);

                } catch (error) {
                    reject(error);
                }
            });
        }

        function subirCampo(indexCampo) {
            if (indexCampo > 0) {
                let infoFormulario;
                infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];
                        let campos = infoFormulario.campos;

                        let item1 = campos[indexCampo];
                        let item2 = campos[indexCampo - 1];

                        infoFormulario.campos[indexCampo] = item2;
                        infoFormulario.campos[indexCampo - 1] = item1;

                        localStorage.setItem('infoForms', JSON.stringify(infoFormulario));

                        pintarCampos().then(res => {
                            $("#divCampoFormulario").html(res);
                        }).catch(error => {
                            console.log("Data error", error);
                        });
            } else {
                mostrarAlertaGeneral("Error", "El campo esta en la primera posición", "danger");
            }
        }

        function eliminarCampo(indexCampo) {
            let infoFormulario;
            infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];
                    infoFormulario.campos.splice(indexCampo, 1);

                    localStorage.setItem('infoForms', JSON.stringify(infoFormulario));
                    pintarCampos().then(res => {
                        $("#divCampoFormulario").html(res);
                    }).catch(error => {
                        console.log("Data error", error);
                    });
        }

    </script>

</asp:Content>

