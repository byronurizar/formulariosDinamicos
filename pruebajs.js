//$(function () {
//    $('#txtDPI').mask('0000-00000-0000');
//    $('#FECHA').mask('00/00/0000');
//    $('#txtPLAZO_SOLICITADO').mask('00');
//    $('#txtValor').mask('#,##0.00', { reverse: true });
//    $('#txtValorVeh').mask('#,##0.00', { reverse: true });
//    $('.time').mask('00:00:00');
//    $('.date_time').mask('00/00/0000 00:00:00');
//    $('.cep').mask('00000-000');
//    $('.phone').mask('0000-0000');
//    $('.phone_with_ddd').mask('(00) 0000-0000');
//    $('.phone_us').mask('(000) 000-0000');
//    $('.mixed').mask('AAA 000-S0S');
//    $('.ip_address').mask('099.099.099.099');
//    $('.percent').mask('##0,00%', { reverse: true });
//    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
//    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
//    $('.fallback').mask("00r00r0000", {
//        translation: {
//            'r': {
//                pattern: /[\/]/,
//                fallback: '/'
//            },
//            placeholder: "__/__/____"
//        }
//    });

//    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });

//    $('.cep_with_callback').mask('00000-000', {
//        onComplete: function (cep) {
//            console.log('Mask is done!:', cep);
//        },
//        onKeyPress: function (cep, event, currentField, options) {
//            console.log('An key was pressed!:', cep, ' event: ', event, 'currentField: ', currentField.attr('class'), ' options: ', options);
//        },
//        onInvalid: function (val, e, field, invalid, options) {
//            var error = invalid[0];
//            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
//        }
//    });

//    $('.crazy_cep').mask('00000-000', {
//        onKeyPress: function (cep, e, field, options) {
//            var masks = ['00000-000', '0-00-00-00'];
//            mask = (cep.length > 7) ? masks[1] : masks[0];
//            $('.crazy_cep').mask(mask, options);
//        }
//    });

//    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
//    $('.cpf').mask('000.000.000-00', { reverse: true });
//    $('#txtMONTO_SOLICITADO').mask('#,##0.00', { reverse: true });

//    var SPMaskBehavior = function (val) {
//        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
//    },
//    spOptions = {
//        onKeyPress: function (val, e, field, options) {
//            field.mask(SPMaskBehavior.apply({}, arguments), options);
//        }
//    };

//    $('.sp_celphones').mask(SPMaskBehavior, spOptions);

//    $(".bt-mask-it").click(function () {
//        $(".mask-on-div").mask("000.000.000-00");
//        $(".mask-on-div").fadeOut(500).fadeIn(500)
//    })

//    $('pre').each(function (i, e) { hljs.highlightBlock(e) });





//    //INICIA_DETALLE_GASTOS
//    $('#txtALIMENTACION').mask('#,##0.00', { reverse: true });
//    $('#txtALQUILER_VIVIENDA').mask('#,##0.00', { reverse: true });
//    $('#txtVESTUARIO').mask('#,##0.00', { reverse: true });
//    $('#txtCALZADO').mask('#,##0.00', { reverse: true });
//    $('#txtENERGIA_ELECTRICA').mask('#,##0.00', { reverse: true });
//    $('#txtTELEFONO').mask('#,##0.00', { reverse: true });
//    $('#txtCABLETV').mask('#,##0.00', { reverse: true });
//    $('#txtINTERNET').mask('#,##0.00', { reverse: true });
//    $('#txtMEDICAMENTOS').mask('#,##0.00', { reverse: true });
//    $('#txtTRANSPORTE').mask('#,##0.00', { reverse: true });
//    $('#txtUTILES_ESCOLARES').mask('#,##0.00', { reverse: true });
//    $('#txtCOLEGIATURA').mask('#,##0.00', { reverse: true });
//    $('#txtUTILES_ESCOLARES').mask('#,##0.00', { reverse: true });
//    $('#txtCOMBUSTIBLE').mask('#,##0.00', { reverse: true });
//    $('#txtRECREACION').mask('#,##0.00', { reverse: true });
//    $('#txtUTILES_ESCOLARES').mask('#,##0.00', { reverse: true });
//    $('#txtMANTENIMIENTO_VEHICULO').mask('#,##0.00', { reverse: true });
//    $('#txtHIGIENE_PERSONAL').mask('#,##0.00', { reverse: true });
//    $('#txtPERFUMERIA_COSMETICOS').mask('#,##0.00', { reverse: true });
//    $('#txtOTROS').mask('#,##0.00', { reverse: true });
//    //FIN_DETALLE_GASTOS

