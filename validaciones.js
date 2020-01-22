function solo_JQdecimal(id) {
    //PARA LLAMARLO EN EL OBJETO ---> onkeypress="solo_JQdecimal(this.id)"
    $('#' + id).on('keypress', function (e) {
        // Backspace = 8, Enter = 13, ’0′ = 48, ’9′ = 57, ‘.’ = 46
        var field = $(this);
        key = e.keyCode ? e.keyCode : e.which;

        if (key == 8) return true;
        if (key > 47 && key < 58) {
            if (field.val() === "") return true;
            var existePto = (/[.]/).test(field.val());
            if (existePto === false) {
                regexp = /.[0-9]{10}$/; //PARTE ENTERA 10
            }
            else {
                regexp = /.[0-9]{2}$/; //PARTE DECIMAL2
            }
            return !(regexp.test(field.val()));
        }
        if (key == 46) {
            if (field.val() === "") return false;
            regexp = /^[0-9]+$/;
            return regexp.test(field.val());
        }
        return false;
    });


}
$(".letras").keypress(function (key) {
    window.console.log(key.charCode)
    if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode != 45) //retroceso
        && (key.charCode != 241) //ñ
        && (key.charCode != 209) //Ñ
        && (key.charCode != 32) //espacio
        && (key.charCode != 225) //á
        && (key.charCode != 233) //é
        && (key.charCode != 237) //í
        && (key.charCode != 243) //ó
        && (key.charCode != 250) //ú
        && (key.charCode != 193) //Á
        && (key.charCode != 201) //É
        && (key.charCode != 205) //Í
        && (key.charCode != 211) //Ó
        && (key.charCode != 218) //Ú

    )
        return false;
});


function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function limpia(campo) {
    var val = document.getElementById(campo.id).value;
    var tam = val.length;
    for (i = 0; i < tam; i++) {
        if (val[i].includes("0") || val[i].includes("1") || val[i].includes("2") || val[i].includes("3") || val[i].includes("4") || val[i].includes("5") ||
            val[i].includes("6") || val[i].includes("7") || val[i].includes("8") || val[i].includes("9"))//!isNaN(val[i]) 
            document.getElementById(campo.id).value = '';
    }
}







$("input[id$=txtCURP]").bind('change paste keyup', function (e) {
    var $this = $(this);
    var $parent = $this.parent();
    var $next = $this.next();
    var curp = $this.val();

    if (curpValida(curp)) {
        $('#btnGUARDAR').attr("disabled", false);
        $parent.addClass('has-success');
        $next.addClass('glyphicon-ok');
        $parent.removeClass('has-error');
        $next.removeClass('glyphicon-remove');
    } else {
        $('#btnGUARDAR').attr("disabled", true);
        $parent.addClass('has-error');
        $next.addClass('glyphicon-remove');
        $parent.removeClass('has-success');
        $next.removeClass('glyphicon-ok');
    }
});
$("input[id$=txtRFC]").bind('change paste keyup', function (e) {
    var $this = $(this);
    var $parent = $this.parent();
    var $next = $this.next();
    var rfc = $this.val();

    if (ValidaRfc(rfc)) {
        $('#btnGUARDAR').attr("disabled", false);
        $parent.addClass('has-success');
        $next.addClass('glyphicon-ok');
        $parent.removeClass('has-error');
        $next.removeClass('glyphicon-remove');
    } else {
        $('#btnGUARDAR').attr("disabled", true);
        $parent.addClass('has-error');
        $next.addClass('glyphicon-remove');
        $parent.removeClass('has-success');
        $next.removeClass('glyphicon-ok');
    }
});
function curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);

    if (!validado)  //Coincide con el formato general?
        return false;

    //Validar que coincida el dígito verificador
    function digitoVerificador(curp17) {
        //Fuente https://consultas.curp.gob.mx/CurpSP/
        var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma = 0.0,
            lngDigito = 0.0;
        for (var i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10)
            return 0;
        return lngDigito;
    }
    if (validado[2] != digitoVerificador(validado[1]))
        return false;

    return true; //Validado
}
function ValidaRfc(rfcStr) {
    var strCorrecta;
    strCorrecta = rfcStr;
    if (rfcStr.length == 12) {
        var valid = '^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
    } else {
        var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
    }
    var validRfc = new RegExp(valid);
    var matchArray = strCorrecta.match(validRfc);
    if (matchArray == null) {
        //alert('Cadena incorrectas');

        return false;
    }
    else {
        //alert('Cadena correcta:' + strCorrecta);
        return true;
    }

}


