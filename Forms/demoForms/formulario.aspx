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
                                        <option value="8">Archivo</option>
                                        <option value="9">Password</option>
                                        <option value="10">Url</option>
                                        <option value="11">checkBox</option>
                                        <option value="12">Option</option>
                                        <option value="13">Formulario de búsqueda</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-6">
                                    <label for="idCampo">Id</label>
                                    <input type="text" class="form-control form-control-sm" id="idCampo" name="idCampo" placeholder="Ingrese un id unico del campo en el formulario" required>
                                    <br />
                                </div>

                                <div class="col-md-12 mb-6">
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

                                <div class="form-group col-md-12 mb-6">
                                    <div class="form-check">
                                        <div class="checkbox p-0">
                                            <input id="checkSoloLectura" type="checkbox" class="form-check-input">
                                            <label class="form-check-label" for="checkSoloLectura">Campo de solo lectura</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-md-12 mb-6" id="divRequeried">
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

                                <div class="form-row">
                                    <div class="col-md-2 mb-2">
                                        <label for="texto">Valor</label>
                                        <input type="text" class="form-control form-control-sm" id="listValue" name="listValue" required>
                                    </div>
                                    <div class="col-md-7 mb-4">
                                        <label for="texto">Descripción</label>
                                        <input type="text" class="form-control form-control-sm" id="listText" name="listText" required>
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
                                                <th style="width: inherit">Sel.</th>
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
                            <button class="btn btn-primary" name="agregarCampo" id="agregarCampo" type="submit">Agregar Campo</button>
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
                                <div class="form-group row" id="divCampoFormulario">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Container-fluid Ends -->

    </div>

    <script>
        $(document).ready(function () {

            $("#btnAgregarElemento").click(function (e) {
                let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                console.log("Data local", campoEspeciales);


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

                            let campo = JSON.stringify({
                                idCampo: idCampo,
                                items: arrayItemsCampo
                            });

                            let existeCampo = campoEspeciales.find(x => x.idCampo == idCampo);

                            if (existeCampo) {
                                existeCampo.item.push(arrayItemsCampo);
                            } else {
                                campoEspeciales.push(JSON.parse(campo));
                            }
                            localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
                            let data = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                            let infoCampoActual = data.find(item => item.idCampo == idCampo);
                            if (infoCampoActual) {
                                console.log("Info Campo especifico", infoCampoActual);
                                let htmlElemento = '';
                                $.each(infoCampoActual.items, function (i, item) {
                                    let itemData = JSON.parse(item);
                                    let value = itemData.valor;
                                    let text = itemData.text;
                                    let select = itemData.selected;

                                    let htmlCheck = '';
                                    if (select == 1) {
                                        htmlCheck = 'checked'
                                    }
                                    htmlElemento += `<tr>
                            <td style="width:inherit"><input class="radio radio-primary" id="radio" name="radio" type="radio"></td>
                            <td>${value}</td>
                            <td>${text}</td>
                            <th scope="col"><span class="fa fa-trash"></span></th>
                            </tr>
                            `;


                                });
                                $("#divElementos").show();
                                $("#tbodyElementos").html(htmlElemento);
                            } else {
                                mostrarAlertaGeneral("Error", "No se encontró el campo especificado", "danger");
                            }
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

                let infoFormulario = JSON.parse(localStorage.getItem("infoForms"));

                //let arrayCampos = new Array();
                //arrayCampos = infoFormulario.formularios[0].campos;
                //console.log("Data Campos", arrayCampos);
                let tipoCampo = 1;
                let posicion = 0;
                let titulo = '';
                let id = '';
                let value = '';
                let numeroLineas = 0;
                let readonly = 0;
                let maxlength = 0;
                let minlength = 0;
                let min = 0;
                let max = 0;
                let step = 1;
                let required = 1;
                let pattern = '';
                let placeholder = '';
                let mensajeError = '';
                tipoCampo = parseInt($("#tipoCampo").val());

                if ($("#texto").val().trim().length > 0) {
                    titulo = $("#texto").val().trim();
                } else {
                    mensajeError += '/n Ingresar titulo para campo'
                }


                if ($("#idCampo").val().trim().length > 0) {
                    id = $("#idCampo").val().trim();
                } else {
                    mensajeError += '/n Ingresar id único para campo'
                }

                if ($("#value").val().trim().length > 0) {
                    value = $("#value").val().trim();
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
                let infoCampo = JSON.stringify({
                    tipoCampo,
                    posicion: 0,
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
                    placeholder
                });

                infoFormulario.formularios[0].campos.push(JSON.parse(infoCampo));
                console.log("Información de formulario", infoFormulario);

                localStorage.setItem('infoForms', JSON.stringify(infoFormulario));

                pintarCampos().then(res => {
                    $("#divCampoFormulario").html(res);
                }).catch(error => {
                    console.log("Data error", error);
                });
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
                alert("Hola desde min number");
                if ($("#minNumber").val().trim().length > 0) {
                    let minNumber = $("#minNumber").val().trim();
                    let htmlMaxNumber = `<input type="number" class="form-control form-control-sm" id="maxNumber" name="maxNumber" min="${minNumber}">`;
                    $("#divInputMaxNumber").html(htmlMaxNumber);
                }
            });



            pintarCampos().then(res => {
                $("#divCampoFormulario").html(res);
            }).catch(error => {
                console.log("Data error", error);
            });
        });

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
            if (visible) {
                $("#divInputValor").html(htmlInput);
                $("#divValor").show();
            } else {
                $("#divInputValor").html('');
                $("#divValor").hide();
            }

        }
        function ocultarMostrarCampos() {
            let tipoCampo = $("#tipoCampo").val();
            if (tipoCampo == 0 || tipoCampo == 1) {
                $('#divMinlength').show();
                $('#divMaxlength').show();
                $('#divPattern').show();
                $('#divPlaceholder').show();
            } else {
                $('#divMinlength').hide();
                $('#divMaxlength').hide();
                $('#divPattern').hide();
                $('#divPlaceholder').hide();
            }

            if (tipoCampo == 1) {
                $('#divNumeroLineas').show();
            } else {
                $('#divNumeroLineas').hide();
            }

            if (tipoCampo == 5) {
                $('#divNumericoMax').show();
                $('#divNumericoMin').show();
                $('#divNumericoStep').show();
            } else {
                $('#divNumericoMax').hide();
                $('#divNumericoMin').hide();
                $('#divNumericoStep').hide()
            }

            if (tipoCampo == 2) {
                $('#divFechaMax').show();
                $('#divFechaMin').show();
            } else {
                $('#divFechaMax').hide();
                $('#divFechaMin').hide();
            }
        }

        function pintarCampos() {
            return new Promise((resolver, reject) => {

                try {
                    let infoFormulario;
                    infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];

                    console.log("Data Formulario", infoFormulario);


                    $.each(infoFormulario.formularios, function (i, infoForm) {
                        let htmlCampo = '';
                        let tituloFormulario = infoForm.nombre;
                        let descripcion = infoForm.descripcion;

                        let htmlTitulo = `<h3>${tituloFormulario}
                                <small>${descripcion}</small>
                                          </h3>`;

                        $("#divTitulo").html(htmlTitulo);

                        $.each(infoForm.campos, function (i, campo) {
                            let tipoCampo = campo.tipoCampo;
                            let posicion = campo.posicion;
                            let titulo = campo.titulo;
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

                            if (tipoCampo == 0) {
                                let htmlAdd = '';
                                if (readonly == 0) {
                                    if (maxlength > 0) {
                                        htmlAdd += ` maxlength=${maxlength}`
                                    }
                                    if (minlength < maxlength) {
                                        htmlAdd += ` minlength=${minlength}`
                                    }
                                    if (required == 1) {
                                        htmlAdd += ` required`
                                    }
                                } else {
                                    htmlAdd += ` readonly="readonly"`
                                }
                                htmlCampo += `
                        <div class="col-md-6 mb-3">
                        <label for="texto">${titulo}</label>
                        <input type="text" class="form-control" id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" pattern="${pattern}" ${htmlAdd}>
                        </div>`;
                            }

                        });
                        resolver(htmlCampo);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }
    </script>

</asp:Content>