//    //DETALLE_INGRESOS
//    $('#txtSALARIO_LIQUIDO').mask('#,##0.00', { reverse: true });
//    $('#txtHONORARIOS_SERVICIOS_PROFESIONALES').mask('#,##0.00', { reverse: true });
//    $('#txtOTROS_INGRESOS').mask('#,##0.00', { reverse: true });


//    //FIN_DETALLE_INGRESOS
//});


var formatNumber = {
    separador: ",", // separador para los miles
    sepDecimal: '.', // separador para los decimales
    formatear: function (num) {
        num += '';
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }
        return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
        this.simbol = simbol || '';
        return this.formatear(num);
    }
}
function cuotaCapital() {
    if ($('#txtMONTO_SOLICITADO').val() != '' && $('#txtPLAZO_SOLICITADO').val() != '' && $('#txtPLAZO_SOLICITADO').val() != '0') {
        var monto = ($('#txtMONTO_SOLICITADO').val());
        monto = monto.replace(",", "");
        monto = parseFloat(monto);
        var plazo = parseInt($('#txtPLAZO_SOLICITADO').val());
        var resultado = parseFloat(monto / plazo).toFixed(2);
        if (resultado == 'NAN' || resultado == 'NaN' || resultado == 'nan') {
            resultado = '0.00'
        }
        $('#txtCUOTA_CAPITAL').val(formatNumber.new(resultado, ''));
        interes();
    } else {
        $('#txtCUOTA_CAPITAL').val('0.00');
        $('#txtINTERES').val('0.00');
        $('#txtCUOTA_TOTAL').val('0.00  ');
    }
}
function interes() {
    var id = $("#ContentPlaceHolder1_hdfCodigoGestion").val();
    var monto = $("#txtMONTO_SOLICITADO").val();
    $.ajax({
        type: "POST",
        url: "DefaultV2.aspx/returnInteres",
        data: '{id:"' + id + '", monto:"' + monto + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#txtINTERES').val(formatNumber.new(data.d, ''));
            var total = parseFloat(data.d.replace(",", "")) + parseFloat($('#txtCUOTA_CAPITAL').val().replace(",", ""));
            total = formatNumber.new(total.toFixed(2), '');
            $('#txtCUOTA_TOTAL').val((total));
        },
        error: function (data) {
            alert("Error de conexión al realizar los calculos, recargue la página e intente nuevamente, si el problema persiste contacte a soporte");
        }
    });
}