function cuiIsValid(cui) {
    var console = window.console;
    if (!cui) {
        console.log("CUI vacío");
        return true;
    }

    var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

    if (!cuiRegExp.test(cui)) {
        console.log("CUI con formato inválido");
        return false;
    }

    cui = cui.replace(/\s/, '');
    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9));

    // Se asume que la codificación de Municipios y 
    // departamentos es la misma que esta publicada en 
    // http://goo.gl/EsxN1a

    // Listado de municipios actualizado segun:
    // http://goo.gl/QLNglm

    // Este listado contiene la cantidad de municipios
    // existentes en cada departamento para poder 
    // determinar el código máximo aceptado por cada 
    // uno de los departamentos.
    var munisPorDepto = [
        /* 01 - Guatemala tiene:      */ 17 /* municipios. */,
        /* 02 - El Progreso tiene:    */  8 /* municipios. */,
        /* 03 - Sacatepéquez tiene:   */ 16 /* municipios. */,
        /* 04 - Chimaltenango tiene:  */ 16 /* municipios. */,
        /* 05 - Escuintla tiene:      */ 13 /* municipios. */,
        /* 06 - Santa Rosa tiene:     */ 14 /* municipios. */,
        /* 07 - Sololá tiene:         */ 19 /* municipios. */,
        /* 08 - Totonicapán tiene:    */  8 /* municipios. */,
        /* 09 - Quetzaltenango tiene: */ 24 /* municipios. */,
        /* 10 - Suchitepéquez tiene:  */ 21 /* municipios. */,
        /* 11 - Retalhuleu tiene:     */  9 /* municipios. */,
        /* 12 - San Marcos tiene:     */ 30 /* municipios. */,
        /* 13 - Huehuetenango tiene:  */ 32 /* municipios. */,
        /* 14 - Quiché tiene:         */ 21 /* municipios. */,
        /* 15 - Baja Verapaz tiene:   */  8 /* municipios. */,
        /* 16 - Alta Verapaz tiene:   */ 17 /* municipios. */,
        /* 17 - Petén tiene:          */ 14 /* municipios. */,
        /* 18 - Izabal tiene:         */  5 /* municipios. */,
        /* 19 - Zacapa tiene:         */ 11 /* municipios. */,
        /* 20 - Chiquimula tiene:     */ 11 /* municipios. */,
        /* 21 - Jalapa tiene:         */  7 /* municipios. */,
        /* 22 - Jutiapa tiene:        */ 17 /* municipios. */
    ];

    if (depto === 0 || muni === 0) {
        console.log("CUI con código de municipio o departamento inválido.");
        return false;
    }

    if (depto > munisPorDepto.length) {
        console.log("CUI con código de departamento inválido.");
        return false;
    }

    if (muni > munisPorDepto[depto - 1]) {
        console.log("CUI con código de municipio inválido.");
        return false;
    }

    // Se verifica el correlativo con base 
    // en el algoritmo del complemento 11.
    var total = 0;

    for (var i = 0; i < numero.length; i++) {
        total += numero[i] * (i + 2);
    }

    var modulo = (total % 11);

    console.log("CUI con módulo: " + modulo);
    return modulo === verificador;
};
$("input[id$=txtDPI]").bind('change paste keyup', function (e) {
    var $this = $(this);
    var $parent = $this.parent();
    var $next = $this.next();
    var cui = $this.val().replace("-", "").replace("-", "");


    if (cui && cuiIsValid(cui)) {
        $('#btnCrearGestion').removeAttr("disabled");
        $('#ContentPlaceHolder1_btnBuscarDatos').removeAttr("disabled");
        $("#txtDPI").css({ color: "green" });
        $parent.addClass('has-success');
        //$next.addClass('glyphicon-ok');
        $parent.removeClass('has-error');
        //$next.removeClass('glyphicon-remove');
    } else if (cui) {
        $('#btnCrearGestion').attr("disabled", "false");
        $('#ContentPlaceHolder1_btnBuscarDatos').attr("disabled", "false");
        $('#lblMensaje').text("El numero de DPI no es valido");
        $("#txtDPI").css({ color: "red" });
        $parent.addClass('has-error');
        //$next.addClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    } else {
        $('#btnCrearGestion').attr("disabled", "false");
        $('#ContentPlaceHolder1_btnBuscarDatos').attr("disabled", "false");
        $parent.removeClass('has-error');
        //$next.removeClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    }
});


$("input[id$=txtCA_DPI_PROPIETARIO]").bind('change paste keyup', function (e) {
    var $this = $(this);
    var $parent = $this.parent();
    var $next = $this.next();
    var cui = $this.val().replace("-", "").replace("-", "");


    if (cui && cuiIsValid(cui)) {
        $('#btnCrearGestion').removeAttr("disabled");
        $('#ContentPlaceHolder1_btnBuscarDatos').removeAttr("disabled");
        $("#txtDPI").css({ color: "green" });
        $parent.addClass('has-success');
        //$next.addClass('glyphicon-ok');
        $parent.removeClass('has-error');
        //$next.removeClass('glyphicon-remove');
    } else if (cui) {
        $('#btnCrearGestion').attr("disabled", "false");
        $('#ContentPlaceHolder1_btnBuscarDatos').attr("disabled", "false");
        $('#lblMensaje').text("El numero de DPI no es valido");
        $("#txtDPI").css({ color: "red" });
        $parent.addClass('has-error');
        //$next.addClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    } else {
        $('#btnCrearGestion').attr("disabled", "false");
        $('#ContentPlaceHolder1_btnBuscarDatos').attr("disabled", "false");
        $parent.removeClass('has-error');
        //$next.removeClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    }
});

function valNit(cui) {
    var nd, add = 0;
    if (nd = /^(\d+)\-?([\dk])$/i.exec(cui)) {
        if (cui == 'C/F' || cui == 'c/f') {
            return true;
//            break;
        }
        nd[2] = (nd[2].toLowerCase() == 'k') ? 10 : parseInt(nd[2]);
        for (var i = 0; i < nd[1].length; i++) {
            add += ((((i - nd[1].length) * -1) + 1) * nd[1][i]);
        }
        return ((11 - (add % 11)) % 11) == nd[2];
    } else {
        if (cui == 'C/F' || cui == 'c/f') {
            return true;
            //break;
        } else {
            return false;
        }
    }
}

$("input[id$=txtNIT]").bind('change paste keyup', function (e) {
    var $this = $(this);
    var $parent = $this.parent();
    var $next = $this.next();
    var cui = $this.val();
    if (cui && valNit(cui)) {
        //$('#ContentPlaceHolder1_btnGUARDAR').removeAttr("disabled");
        $("#txtNIT").css({ color: "green" });
        $parent.addClass('has-success');
        //$next.addClass('glyphicon-ok');
        $parent.removeClass('has-error');
        //$next.removeClass('glyphicon-remove');
    } else if (cui) {
        $('#ContentPlaceHolder1_btnGUARDAR').attr("disabled", "false");
        $("#txtNIT").css({ color: "red" });
        $parent.addClass('has-error');
        // $next.addClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    } else {
        $('#ContentPlaceHolder1_btnGUARDAR').attr("disabled", "false");
        $parent.removeClass('has-error');
        // $next.removeClass('glyphicon-remove');
        $parent.removeClass('has-success');
        //$next.removeClass('glyphicon-ok');
    }
});



//WAY

function decimal(control) {
    var num = parseFloat($("#" + control).val());
    var n = num.toFixed(2);
    document.getElementById(control).value = n;

    calculaCuota();
    alertaEnganche();
}

function calculaCuota() {
    if ($('#txtMONTO_CREDITO').val() != '' && $('#txtENGANCHE').val() != '' && $('#txtNUMERO_CUOTAS').val() != '') {

        var monto = parseFloat($('#txtMONTO_CREDITO').val());
        var enganche = parseFloat($('#txtENGANCHE').val());
        var cuotas = parseFloat($('#txtNUMERO_CUOTAS').val());

        var valorCuota = ((monto - enganche) / cuotas).toFixed(2);
        $('#lblVALOR_CUOTA').val(valorCuota);
    }
}

function limite(control, longitud) {
    var texto = $("#" + control).val();
    if ($("#" + control).val().length >= longitud) {
        document.getElementById(control).value = texto.substring(1, longitud);
    }
}

function limitar(e, contenido, caracteres) {
    // obtenemos la tecla pulsada
    var unicode = e.keyCode ? e.keyCode : e.charCode;

    // Permitimos las siguientes teclas:
    // 8 backspace
    // 46 suprimir
    // 13 enter
    // 9 tabulador
    // 37 izquierda
    // 39 derecha
    // 38 subir
    // 40 bajar
    if (unicode == 8 || unicode == 46 || unicode == 13 || unicode == 9 || unicode == 37 || unicode == 39 || unicode == 38 || unicode == 40)
        return true;

    // Si ha superado el limite de caracteres devolvemos false
    if (contenido.length >= caracteres)
        return false;

    return true;
}
function verdes() {
    document.location.href = 'bandeja.aspx?FRM_ID=[GpNwGSGTlVI=]&EVE_ID=[nsOec8tA6kc=]&SP=[lIz6EcmfWKdbmzFyz4qQvzg2WOdibK7dnGJ9pO+ifLw=]';
}
function rojos() {
    document.location.href = 'bandeja.aspx?FRM_ID=[IXcTcXAmBhc=]&EVE_ID=[m2ukfaRWzVo=]&SP=[lIz6EcmfWKdbmzFyz4qQv2qxzvo2t0jUZCdw2rPp3Bc=]';
}
function amarillos() {
    document.location.href = 'bandeja.aspx?FRM_ID=[m2ukfaRWzVo=]&EVE_ID=[GpNwGSGTlVI=]&SP=[lIz6EcmfWKdbmzFyz4qQv3tu5ujvMpAbpM8RZssiQ/AfqAw683LK3Q==]';
}


function habilitaRequeridoCampo(campoInicial, valor, campoHabilita, tipo) {

    //tipo 0=string , 1 = int, 2 float
    switch (tipo) {
        case 1:
            var valorCampo = parseInt($("#" + campoInicial.id).val());

            if (valorCampo == parseInt(valor)) {
                $("#" + campoHabilita).attr("required", "true");
                $("#lbl" + campoHabilita.replace('txt', '').replace('lst', '')).append("<strong id='str" + campoHabilita.replace('txt', '').replace('lst', '') + "'  style='color:red'> *</strong>");
            } else {
                $("#" + campoHabilita).removeAttr("required");

                $("#str" + campoHabilita.replace('txt', '').replace('lst', '')).remove();
            }
            break;

        default:
            break;
    }
}


function alertaEnganche() {
    var enganche = $("#txtENGANCHE").val();
    var total = $("#txtMONTO_CREDITO").val();
    if (enganche != "" && total != "") {
        if (parseFloat(enganche) > parseFloat(total)) {
            $('#ContentPlaceHolder1_btnGUARDAR').attr("disabled", "true");
        } else {
            $('#ContentPlaceHolder1_btnGUARDAR').removeAttr("disabled");
        }
    }

}
