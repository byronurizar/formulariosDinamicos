
localStorage.clear();
function listarParametroSp() {
    $("#divTxtParametroSp").show();
    $("#ltaParametroSp").show();
    let nombreSp = $("#txtNombreSp").val();
    let camposSp = JSON.parse(localStorage.getItem(nombreSp));

    let htmlOptions = '';
    $('#ltaParametroSp').empty();
    if (camposSp.length > 0) {
        htmlOptions = `<option value="">Seleccione</option>`;
        $.each(camposSp, function (i, item) {
            console.log("Campo", item);
            htmlOptions += `<option value="${item.PARAMETER_NAME}">${item.PARAMETER_NAME}</option>`;
        });
        $('#ltaParametroSp').prepend(htmlOptions);
    }
    else {
        htmlOptions = `<option value="">No existen registros</option>`;
        $('#ltaParametroSp').prepend(htmlOptions);
    }


}
$(document).ready(function () {
    pintarCampos().then(res => {
        $("#divCampoFormulario").html(res);
    }).catch(error => {
        console.log("Data error", error);
    });

    $("#ltaTpCampo").change(function () {
        let tipoFormulario = $("#ltaTipoFormulario").val();
        if (tipoFormulario == 2) {
            listarParametroSp();
        }

        $("#checkSoloLectura").prop("checked", false);
        $("#checkRequeried").prop("checked", false);
        $("#agregarCampo").show();
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
            divLimpiarCampos();
        }

        if (tipoCampo == 3) {
            let tipoCampo3 = 'divTamanio|divIdCampo|divTituloCampo|divRequeried|divLtaTpOrigen';
            let campos = tipoCampo3.split('|');
            for (let i = 0; i < campos.length; i++) {
                let campo = campos[i];
                $(`#${campo}`).show();
            }
            divLimpiarCampos();
        }

        if (tipoCampo == 4) {
            let tipoCampo3 = 'divTamanio|divIdCampo|divTituloCampo|divRequeried|divModalsDisponibles';
            let campos = tipoCampo3.split('|');
            for (let i = 0; i < campos.length; i++) {
                let campo = campos[i];
                $(`#${campo}`).show();
            }
            divLimpiarCampos();
            getModalsBusqueda();
        }
    });

    $("#txtIdCampo").keyup(function () {
        $(this).val($(this).val().trim());
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

        } else if (tipoOrigen == 2) {
            getOrigenesList();
            $('#divDataxOrigen').show();
            $('#divElementos').hide();
            $('#divInfoItems').hide();
        }
    });

    $("#ltaOrigen").change(function () {
        let ltaOrigen = $('#ltaOrigen').val();
        mostrarCamposPorOrigen(ltaOrigen);
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
                    let infoCampo = {
                        valor: valor,
                        text: texto,
                        selected: 0
                    };

                    arrayItemsCampo.push(infoCampo);



                    let campoExiste = campoEspeciales.find((items, index) => {
                        if (items.idCampo == idCampo) {
                            let itemsActuales = new Array();
                            itemsActuales = campoEspeciales[index].items;

                            let existe = false;

                            $.each(itemsActuales, function (i, data) {
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
                        let campo = {
                            idCampo: idCampo,
                            items: arrayItemsCampo
                        };
                        campoEspeciales.push(campo);
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

    $("#agregarCampo").click(function () {
        agregarCampo();
        pintarCampos().then(res => {
            $("#divCampoFormulario").html(res);
        }).catch(error => {
            console.log("Data error", error);
        });
    });
    $("#btnRegistrarForm").click(function () {
        registrarFormulario();
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
        if (id != "#ltaTpCampo" && id != "#ltaTpDato" && id != "#tamanioCampo") {
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
            let camposTipoDato2 = 'divTamanio|divIdCampo|divTituloCampo|divValor|divSoloLectura|divRequeried|divNumericoMin|divNumericoMax|divNumericoStep|divPlaceholder';
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
        $.each(infoCampoActual.items, function (i, itemData) {
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
            itemsActuales.splice(indexDelete, 1);
            campoEspeciales[index].items = itemsActuales;
            localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
            pintarItemsLista();
        }
    });
}
function getOrigenesList() {
    let htmlOptions = '';
    $('#ltaOrigen').empty();
    getJson(JSON.stringify({}), "buildForm2.aspx/getOrigenesList").then(response => {
        if (response.codigo == 0) {
            htmlOptions = `<option value="">Seleccione</option>`;
            $.each(response.valor, function (i, item) {
                htmlOptions += `<option value="${item.idOrigen}">${item.nombre}</option>`;
            });
            $('#ltaOrigen').prepend(htmlOptions);
            localStorage.setItem("OrigenesLista", JSON.stringify(response.valor));
        } else {
            htmlOptions = `<option value="">No existen registros</option>`;
            $('#ltaOrigen').prepend(htmlOptions);
            swal("Alerta", response.mensaje, "error");
        }
    }).catch(error => {
        swal("Alerta", error, "warning");
    });


}
function getModalsBusqueda() {
    let htmlOptions = '';
    $('#ltaModals').empty();
    getJson(JSON.stringify({}), "buildForm2.aspx/getModalsBusqueda").then(response => {
        if (response.codigo == 0) {
            htmlOptions = `<option value="">Seleccione</option>`;
            $.each(response.valor, function (i, item) {
                htmlOptions += `<option value="${item.idModal}">${item.nombre}</option>`;
            });
            $('#ltaModals').prepend(htmlOptions);
        } else {
            htmlOptions = `<option value="">No existen registros</option>`;
            $('#ltaModals').prepend(htmlOptions);
            swal("Alerta", response.mensaje, "error");
        }
    }).catch(error => {
        swal("Alerta", error, "warning");
    });
}
function mostrarCamposPorOrigen(idOrigen) {
    let origenesLista = JSON.parse(localStorage.getItem("OrigenesLista"));
    let origen = origenesLista.find(x => x.idOrigen == idOrigen);
    if (origen) {
        if (origen.numeroParametros == 1) {
            let htmlOptions = '';
            $('#ltaCamposExistentes').empty();
            let infoFormulario;
            infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];
            $.each(infoFormulario.campos, function (i, campo) {
                htmlOptions += `<option value="${campo.elementoJson}">${campo.etiqueta}</option>`;

            });
            $('#ltaCamposExistentes').prepend(htmlOptions);
            $('#divCamposExistenes').show();
        }
    } else {
        $('#ltaCamposExistentes').empty();
        $('#divCamposExistenes').hide();
    }
}
var getJson = (data, metodo) => {
    return new Promise(function (resolver, rechazar) {
        try {
            $.ajax({
                url: metodo,
                async: false,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ stringRequest: data }),
                success: function (myData) {
                    let dataResponse = myData.d;
                    try {
                        resolver(JSON.parse(dataResponse));
                    } catch (err) {
                        rechazar(JSON.stringify(err));
                        swal("ERROR", "El objeto no es un json válido", "error");
                    }
                }
            }).fail(function (xhr, textStatus, errorThrown) {
                swal("Alerta", "No se logró comunicación con el servidor, por favor intente nuevamente", "warning");
                rechazar(JSON.stringify(xhr));
            });
        } catch (error) {
            swal("ERROR", "Ocurrió un error al intentar realizar la petición", "error");
            rechazar(JSON.stringify(error));
        }
    });
}
function agregarCampo() {
    let agregarCampo = true;
    let tipoFormulario = $("#ltaTipoFormulario").val();

    let infoFormulario = JSON.parse(localStorage.getItem('infoForms'));
    let tituloFormulario = '';
    let descripcion = '';
    tituloFormulario = $("#txtTitulo").val();
    descripcion = $("#txtDescripcion").val();
    let spUtilizar = '';
    if (tipoFormulario == 2) {
        spUtilizar = $("#txtNombreSp").val();
    }
    if (!infoFormulario) {
        infoFormulario = { titulo: tituloFormulario, descripcion: descripcion, nombreSp: spUtilizar, idTipoFormulario: tipoFormulario, campos: [] }
    }
    let idTipoCampo = 0;
    let idTipoDato = 0;
    let tabIndex = 0;
    let etiqueta = "";
    let valor = "";
    let texto = "";
    let placeHolder = "";
    let longitudMinima = 0;
    let longitudMaxima = 0;
    let valMinimo = 0;
    let valMax = 0;
    let mascara = "";
    let esRequerido = 0;
    let tipoOrigen = 0;
    let valorLista = "";
    let elementoJson = "";
    let seleccionMultiple = 0;
    let urlWebBuscar = "";
    let validacionScript = "";
    let visible = 1;
    let soloLectura = 0;
    let numeroLineas = 0;
    let aumentarEn = 0;
    let expresionRegular = "";
    let tamanioDiv = 0;
    let elementoJsonPadre = "";
    let parametroSp = '';
    let itemsCampo = new Array();
    let existeParametroSp = false;

    idTipoCampo = parseInt($("#ltaTpCampo").val());
    elementoJson = $("#txtIdCampo").val().trim();

    if (tipoFormulario == 2) {
        parametroSp = $("#ltaParametroSp").val();
    }


    if (elementoJson.trim().length > 0) {
        let existeCampo = false;
        $.each(infoFormulario.campos, function (i, item) {
            if (item.elementoJson == elementoJson) {
                existeCampo = true;
                return false;
            }
            if (tipoFormulario == 2) {
                if (item.parametroSp == parametroSp) {
                    existeParametroSp = true;
                    return false;
                }
            }
        });

        if (!existeCampo && !existeParametroSp) {
            etiqueta = $("#txtEtiqueta").val().trim();
            if (etiqueta.length > 0) {
                placeHolder = $("#txtPlaceholder").val().trim();

                expresionRegular = $("#txtExpReg").val().trim();
                tamanioDiv = $("#tamanioCampo").val();

                if ($("#checkSoloLectura").is(':checked')) {
                    soloLectura = 1;
                } else {
                    soloLectura = 0;
                }

                if ($("#checkRequeried").is(':checked')) {
                    esRequerido = 1;
                } else {
                    esRequerido = 0;
                }

                if (idTipoCampo == 1 || idTipoCampo == 2) {
                    valor = $("#value").val().trim();
                    texto = $("#value").val().trim();
                }

                if (idTipoCampo == 1) {
                    idTipoDato = parseInt($("#ltaTpDato").val());
                    if (idTipoDato == 1) {
                        if ($("#txtMaxlength").val().trim().length > 0) {
                            longitudMaxima = $("#txtMaxlength").val().trim();
                        }
                        if ($("#txtMinlength").val().trim().length > 0) {
                            longitudMinima = $("#txtMinlength").val().trim();
                        }
                        if (longitudMaxima > 0) {
                            if (longitudMinima > longitudMaxima) {
                                mostrarAlertaGeneral("Error", 'La longitud mínima debe ser menor o igual a la longitud máxima', "danger");
                                agregarCampo = false;
                            }
                        }
                    } else if (idTipoDato == 2) {
                        if ($("#txtMaxNumber").val().trim().length > 0) {
                            valMax = parseInt($("#txtMaxNumber").val().trim());
                        }
                        if ($("#txtMinNumber").val().trim().length > 0) {
                            valMinimo = parseInt($("#txtMinNumber").val().trim());
                        }
                        if ($("#txtAumentarEn").val().trim().length > 0) {
                            aumentarEn = parseInt($("#txtAumentarEn").val().trim());
                        }
                        if (valMax > 0) {
                            if (aumentarEn > 0) {
                                if (valMax % aumentarEn == 0) {

                                } else {
                                    mostrarAlertaGeneral("Error", 'El valor maximo debe ser multiplo del campo Aumentar en', "danger");
                                    agregarCampo = false;
                                }
                            }
                            if (valMinimo > valMax) {
                                mostrarAlertaGeneral("Error", 'El valor mínimo debe ser menor o igual al valor máximo' + valMinimo, "danger");
                                agregarCampo = false;
                            }

                        }
                    } else if (idTipoDato == 4) {
                        if ($("#txtMaxFecha").val().trim().length > 0) {
                            valMax = $("#txtMaxFecha").val().trim();
                        }
                        if ($("#txtMinFecha").val().trim().length > 0) {
                            valMinimo = $("#txtMinFecha").val().trim();
                        }
                    }
                } else if (idTipoCampo == 2) {
                    if ($("#txtNumeroLineas").val().trim().length > 0) {
                        numeroLineas = $("#txtNumeroLineas").val().trim();
                    }
                    if ($("#txtMaxlength").val().trim().length > 0) {
                        longitudMaxima = $("#txtMaxlength").val().trim();
                    }
                    if ($("#txtMinlength").val().trim().length > 0) {
                        longitudMinima = $("#txtMinlength").val().trim();
                    }
                    if (longitudMaxima > 0) {
                        if (longitudMinima > longitudMaxima) {
                            mostrarAlertaGeneral("Error", 'La longitud mínima debe ser menor a la longitud máxima', "danger");
                            agregarCampo = false;
                        }
                    }
                } else if (idTipoCampo == 3) {

                    tipoOrigen = $("#ltaTpOrigen").val();
                    if (tipoOrigen == 1) {
                        let campoEspeciales = JSON.parse(localStorage.getItem('campoEspeciales')) || [];
                        let campoExiste = campoEspeciales.find((items, index) => {
                            if (items.idCampo == elementoJson) {
                                itemsCampo = campoEspeciales[index].items;
                                campoEspeciales.splice(index, 1);
                                localStorage.setItem('campoEspeciales', JSON.stringify(campoEspeciales));
                            }
                        });

                        if (!itemsCampo.length > 0) {
                            agregarCampo = false;
                            mostrarAlertaGeneral("Error", "Debe de ingresar elementos a la lista", "danger");
                        }
                    } else if (tipoOrigen == 2) {
                        let idOrigen = $("#ltaOrigen").val();
                        let origenesLista = JSON.parse(localStorage.getItem("OrigenesLista"));
                        let origen = origenesLista.find(x => x.idOrigen == idOrigen);
                        itemsCampo = origen.nombreSpEjecutar;
                        if (origen) {
                            if (origen.numeroParametros == 1) {
                                elementoJsonPadre = $("#ltaCamposExistentes").val();
                            }
                        }
                    }
                } else if (idTipoCampo == 4) {
                    urlWebBuscar = $("#ltaModals").val();
                }

                if (tipoFormulario == 2) {
                    let infoSp = JSON.parse(localStorage.getItem(spUtilizar));
                    let infoParametro = infoSp.find(item => item.PARAMETER_NAME == parametroSp);

                    if (infoParametro.TYPE_NAME == "varchar") {
                        longitudMaxima = infoParametro.CHARACTER_MAXIMUM_LENGTH;
                    }
                }
                
                if (agregarCampo) {
                    let infoCampo = {
                        idTipoCampo,
                        idTipoDato,
                        tabIndex,
                        etiqueta,
                        valor,
                        texto,
                        placeHolder,
                        longitudMinima,
                        longitudMaxima,
                        valMinimo,
                        valMax,
                        mascara,
                        esRequerido,
                        tipoOrigen,
                        valorLista: JSON.stringify(itemsCampo),
                        elementoJson,
                        seleccionMultiple,
                        urlWebBuscar,
                        validacionScript,
                        visible,
                        soloLectura,
                        numeroLineas,
                        aumentarEn,
                        expresionRegular,
                        tamanioDiv,
                        elementoJsonPadre,
                        parametroSp: parametroSp
                    };
                    infoFormulario.campos.push(infoCampo);
                    localStorage.setItem('infoForms', JSON.stringify(infoFormulario));
                    mostrarAlertaGeneral("Información", "Campo agregado exitosamente", "success");
                    divLimpiarCampos();
                }
            } else {
                mostrarAlertaGeneral("Error", "Debe de ingresar una etiqueta", "danger");

            }
        } else if (existeCampo) {
            mostrarAlertaGeneral("Error", "El id del campo que intenta agregar ya existe por favor verifique", "danger");
        } else if (existeParametroSp) {
            mostrarAlertaGeneral("Error", "El parametro del procedimiento almacenado ya esta siendo utilizado", "danger");
        }
    } else {
        mostrarAlertaGeneral("Error", 'El id del campo no puede estar vacio', "danger");
    }
}
function pintarCampos() {
    return new Promise((resolver, reject) => {
        try {
            let infoFormulario;
            infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];
            let tituloFormulario = '';
            let descripcion = '';
            tituloFormulario = $("#txtTitulo").val();
            descripcion = $("#txtDescripcion").val();

            let htmlTitulo = `<h3>${tituloFormulario}<small>${descripcion}</small></h3>`;
            $("#divTitulo").html(htmlTitulo);
            let htmlCampo = '';
            let indexCampo = 0;
            $.each(infoFormulario.campos, function (i, campo) {
                let htmlTamanio = "col-md-6 mb-3";
                let htmlAdd = '';
                let valor = campo.valor;
                if (parseInt(campo.tamanioDiv) == 12) {
                    htmlTamanio = "col-md-12 mb-6";
                }

                if (campo.esRequerido == 1) {
                    htmlAdd += ` required`
                }

                if (campo.soloLectura > 0) {
                    htmlAdd += ` readonly="readonly"`
                }

                if (campo.idTipoCampo == 1) {
                    if (campo.idTipoDato == 1) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="text" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 2) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="number" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 3) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="email" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 4) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="date" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 5) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="time" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 6) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="text" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}  pattern="^[2|3|4|5|6|7][0-9]{7}$" minlength="8" maxlength="8">
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 7) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="password" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    } else if (campo.idTipoDato == 8) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <input type="url" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" ${htmlAdd}>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                    }
                } else if (campo.idTipoCampo == 2) {
                    htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                        <textarea id="${campo.elementoJson}" name="${campo.elementoJson}" placeholder="${campo.placeHolder}" value="${campo.valor}" rows="${campo.numeroLineas}" class="form-control" ${htmlAdd}>${valor.trim()}</textarea>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                        </div>
                        `;
                } else if (campo.idTipoCampo == 3) {
                    if (parseInt(campo.tipoOrigen) == 1) {
                        let itemsLista = JSON.parse(campo.valorLista);
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                          <select class="custom-select" id="${campo.elementoJson}" name="${campo.elementoJson}" ${htmlAdd}>
                                <option value="">Seleccione</option>
                        `;

                        $.each(itemsLista, function (i, data) {
                            htmlCampo += `
                                <option value="${data.valor}">${data.text}</option>
                        `;
                        });
                        htmlCampo += `</select>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a></div>`;
                    } else if (parseInt(campo.tipoOrigen) == 2) {
                        htmlCampo += `
                        <div class="${htmlTamanio}">
                        <label for="texto">${campo.etiqueta}</label>
                          <select class="custom-select" id="${campo.elementoJson}" name="${campo.elementoJson}" ${htmlAdd}>
                                <option value="">${campo.valorLista}</option>
                            </select>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a></div>`;
                    }
                } else if (campo.idTipoCampo == 4) {
                    htmlCampo += `
                        <div class="${htmlTamanio}">
                            <div class="form-group">
                                <label>${campo.etiqueta}</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="${campo.elementoJson}" name="${campo.elementoJson}" value="${campo.etiqueta}" readonly="readonly">
                                    <div class="input-group-append">
                                        <a class="btn btn-info"> <span class="icon-share"></span> Buscar</a>
                                    </div>
                                </div>
                        <a class="btn" onclick="subirCampo(${indexCampo})"><span class="icon-arrow-up"></span></a>|<a class="btn" onclick="eliminarCampo(${indexCampo})"><span class="icon-trash"></span></a>
                            </div>
                        </div>
                        `;
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
function registrarFormulario() {
    let tipoFormulario = $("#ltaTipoFormulario").val();
    let infoFormulario;
    let formValido = true;
    infoFormulario = JSON.parse(localStorage.getItem("infoForms"));
    if (infoFormulario) {
        if (tipoFormulario == 2) {
            let spUtilizar = $("#txtNombreSp").val();
            let infoSp = JSON.parse(localStorage.getItem(spUtilizar));
            $.each(infoSp, function (i, parametro) {
                let nombre = parametro.PARAMETER_NAME;
                let campoUtiliza = infoFormulario.campos.find(item => item.parametroSp == nombre);
                if (!campoUtiliza) {
                    formValido = false;
                }
            });

        }

        if (formValido) {
            getJson(JSON.stringify({ infoFormulario }), "buildForm2.aspx/regFormulario").then(response => {
                if (response.codigo == 0) {
                    swal("Alerta", response.mensaje, "success");
                } else {
                    swal("Alerta", response.mensaje + "  " + response.error, "error");
                }
            }).catch(error => {
                swal("Alerta", error, "warning");
            });
        } else {
            swal("Alerta", "No es posible registrar el formulario ya que no se estan asignando todos los parametros requeridos por el Procedimiento Almacenado", "error");
        }
    } else {
        swal("Alerta", "No es posible registrar un formulario sin campos", "warning");
    }
}

$(document).ready(function () {
    $("#btnBuscarInfoSp").click(function (e) {
        let nombreSp = $("#txtNombreSp").val();
        $("#ErrortxtNombreSp").hide();
        if (nombreSp.length > 0) {
            getJson(JSON.stringify({ nombreSp: nombreSp }), "buildForm2.aspx/getInfoSp").then(response => {
                if (response.codigo == 0) {
                    //response.valor.splice(0, 1);
                    if (response.valor.length > 0) {
                        $("#SuccesstxtNombreSp").show();
                        localStorage.setItem(nombreSp.trim(), JSON.stringify(response.valor))
                    } else {
                        swal("Alerta", `No es posible utilizar el procedimiento ${nombreSp} ya que no recibe ningun parametro`, "error");
                    }
                } else {
                    swal("Alerta", response.mensaje, "error");
                }
            }).catch(error => {
                swal("Alerta", error, "warning");
            });
        } else {
            mostrarAlertaGeneral("Error", `Debe de ingresar el nombre del procedimiento almacenado`, "danger");
        }
    });
});



var getJson = (data, metodo) => {
    return new Promise(function (resolver, rechazar) {
        try {
            $.ajax({
                url: metodo,
                async: false,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ stringRequest: data }),
                success: function (myData) {
                    let dataResponse = myData.d;
                    try {
                        resolver(JSON.parse(dataResponse));
                    } catch (err) {
                        rechazar(JSON.stringify(err));
                        swal("ERROR", "El objeto no es un json válido", "error");
                    }
                }
            }).fail(function (xhr, textStatus, errorThrown) {
                swal("Alerta", "No se logró comunicación con el servidor, por favor intente nuevamente", "warning");
                rechazar(JSON.stringify(xhr));
            });
        } catch (error) {
            swal("ERROR", "Ocurrió un error al intentar realizar la petición", "error");
            rechazar(JSON.stringify(error));
        }
    });
}