function calculaLimite() {
    var parametro = {
        aportacion: $("#txtCA_APORTACION").val(),
        ahorroCorriente: $("#txtCA_AHORROS_CORRIENTE").val(),
        ahorroProgramado: $("#txtCA_AHORROS_PROGRAMADO").val(),
        plazoFijo: $("#txtCA_PLAZOS_FIJOS").val()
    };
    $.ajax({
        type: "POST",
        url: "DefaultV2.aspx/calculaLimite",
        data: JSON.stringify(parametro),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#txtCA_LIMITE_DISPONIBLE").val(data.d);

        },
        error: function (data) {
            alert("Error de conexión al realizar los calculos, recargue la página e intente nuevamente, si el problema persiste contacte a soporte");
        }
    });
}
function buscarDatos() {
    showPageLoad();
    var DPI = $("#txtDPI").val().replace("-", "").replace("-", "");
    if (!cuiIsValid(DPI)) {
        $("#msgErrorDPI").attr("style", "display:visible; color:red");
    } else {
        $("#msgErrorDPI").attr("style", "display:none");
        $.ajax({
            type: "POST",
            url: "bandeja.aspx/getDataProspecto",
            data: '{DPI:"' + DPI + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var datos = data.d.split('|');
                if (datos[0].startsWith("Error")) {
                    $("#msgError").attr("style", "display:visible; color:red");
                    $("#txtPrimerNombre").val("");
                    $("#txtSegundoNombre").val("");
                    $("#txtPrimerApellido").val("");
                    $("#txtSegundoApellido").val("");
                    $("#txtFechaEmisionDPI").val("");
                } else {
                    $("#msgError").attr("style", "display:none");
                    $("#txtPrimerNombre").val(datos[0]);
                    //$("#txtPrimerNombre").attr("readonly", "true");
                    $("#txtSegundoNombre").val(datos[1]);
                    //$("#txtSegundoApellido").attr("readonly", "true");
                    $("#txtPrimerApellido").val(datos[2]);
                    //$("#txtPrimerApellido").attr("readonly", "true");
                    $("#txtSegundoApellido").val(datos[3]);
                    //$("#txtSegundoApellido").attr("readonly", "true");
                    $("#txtDPI").val(datos[4]);

                    $("#txtFechaEmisionDPI").val(datos[5]);
                    //$("#txtDPI").attr("readonly", "true");
                }
            },
            error: function (data) {
                alert("Error de conexión al obtener la información, recargue la página e intente nuevamente, si el problema persiste contacte a soporte");
            }

        });
    }

    hidePageLoad();
}
function leerData(id) {
    var condicion = false;
    var valorInicial = $("#" + "txtPF_TOTAL_DETALLE_GASTOS").val();

    $("#" + "txtPF_TOTAL_DETALLE_GASTOS").val("0.00");
    fi = document.getElementById(id);
    controlesInput = fi.getElementsByClassName("form-control")


    var suma = 0;
    for (i = 0; i < controlesInput.length; i++) {
        control = controlesInput[i];
        if (control.type == 'text' && !control.readOnly) {
            if ($("#" + control.id).val() != "") {
                suma += parseFloat($("#" + control.id).val().replace(",", "").replace(",", "").replace(",", ""));
            }
        } else {
            condicion = true;
            $("#" + "txtPF_TOTAL_DETALLE_GASTOS").val(valorInicial);
            break;
        }
    }

    if (!condicion) {
        if (suma == "NAN" || suma == "NaN" || suma == "nan") {
            $("#" + "txtPF_TOTAL_DETALLE_GASTOS").val('0.00');
        } else {
            $("#" + "txtPF_TOTAL_DETALLE_GASTOS").val(formatNumber.new(suma.toFixed(2), ''));
        }
    }


}

function controles(rciParcial, rciProductoMaximo, rciProductoMinimo, excedenteCuota) {

    var valorRCIParcial = parseFloat($("#" + rciParcial.id).val());
    var valorRCIProductoMaximo = parseFloat($("#" + rciProductoMaximo.id).val());
    var valorRCIProductoMinimo = parseFloat($("#" + rciProductoMinimo.id).val());
    var valorExcedenteCuota = parseFloat($("#" + excedenteCuota.id).val());

    //parseFloat
    if ((valorRCIParcial) >= 0 && (valorRCIParcial) <= 35) {
        $("#" + rciParcial.id).attr("style", "background-color:green;color:white");
    } else if (valorRCIParcial >= valorRCIProductoMinimo && valorRCIParcial <= valorRCIProductoMaximo) {
        $("#" + rciParcial.id).attr("style", "background-color:yellow;color:white");
    } else if (valorRCIParcial > valorRCIProductoMaximo) {
        $("#" + rciParcial.id).attr("style", "background-color:red;color:white");
    }
    if (valorExcedenteCuota > 0) {
        $("#" + excedenteCuota.id).attr("style", "background-color:red;color:white");
    }


}
$(document).ready(function () {

    if ($("#ContentPlaceHolder1_hdfCodigoFormulario").val() == "12" || $("#ContentPlaceHolder1_hdfCodigoFormulario").val() == "24") {
        controles(txtRCI_PARCIAL, txtRCI_PRODUCTO_MINIMO, txtRCI_PRODUCTO_MAXIMO, txtEXCEDENTE_CUOTA);
    }


    $(document).on("click", "#tableGestiones tbody tr", function () {
        if ($("#ContentPlaceHolder1_hdfParam").val() == "1") {
        } else {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                $('tr.selected').removeClass('selected');
                $(this).addClass('selected');
                //$(this).attr("style", "backgrou");
            }
            var variable = $(this).find('td:nth-child(2)').html()
            var usuario = $("#ContentPlaceHolder1_hdfCodigoUsuarioEncript").val();
            $.ajax({
                type: "POST",
                url: "bandeja.aspx/continuarGestion",
                data: '{Gestion:"' + variable + '",usuario:"' + usuario + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if (data.d.startsWith("Advertencia:")) {
                        advertenciaProceso(data.d.substring(12, 300));
                    } else {
                        location.href = data.d;
                    }

                },
                error: function (data) {
                    alert("Error de conexión al continuar la gestión, si el problema persiste contacte a soporte");
                }
            });
        }

    });

    $('#MONTO tbody tr').on('click', function () {
        showPageLoad();
        var parametro;
        parametro = "MONTO|";
        parametro += $(this).find('td:nth-child(7)').html();
        var codigoGestion = $("#ContentPlaceHolder1_hdfCodigoGestion").val();
        $.ajax({
            type: "POST",
            url: "DefaultV2.aspx/ofertaComercialPF",
            data: '{codigoGestion:"' + codigoGestion + '",parametro:"' + parametro + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                hidePageLoad();
                location.href = data.d;
            }
        });
    });
    $('#PLAZO tbody tr').on('click', function () {
        showPageLoad();
        var parametro;
        parametro = "PLAZO|";
        parametro += $(this).find('td:nth-child(6)').html();
        var codigoGestion = $("#ContentPlaceHolder1_hdfCodigoGestion").val();
        $.ajax({
            type: "POST",
            url: "DefaultV2.aspx/ofertaComercialPF",
            data: '{codigoGestion:"' + codigoGestion + '",parametro:"' + parametro + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                hidePageLoad();
                location.href = data.d;
            }
        });
    });
});
function iniciarGestion(campo) {
    var idPanel;
    try {
        idPanel = $("#" + campo.id).parents('div').eq(3)["0"].attributes.id.value;
    }
    catch (err) {
        idPanel = "";
    }
    var DPI = $("#txtDPI").val();
    if (DPI == '' || DPI == null) {
        alert("Debe ingresar el número de DPI");
    } else {
        if (verificarInicioGestion(idPanel)) {

            var PrimerNombre = $("#txtPrimerNombre").val();
            var SegundoNombre = $("#txtSegundoNombre").val();
            var PrimerApellido = $("#txtPrimerApellido").val();
            var SegundoApellido = $("#txtSegundoApellido").val();
            var FechaEmisionDPI = $("#txtFechaEmisionDPI").val();
            var Producto = $("#ContentPlaceHolder1_ddlProducto").val();
            var Usuario = $("#ContentPlaceHolder1_hdfCodigoUsuarioEncript").val();
            var parametro = DPI + "|" + PrimerNombre + "|" + SegundoNombre + "|" + PrimerApellido + "|" + SegundoApellido + "|" + FechaEmisionDPI + "|" + Producto + "|" + Usuario;
            $.ajax({
                type: "POST",
                url: "bandeja.aspx/iniciarGestion",
                data: '{parametros:"' + parametro + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if (!data.d.startsWith("Error") && !data.d.startsWith("G:")) {
                        $("#txtDPI").val("");
                        $("#txtDPI").val("");
                        $("#txtPrimerNombre").val("");
                        $("#txtSegundoNombre").val("");
                        $("#txtPrimerApellido").val("");
                        $("#txtSegundoApellido").val("");
                        $("#txtFechaEmisionDPI").val("");
                        location.href = data.d;
                    } else if (data.d.startsWith("G:")) {
                        $("#ContentPlaceHolder1_hdfDPI").val(DPI);
                        $("#txtDPI").val("");
                        $("#txtDPI").val("");
                        $("#txtPrimerNombre").val("");
                        $("#txtSegundoNombre").val("");
                        $("#txtPrimerApellido").val("");
                        $("#txtSegundoApellido").val("");
                        $("#txtFechaEmisionDPI").val("");
                        $("#tableGestiones").remove();
                        //$("#ContentPlaceHolder1_hdfDPIActual").val(DPI);
                        $("#contenidoG").append(data.d.replace("G:", ""));
                        if (!data.d.includes("En proceso.")) {
                            $("#ContentPlaceHolder1_hdfParam").val("1");
                            $("#btnContinuarGestion").removeAttr("style");
                        }
                        $('#mdl-NuevaGestion').modal('toggle');
                        $("#mdl-gestiones").modal('show');
                    } else {
                        alert(data.d);
                    }
                },
                error: function (data) {
                    alert("Error de conexión al continuar la gestión, si el problema persiste contacte a soporte");
                }
            });
        } else {
            alert("Los campos con * son obligatorios");
        }
    }



}
function cerrarModal() {
    $("#txtDPI").val("");
    $("#txtDPI").val("");
    $("#txtPrimerNombre").val("");
    $("#txtSegundoNombre").val("");
    $("#txtPrimerApellido").val("");
    $("#txtSegundoApellido").val("");
    $("#txtFechaEmisionDPI").val("");
    $('#mdl-NuevaGestion').modal('toggle');

}
function verificarInicioGestion(id) {
    var rellenados = true;
    try {
        fi = document.getElementById(id);
        controlesInput = fi.getElementsByTagName('input');
        controleSelect = fi.getElementsByTagName('select');
        for (i = 0; i < controlesInput.length; i++) {
            control = controlesInput[i];
            if (control.type == 'text' || control.type == 'number' || control.type == 'email') {
                if (control.required) {
                    if (control.value == "") {
                        rellenados = false;
                        control.style.borderColor = 'red';

                    } else {
                        control.style.borderColor = '#e6e6e6';
                    }
                    if (control.type == 'email') {
                        rellenados = validarEmail(control.value);
                        if (rellenados) {
                            control.style.borderColor = '#e6e6e6';
                        } else {
                            control.style.borderColor = 'red';
                        }

                    }

                }
            }
        }
        for (i = 0; i < controleSelect.length; i++) {
            control = controleSelect[i];

            if (control.required) {
                spanControl = fi.getElementsByClassName('select2-selection select2-selection--single');
                if (control.value == "0") {
                    rellenados = false;
                    spanControl[i].style.borderColor = 'red';
                } else {
                    spanControl[i].style.borderColor = '#e6e6e6';
                }
            }
        }
    } catch (e) {
        rellenados = true;
    }

    return rellenados;
}
function continuarGestion() {
    var DPI = $("#ContentPlaceHolder1_hdfDPI").val();
    var nuevoUsuario = $("#ContentPlaceHolder1_hdfCodigoUsuarioEncript").val();
    $.ajax({
        type: "POST",
        url: "bandeja.aspx/enviarBandejaRevision",
        data: '{DPI:"' + DPI + '",nuevoUsuario:"' + nuevoUsuario + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d.startsWith("Correcto")) {
                $.notifyDefaults({
                    type: 'success',
                    allow_dismiss: false
                });
                $.notify('La gestión se ha enviado a revisión.');
                $('#mdl-gestiones').modal('toggle');
                window.setTimeout(location.reload(true), 5000);
                //location.reload(true);
            }
        }
    });
}

function calculaIngreso() {
    $.ajax({
        type: "POST",
        url: "DefaultV2.aspx/calculaIngresos",
        data: '{salarioliquido:"' + $("#txtSALARIO_LIQUIDO_MENSUAL").val() + '", honorarios:"' + $("#txtHONORARIOS_SERVICIOS_PROFESIONALES").val() + '", otrosingresos:"' + $("#txtOTROS_INGRESOS").val() + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var resultado = data.d.split("|");
            $("#txtTOTAL_INGRESOS").val((resultado[0]));
            $("#txtOTROS_INGRESOS_VALIDOS").val((resultado[1]));

        }
    });
}






