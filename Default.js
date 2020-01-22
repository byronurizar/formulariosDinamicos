var eventoServer=false;

$(window).load(function() {
	
    //$('#page-load').fadeOut("fast");
    //$('#contenido').removeAttr("style");
    $('#modalCarga').modal({backdrop: 'static', keyboard: false})
    $("#modalCarga").modal('hide');
});


function abrirModal(url, parametro) {
    var parametros = parametro;
    thisWindow = window.open(url + parametros, "childWindow", "width=1200, height=700, menubar=0, location=100, status=1, scrollbars=1");
}
function cerrarPopup() {

    swal({
        title: 'Excelente!',
        text: "Proceso Realizado Correctamente!",
        type: 'success',
        showCancelButton: false,
        allowOutsideClick:false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK!'
    }).then((result) => {
        if (result.value) {
                        
    }
window.close();
})
}
function errorProceso(mensaje) {
    swal({
        position: 'bottom-start',
        type: 'error',
        title: mensaje,
    })
}
function advertenciaProceso(mensaje) {
    swal({
        position: 'bottom-start',
        type: 'warning',
        title: mensaje,
    })
}
function correctoProceso(mensaje) {
    swal({
        position: 'bottom-start',
        type: 'success',
        title: mensaje,
    })
}

function cerrarVentana(){
    window.close();
}

function getDataSelect(campo){





}



function validaCelular(valor)
{
    var resultado=false;
    $.ajax({
        async:false,
        cache:false,
        type: "POST",
        url: "DefaultV2.aspx/validaCelular",
        data: '{numero:"' + valor + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d.startsWith("Correcto")) {
                resultado= true;
            } else if(data.d.startsWith("Incorrecto")) {
                resultado= false;
            }else if (data.d.startsWith("Advertencia")) {
                //alert(data.d);
                resultado= false;
            }                       
        },
        error: function (data) {
            alert("Error de conexión al validar números telefónicos");
        }
    });
    return resultado;
}

function validaOficina(valor)
{
    var resultado=false;
    $.ajax({
        async:false,
        cache:false,
        type: "POST",
        url: "DefaultV2.aspx/validaOficina",
        data: '{numero:"' + valor + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d.startsWith("Correcto")) {
                resultado= true;
            } else if(data.d.startsWith("Incorrecto")) {
                resultado= false;
            }else if (data.d.startsWith("Advertencia")) {
                alert(data.d);
                resultado= false;
            }                       
        },
        error: function (data) {
            alert("Error de conexión al validar números telefónicos");
        }
    });
    return resultado;
}

function validaTelefono(valor)
{
    var resultado=false;
    $.ajax({
        async:false,
        cache:false,
        type: "POST",
        url: "DefaultV2.aspx/validaTelefono",
        data: '{numero:"' + valor + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d.startsWith("Correcto")) {
                resultado= true;
            } else if(data.d.startsWith("Incorrecto")) {
                resultado= false;
            }else if (data.d.startsWith("Advertencia")) {
                alert(data.d);
                resultado= false;
            }                       
        },
        error: function (data) {
            alert("Error de conexión al validar números telefónicos");
        }
    });
    return resultado;
}


//function validaOficina(campo){
//    var esRequerido=$('#' + campo.id).data("required");
//    var celular=$('#' +campo.id).val();
//    if (esRequerido) {
//        $.ajax({
//            type: "POST",
//            url: "Default.aspx/validaOfcina",
//            data: '{numero:"' + celular + '"}',
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (data) {
//                if (data.d.startsWith("Correcto")) {
//                    $('#ContentPlaceHolder1_btnGUARDAR').removeAttr("Disabled");
//                } else if(data.d.startsWith("Incorrecto")) {
//                    $('#ContentPlaceHolder1_btnGUARDAR').attr("Disabled","true");
//                }else if (data.d.startsWith("Advertencia")) {
//                    alert(data.d);
//                    $('#ContentPlaceHolder1_btnGUARDAR').attr("Disabled","true");
//                }                       
//            },
//            error: function (data) {
//                alert("Error" + data.d);
//            }
//        });
//    }else {
//        if (celular!='') {
//            $.ajax({
//                type: "POST",
//                url: "Default.aspx/validaOficina",
//                data: '{numero:"' + celular + '"}',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (data) {
//                    if (data.d.startsWith("Correcto")) {
//                        $('#ContentPlaceHolder1_btnGUARDAR').removeAttr("Disabled");
//                    } else if(data.d.startsWith("Incorrecto")) {
//                        $('#ContentPlaceHolder1_btnGUARDAR').attr("Disabled","true");
//                    }else if (data.d.startsWith("Advertencia")) {
//                        alert(data.d);
//                        $('#ContentPlaceHolder1_btnGUARDAR').attr("Disabled","true");
//                    }                       
//                },
//                error: function (data) {
//                    alert("Error" + data.d);
//                }
//            });
//        }
//        else {
//            $('#ContentPlaceHolder1_btnGUARDAR').removeAttr("Disabled");
//        }
                  
//    }
              
                
//}

function reloadGrid(codigoGestion, sp, parametro){
    $("#"+sp).html('');
    $.ajax({
        type: "POST",
        url: "DefaultV2.aspx/generaGridView",
        data: '{codigoGestion:"' + codigoGestion + '", sp:"' + sp + '",parm:"'+parametro+'"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#"+sp).html(data.d);
            $("#valor_" +sp ).val('-1');
        },                   
        error: function (data) {
            alert("Error de conexión al generar la  tabla");
        }
    });
}



function abrirModalPlus(campo){
    var id;
    id=campo.id.substring(11,100);
    var idValor;
    idValor= $("#valor_" +id ).val();
    if (idValor==null) {
        id=campo.id.substring(13,100);
        idValor= $("#valor_" +id ).val();
    }
    var idGestion= $("#ContentPlaceHolder1_hdfCodigoGestion").val();
    
    
    if (idValor!='-1') {

        $.ajax({
            type: "POST",
            url: "DefaultV2.aspx/getDataModal",
            data: '{codigoGestion:"' + idGestion + '", sp:"' + id + '",parm:"'+idValor+'"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var listado= data.d.split("|");
                var modal= campo.id.replace("btn_","");
                var tipoOperacion=modal.replace("_"+id, "");
                if (tipoOperacion=='ELIMINAR') {
                    swal({
                        title: '¿Desea eliminar el registro?',
                        text: "Este cambio no se podrá revertir!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, deseo eliminarlo!'
                    }).then((result) => {
                        if (result)
                        {
                        $.ajax({
                        type: "POST",
                    url: "DefaultV2.aspx/accionEliminarModal",
                    data: '{codigoGestion:"' + idGestion + '", sp:"' + id + '",parm:"'+idValor+'"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        if (data.d.startsWith("Correcto")) {
                            //$("#"+id).html('');
                            swal('Eliminado!','Eliminado Correctamente','success');
                        
                            reloadGrid(idGestion,id,idValor);
                            //$.ajax({
                            //    type: "POST",
                            //    url: "DefaultV2.aspx/generaGridView",
                            //    data: '{codigoGestion:"' + idGestion + '", sp:"' + id + '",parm:"'+idValor+'"}',
                            //    contentType: "application/json; charset=utf-8",
                            //    dataType: "json",
                            //    success: function (tabla) {
                            //        $("#"+id).html(tabla.d);
                            //    },                   
                            //    error: function (data) {
                            //        alert("Error" + data.d);
                            //    }
                            //});
                        }
                             
                    },                   
                    error: function (data) {
                        alert("Error de conexión al aplicar la acción");
                    }
                });
            }
        })
    }else {
        fi = document.getElementById(modal);
        controlesInput = fi.getElementsByClassName("form-control");
        for (i = 0; i < controlesInput.length; i++) {
            control = controlesInput[i];
            if (control.type=="select-one") {
                //$("select#"+control.id+" option").each(function() { this.selected = (this.text == listado[i]); });
                $("#"+control.id+" option").filter(function() {
                    if($(this).val() == listado[i])
                    {
                        $("#"+control.id).val(listado[i]).trigger('change');
                        //                        $("#"+control.id).val(listado[i]);
                        //                  $(this).attr("selected", "true");
                    }
                });
            }else if (control.type=="text") {
                $("#"+control.id).val(listado[i]);
            }
           
        }
        $("#modal_" +modal).modal('show');
    }
             
   
},
error: function (data) {
    alert("Error de conexión al obtener la información");
}
});

}else{
    advertenciaProceso("Debe seleccionar un registro");
}
}

function ejecucionEvento(IDCampo, datos,parm){
 
    $.ajax({
        cache:false,
        type: "POST",
        url: "DefaultV2.aspx/EventoDinamico",
        data: '{id:"' + IDCampo + '", datos:"' + datos + '",parm:"'+parm+'"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
           
            if (data.d.startsWith("0")) {
                errorProceso(data.d.replace("0:", ""));
            } else if (data.d.startsWith("REDIRECCION")) {
                var dobleRedireccion;
                var resultadoEvento = data.d.split("|");
                for (var i = 0; i < resultadoEvento.length; i++) {
                    if (data.d.endsWith("{_self}")) {
                        tipoRedirecciona = "_self";
                    } else if (data.d.endsWith("{_blank}")) {
                        tipoRedirecciona = "_blank";
                    } else if (data.d.endsWith("{_popup}")) {
                        tipoRedirecciona = "_popup";
                    } else if (data.d.endsWith("{_doble}")) {
                        tipoRedirecciona = "_doble";
                    } else if (data.d.endsWith("{_reload}")) {
                        tipoRedirecciona = "_reload";
                    } else if (data.d.endsWith("{_alert}")) {
                        tipoRedirecciona = "_alert";
                    } else if (data.d.endsWith("{_redirecBandejaUPA}")) {
                        tipoRedirecciona = "_redirecBandejaUPA";
                    } else if (data.d.endsWith("{_alertTimer}")) {
                        tipoRedirecciona = "_alertTimer";
                    } else if (data.d.endsWith("{_alertClosePopup}")) {
                        tipoRedirecciona = "_alertClosePopup";
                    }
                    data.d = data.d.replace("{" + tipoRedirecciona + "}", '');
                    if (tipoRedirecciona == "_self") {
                        location.href = data.d.substring(data.d.indexOf(":") + 1);
                    } else if (tipoRedirecciona == "_blank") {
                        hidePageLoad();
                        window.open(data.d.substring(data.d.indexOf(":") + 1), '_blank');
                    } else if (tipoRedirecciona == "_popup") {
                        hidePageLoad();
                        abrirModal(data.d.substring(data.d.indexOf(":") + 1), '');
                    } else if (tipoRedirecciona == "_doble") {
                        dobleRedireccion = data.d;
                    } else if (tipoRedirecciona == "_reload") {
                        location.reload(true);
                    } else if (tipoRedirecciona == "_alert") {
                        hidePageLoad();
                        correctoProceso(data.d.substring(data.d.indexOf(":") + 1));
                    } else if (tipoRedirecciona == "_redirecBandejaUPA") {
                        hidePageLoad();
                        var parametros = data.d.substring(data.d.indexOf(":") + 1).split('¬'); //0 bandeja Especifica, 1 = bandeja Mis Gestiones , 2 =Mensaje
                        redirecBandejaUPA(parametros[0], parametros[1], parametros[2]);
                    } else if (tipoRedirecciona=="_alertTimer") {
                        hidePageLoad();
                        var parametros = data.d.substring(data.d.indexOf(":") + 1).split('¬'); //0 mensaje, 1 = tipo , 3 =timer , 4 redireccion
                        procesoTimer(parametros[0], parametros[1], parseInt(parametros[2]), parametros[3]);
                    } else if (tipoRedirecciona =="_alertClosePopup") {
                        hidePageLoad();
                        var parametros = data.d.substring(data.d.indexOf(":") + 1).split('¬'); //0 mensaje, 1 = tipo , 3 =timer 
                        alertClosePopup(parametros[0], parametros[1], parametros[2]);
                    }
                    if (i == 1) {
                        var URL = dobleRedireccion.split("|");
                        var url1 = URL[0].substring(URL[0].indexOf(":") + 1);
                        var url2 = URL[1].substring(URL[1].indexOf(":") + 1);
                        dobleForm(url1, url2);
                        document.getElementById("sdf").className=""
                    }
                }
            } else if (data.d.startsWith("ResultadoEv")) {
                if (data.d.replace("ResultadoEv", "").startsWith("Consentimiento")) {
                    var datos = data.d.split("|");
                    $("#spnNUMERO_EVALUACION").append(datos[2]);
                    $("#spnRESULTADO").append(datos[3]);
                    var color;
                    var botones = '';
                    switch (datos[1]) {
                        case "-1":
                            color = "red";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "0":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-4":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-5":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "1":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-2":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-3":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-6":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-7":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-8":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-9":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        default:
                            break;
                    }
                    $("#divCOLOR_RESULTADO").attr("style", "background-color:" + color + "; color:black");
                    $("#divBOTONES_MODAL").append(botones);
                    $('#modal-resultadoEvaluacion').modal({ backdrop: 'static', keyboard: false })
                    $('#modal-resultadoEvaluacion').modal('show');
                } else if (data.d.replace("ResultadoEv", "").startsWith("SC")) {
                    var datos = data.d.split("|");
                    $("#spnNUMERO_EVALUACION").append(datos[2]);
                    $("#spnRESULTADO").append(datos[3]);
                    var color;
                    var botones = '';
                    switch (datos[1]) {
                        case "-1":
                            color = "red";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-11":
                            color = "red";
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[6] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Ver oferta comercial'>"
                            break;
                        case "0":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-4":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-5":
                            color = "yellow";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "1":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-2":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-3":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-6":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-7":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-8":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-9":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "0":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-4":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        case "-5":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[5] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Imprimir'>"
                            break;
                        default:
                            break;
                    }
                    $("#divCOLOR_RESULTADO").attr("style", "background-color:" + color + "; color:black");
                    $("#divBOTONES_MODAL").append(botones);
                    $('#modal-resultadoEvaluacion').modal({ backdrop: 'static', keyboard: false })
                    $('#modal-resultadoEvaluacion').modal('show');
                } else if (data.d.replace("ResultadoEv", "").startsWith("IL")) {
                    var datos = data.d.split("|");
                    $("#spnNUMERO_EVALUACION").append(datos[2]);
                    $("#spnRESULTADO").append(datos[3]);
                    var color;
                    var botones = '';
                    switch (datos[1]) {
                        case "-1":
                            color = "red";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-11":
                            color = "red";
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Ver oferta comercial'>"
                            break;
                        case "1":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-2":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-3":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-6":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-7":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-8":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-9":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "0":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-4":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-5":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        default:
                            break;
                    }
                    $("#divCOLOR_RESULTADO").attr("style", "background-color:" + color + "; color:black");
                    $("#divBOTONES_MODAL").append(botones);
                    $('#modal-resultadoEvaluacion').modal({ backdrop: 'static', keyboard: false })
                    $('#modal-resultadoEvaluacion').modal('show');
                }else if (data.d.replace("ResultadoEv", "").startsWith("GN")) {
                    var datos = data.d.split("|");
                    $("#spnNUMERO_EVALUACION").append(datos[2]);
                    $("#spnRESULTADO").append(datos[3]);
                    var color;
                    var botones = '';
                    switch (datos[1]) {
                        case "-1":
                            color = "red";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-primary' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-11":
                            color = "red";
                            botones += "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Ver oferta comercial'>"
                            break;
                        case "1":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-2":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-3":
                            color = "green";
                            botones = "<input type='button' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-success' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Continuar Gestión'>"
                            break;
                        case "-6":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-7":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-8":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-9":
                            color = "gray";
                            botones = "<input type='button' style='background-color: gray;color: white' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-default' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "0":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-4":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        case "-5":
                            color = "yellow";
                            botones = "<input type='button' style='background-color: yellow;color: black' id='btn_" + $("#ContentPlaceHolder1_hdfCodigoFormulario").val() + "_" + datos[4] + "' onclick='eventoDinamico(this)' class='btn btn-warning' data-parm='CG-" + $("#ContentPlaceHolder1_hdfCodigoGestion").val() + "' value='Visualizar en Bandeja'>"
                            break;
                        default:
                            break;
                    }
                    $("#divCOLOR_RESULTADO").attr("style", "background-color:" + color + "; color:black");
                    $("#divBOTONES_MODAL").append(botones);
                    $('#modal-resultadoEvaluacion').modal({ backdrop: 'static', keyboard: false })
                    $('#modal-resultadoEvaluacion').modal('show');
                }
                hidePageLoad();
            }
            else if (data.d.startsWith("AdvertenciaDocumento")) {
                hidePageLoad();
                var mensaje = data.d.substring(21, 1000);
                errorProceso(mensaje);
            } else if (data.d.startsWith("reloadGridModal")) {
                hidePageLoad();
                var parametros = data.d.replace("reloadGridModal", "").split("|");
                reloadGrid(parametros[0], parametros[1], '');
                $("#modal_" + parametros[2] + "_" + parametros[1]).modal('hide');
                limpiarDatos("modal_" + parametros[2] + "_" + parametros[1]);
            } else if (data.d.startsWith("Error")) {
                hidePageLoad();
                errorProceso(data.d);
            } else if (data.d.startsWith("Advertencia")) {
                hidePageLoad();
                advertenciaProceso(data.d.substring(12, 300));
				
            }
           
        },
        error: function (data) {
            alert("Error al ejecutar la acción del boton");
        }
    });
  
}

function limpiarDatos(id){
    fi = document.getElementById(id);
    controlPanel=fi.getElementsByClassName("form-control");
    for (var i = 0; i < controlPanel.length; i++) {
        control = controlPanel[i];
        var id = "#" + control.id;
        if (control.type=="select-one") {
            $("#"+control.id+" option").filter(function() {
                $("#"+control.id).val('0').trigger('change');
            });
        }
        else {
            $(id).val('');
        }
        
    }

}

function eventoDinamico(campo) {
    var validaClick= $("#ContentPlaceHolder1_hdfValidaClick").val();

    if (validaClick=="0") {
        $("#ContentPlaceHolder1_hdfValidaClick").val("1");
        var id;
        var datos = 'Inicio:'
        var tipoRedirecciona="";
        var idGestion= $("#ContentPlaceHolder1_hdfCodigoGestion").val();
        var idPanel;
        try {
            idPanel=$("#" + campo.id).parents('div').eq(3)["0"].attributes.id.value;
        }
        catch(err) {
            try {
                idPanel=$("#" + campo.id).parents('div').eq(4)["0"].attributes.id.value;
            } catch (e) {
                idPanel=$("#" + campo.id).parents('div').eq(5)["0"].attributes.id.value;
            }
        }
        if (campo.formNoValidate==true) {
            showPageLoad();
            ejecucionEvento(campo.id,datos,campo.dataset.parm);
        }else {
            if (verificar(idPanel)) {
                fi = document.getElementById(idPanel);
                controlPanel=fi.getElementsByClassName("form-control");
                for (var i = 0; i < controlPanel.length; i++) {
                    control = controlPanel[i];
                    var id = "#" + control.id;
                    var regex = new RegExp("\"", "g");
                    //var res = variable.replace(regex, "'");
                    if ($("#" + control.id).data("comentario") == '' || $("#" + control.id).data("comentario") == null && !control.disabled)
                    {
                        datos += id.replace("#", "") + "|" + $(id).val().replace(regex, "'") + "|" + $(id).data("code") + "¦";
                    }
                }
                //$(".form-control").each(function () {
                //    var id = "#" + this.id;
                //    datos += id.replace("#", "") + "|" + $(id).val() + "|" + this.dataset.code + "¦";
                //});
                showPageLoad();
                ejecucionEvento(campo.id,datos,campo.dataset.parm);
            };
        }
    }
    $("#ContentPlaceHolder1_hdfValidaClick").val("0");

}
function dobleForm(url1, url2) {
    window.open(url1, "childWindow", "width=1200, height=700, menubar=0, location=100, status=1, scrollbars=1");
    location.href = url2;
}

function showPageLoad() {
    $("#modalCarga").modal('show');
}

function hidePageLoad() {
    $("#modalCarga").modal('hide');
}


function verificar(id) {
    var rellenados = true;
    var totalValidadorCombinado=0;
    var campoCombinadoValidacion=0;
    try 
    {   
        fi = document.getElementById(id);
        controlesInput = fi.getElementsByClassName('form-control');
        controleSelect = fi.getElementsByTagName('select');
        for (i = 0; i < controlesInput.length; i++) {
            control = controlesInput[i];
            if (control.type == 'text' || control.type == 'number' || control.type == 'email' || control.type == 'textarea') {
                if (control.required) {
                    var tipoDiv;
                    try {
                        tipoDiv=$("#" + control.id).parents('div').eq(4)["0"].attributes.id.value;
                    } catch (e) {
                        tipoDiv="";
                        
                    }
                    if ($("#"+tipoDiv).attr("style")=="display:none") {
                        control.style.borderColor = '#e6e6e6';
                    } else {
                        if (control.value == "") {
                            rellenados = false;
                            control.style.borderColor = 'red';
                        } else {
                            if ($("#" + control.id).data( "range" )!='' && $("#" + control.id).data( "range" )!=null) {
                                var rango= $("#" + control.id).data( "range" );
                                var parametro= rango.split('|');
                                if (parseFloat(control.value.replace(',','').replace(',',''))<parseFloat(parametro[0]) || parseFloat(control.value.replace(',','').replace(',',''))>parseFloat(parametro[1])) {
                                    if(control.id.replace('txt', '').replace('_',' ')=="MONTO SOLICITADO"){
                                        alert("El campo " + control.id.replace('txt', '').replace('_',' ') + " debe estar en el rango configurado de Q" +formatNumber.new(parseFloat(parametro[0]).toFixed(2))+" a Q" + formatNumber.new(parseFloat(parametro[1]).toFixed(2)));
                                    }else if (control.id.replace('txt', '').replace('_',' ')=="PLAZO SOLICITADO") {
                                        alert("El campo " + control.id.replace('txt', '').replace('_',' ') + " debe estar en el rango configurado de " +parametro[0]+" a " + parametro[1]+ " Meses");
                                    }
                                    control.style.borderColor = 'red';
                                    rellenados=false;
                                }else {
                                    //rellenados = false;
                                    control.style.borderColor = '#e6e6e6';
                                }       
                            }
                            //else
                            //{
                            //    control.style.borderColor = '#e6e6e6';
                            //}
                            if (control.id.includes("TELEFONO") && control.id.includes("CELULAR")) {
                                var resultadoCelular= validaCelular(control.value);
                                if(!resultadoCelular){
                                    var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                    rellenados = false;
                                    control.style.borderColor = 'red';
                                    alert("El número ingresado en el campo " + campo + ": " + control.value + ", es incorrecto.")
                                }else {
                                    control.style.borderColor = '#e6e6e6';
                                }
    
                            }else if (control.id.includes("TELEFONO") && control.id.includes("OFICINA")) {
                                var resultadoOficina= validaOficina(control.value);
                                if(!resultadoOficina){
                                    var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                    rellenados = false;
                                    control.style.borderColor = 'red';
                                    alert("El número ingresado en el campo "+ campo.replace("OFICINA",'').trim() + ": " + control.value + " debe ser tipo línea fija.");
                                }else {
                                    control.style.borderColor = '#e6e6e6';
                                }
                            }else if (control.id.includes("TELEFONO") && !control.id.includes("OFICINA") && !control.id.includes("CELULAR") ) {
                                var resultadoTelefono= validaTelefono(control.value);
                                if(!resultadoTelefono){
                                    var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                    rellenados = false;
                                    control.style.borderColor = 'red';
                                    alert("El número ingresado en el campo " + campo + " debe ser válido.");
                                }else {
                                    control.style.borderColor = '#e6e6e6';
                                }
                            }else if (control.id.includes("G_")) {
                                if(!parseFloat(control.value)>0){
                                    rellenados = false;
                                    control.style.borderColor = 'red';
                                }
                            }else if (control.id.includes("DPI")) {
                                var cui = control.value.replace("-", "").replace("-", "");
                                if (cuiIsValid(cui)) {
                                    control.style.borderColor = '#e6e6e6';
                                }else {
                                    rellenados = false;
                                    control.style.borderColor = 'red';
                                }
    
                            }
                            if ($("#ContentPlaceHolder1_hdfCodigoEmpresa").val()=='UPA') {
                                var cf = $("#ContentPlaceHolder1_hdfCodigoFormulario").val();
                                if (control.id.includes("txtMONTO_SOLICITADO") && cf=="46") {
                                    var montoSolicitado =parseFloat($("#txtMONTO_SOLICITADO").val().replace(',','').replace(',',''));
                                    var limiteDisponible=parseFloat($("#txtCA_LIMITE_DISPONIBLE").val().replace(',','').replace(',',''));

                                    if (montoSolicitado>=limiteDisponible) {
                                        rellenados = false;
                                        control.style.borderColor = 'red';
                                        alert("El monto solicitado no debe ser mayor al limite disponible.");
                                        
                                    }else {
                                        control.style.borderColor = '#e6e6e6';
                                    }
                                }
                                if (control.id.includes("txtCA_FECHA_PRIMER_PAGO")) {

                                    if(returnDiasRango(control.value,30,45)){
                                        control.style.borderColor = '#e6e6e6';
                                    }else {
                                        control.style.borderColor = 'red';
                                        rellenados = false;
                                        alert("La fecha de primer pago no debe ser mayor a 45 dias ni menor a 30 dias.");
                                    }
                                }

                                if (cf == "10" || cf == "26" || cf == "31") {
                                    if (control.id.includes("txtANTIGUEDAD_EMPRESA")) {
                                        if (parseInt(control.value) > 0) {
                                            var fechaIngresoEmpresa = $("#txtFECHA_INGRESO_EMPRESA").val();
                                            if (fechaIngresoEmpresa != "") {
                                                if (returnAnios(fechaIngresoEmpresa, control.value)) {
                                                    control.style.borderColor = '#e6e6e6';
                                                } else {
                                                    control.style.borderColor = 'red';
                                                    rellenados = false;
                                                    alert("La Antigüedad de la empresa no debe ser menor a la fecha de ingreso a la empresa.");
                                                }
                                            }
                                        } else {
                                            rellenados = false;
                                            control.style.borderColor = 'red';
                                        }
                                    }
                                }
                            }
                        }
                        if (control.type=='email') {
                            if (!validarEmail(control.value)) {
                                control.style.borderColor = 'red';
                                rellenados=false;
                            }else {
                                control.style.borderColor = '#e6e6e6';
                            }
                        }
                        //else if (control.id.startsWith("txtTELEFONO")) {
                        //    if (control.id.contains("CELULAR")) {
                        //        rellenados= validaCelular(control.value);
                        //        if (rellenados) {
                        //            control.style.borderColor = '#e6e6e6';
                        //        }else {
                        //            control.style.borderColor = 'red';
                        //        }
                        //    }else if (control.id.contains("CASA")) {
                        //        rellenados=validaOficina(control.value);
                        //        if (rellenados) {
                        //            control.style.borderColor = '#e6e6e6';
                        //        }else {
                        //            control.style.borderColor = 'red';
                        //        }
                        //    }
                        //}
                    }
                }else {
                    var cf = $("#ContentPlaceHolder1_hdfCodigoFormulario").val();
                    if ($("#ContentPlaceHolder1_hdfCodigoEmpresa").val()=='UPA') {
                        if (cf>0) {
                            if (control.id.includes("SALARIO_LIQUIDO_MENSUAL") || control.id.includes("HONORARIOS_SERVICIOS_PROFESIONALES")) {
                                totalValidadorCombinado++; ///1 // 1 
                                if (control.value == "" || control.value=="0" || control.value=="0.00"){
                                    campoCombinadoValidacion++;
                                }
                                if (campoCombinadoValidacion == 2 && totalValidadorCombinado==2) {
                                    rellenados = false;
                                    //control.style.borderColor = 'red';
                                    alert("Es necesario ingresar 'Salario líquido mensual' u 'Honorarios por servicios profesionales'")
                                } else {
                                    control.style.borderColor = '#e6e6e6';
                                }
                            }
                        }
                        if (control.id.includes("txtCA_APORTACION") || control.id.includes("txtCA_AHORROS_CORRIENTE") ||control.id.includes("txtCA_AHORROS_PROGRAMADO") || control.id.includes("txtCA_PLAZOS_FIJOS") ) {
                            if (cf=='46') {
                                totalValidadorCombinado++; ///1 // 1 
                                if (control.value == "" || control.value=="0" || control.value=="0.00"){
                                    campoCombinadoValidacion++;
                                }
                                if (campoCombinadoValidacion == 4 && totalValidadorCombinado==4) {
                                    rellenados = false;
                                    //control.style.borderColor = 'red';
                                    alert("Es necesario ingresar alguno de los siguientes campos:  Aportación , Ahorros Corriente, Ahorros Programado , Plazos Fijos")
                                } else {
                                    control.style.borderColor = '#e6e6e6';
                                }
                            }
    
                        }
                    }
                    if (control.value!="" && control.value!=null) {
                        if (control.id.includes("TELEFONO") && control.id.includes("CELULAR")) {
                            var resultadoCelular= validaCelular(control.value);
                            if(!resultadoCelular){
                                var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                rellenados = false;
                                control.style.borderColor = 'red';
                                alert("El número ingresado en el campo " + campo + ": " + control.value + ", es incorrecto.")
                            }else {
                                control.style.borderColor = '#e6e6e6';
                            }
    
                        }else if (control.id.includes("TELEFONO") && control.id.includes("OFICINA")) {
                            var resultadoOficina= validaOficina(control.value);
                            if(!resultadoOficina){
                                var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                rellenados = false;
                                control.style.borderColor = 'red';
                                alert("El número ingresado en el campo "+ campo.replace("OFICINA",'').trim() + ": " + control.value + " debe ser tipo línea fija.");
                            }else {
                                control.style.borderColor = '#e6e6e6';
                            }
                        }else if (control.id.includes("TELEFONO") && !control.id.includes("OFICINA") && !control.id.includes("CELULAR") ) {
                            var resultadoTelefono= validaTelefono(control.value);
                            if(!resultadoTelefono){
                                var campo=control.id.replace("txt", "").replace("_"," ").replace("_"," ");
                                rellenados = false;
                                control.style.borderColor = 'red';
                                alert("El número ingresado en el campo " + campo + " debe ser válido.");
                            }else {
                                control.style.borderColor = '#e6e6e6';
                            }
                        }
                    }
                    if (control.type=='email') {
                        if (!validarEmail(control.value)) {
                            control.style.borderColor = 'red';
                            rellenados=false;
                        }else {
                            control.style.borderColor = '#e6e6e6';
                        }
                    }
                }
                        
            }
        }
    

        for (i = 0; i < controleSelect.length; i++) {
            control = controleSelect[i];
            if (control.required) {
                spanControl = fi.getElementsByClassName('select2-selection select2-selection--single');
                var tipoDiv;
                try {
                    tipoDiv=$("#" + control.id).parents('div').eq(4)["0"].attributes.id.value;
                } catch (e) {
                    //try {
                    //    tipoDiv=$("#" + control.id).parents('div').eq(4)["0"].attributes.id.value;
                    //} catch (ex) {
                    //    tipoDiv=$("#" + control.id).parents('div').eq(5)["0"].attributes.id.value;
                    //}
                    tipoDiv='';
                }
                if ($("#"+tipoDiv).attr("style")=="display:none") {
                    control.style.borderColor = '#e6e6e6';
                } else {
                    if (control.value == "0" || control.value == "" ) {
                        if (control.disabled || control.id=="lstDOCUMENTO") {
                            spanControl[i].style.borderColor = '#e6e6e6';
                        }else {
                            rellenados = false;
                            spanControl[i].style.borderColor = 'red';
                        }
                   
                    } else {
                        spanControl[i].style.borderColor = '#e6e6e6';
                    }
                }
            }
        }
    } catch (e) {
        rellenados=false;
        alert(e);
    }
   
    return rellenados;
}

function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        return true;
    } else {
        alert("El correo electrónico es incorrecto.");
        return false;
    }
}


function cargaDocumentoCorrecta() {
    swal({
        title: 'Documento Guardado Correctamente.',
        //text: ,
        type: 'success',
        timer: 1000,
        showConfirmButton: false
    }).then(
 function () { },
 function (dismiss) {
     if (dismiss === 'timer' || dismiss === 'esc' || dismiss === 'cancel' ||  dismiss === 'overlay') {
         document.location.reload(true);
     }
 }
     )
}

function generaPlanPagos(campoMonto, campoPlazo, campoPlan, boton){

    var parametros = {
        codigoGestion: $('#ContentPlaceHolder1_hdfCodigoGestion').val(),
        ofertaMonto: $('#' + campoMonto.id).val(),
        ofertaPlazo: $('#' + campoPlazo.id).val(),
    };
    $.ajax({
        type: 'POST',                               // tipo de llamada (POST, GET)
        url: 'OfertaComercialUPA.aspx/generaPlanPagos',                // el URL del método que vamos a llamar
        data: JSON.stringify(parametros),           // los parámetros en formato JSON
        contentType: "application/json; charset=utf-8",
        dataType: "json",                           // tipo de datos enviados al servidor
        success: function (data) {
            //UIkit.notification.closeAll();
            //UIkit.notification({ message: 'Plan de pagos generado correctamente.', pos: 'bottom-center', status: 'primary' });
            $("#" + campoPlan.id).html("");
            $("#" + campoPlan.id).html(data.d);
        },
        error: function (req, stat, err) {          // función que se va a ejecutar si el pedido falla
            alert("Error de conexión al generar el plan de pagos");
        }
    });

}


function alertClosePopup(mensaje, tipo, tiempo) {
    swal({
        title: mensaje,
        //text: ,
        type: tipo,
        timer: tiempo,
        allowOutsideClick: false,
        showConfirmButton: false
    }).then(
        function () {
            window.close();
        },
        function (dismiss) {
            if (dismiss === 'timer' || dismiss === 'esc' || dismiss === 'cancel' ||  dismiss === 'overlay') {
                window.close();
            }
        }
    )
}



function procesoTimer(mensaje, tipo, tiempo, redireccion) {
    swal({
        title: mensaje,
        //text: ,
        type: tipo,
        // timer: tiempo,
        showConfirmButton: true,
        confirmButtonText: 'OK',
    }).then(
        function () {
            location.href = redireccion;
        },
        function (dismiss) {
            if (dismiss === 'timer') {
                location.href = redireccion;
            }
            if (dismiss === 'esc') {
                location.href = redireccion;
            }
            if (dismiss === 'cancel') {
                location.href = redireccion;
            }
        }
    )
}


function modificaDocumento(input, codigoGestion, id, cf) {
    showPageLoad();
    var result;
    var tamanio;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            tamanio = parseFloat(e.loaded);
            result = e.target.result;
            $.ajax({
                async: false,
                type: "POST",
                url: "DefaultV2.aspx/gcLUOWSA3bpDScLDLfWCMgcXpIKrGr1u",
                data: '{documento:"' + result + '", gestion:"' + codigoGestion + '", parametros:"' + input.id + '",cf:"' + cf + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    hidePageLoad();
                    if (data.d.startsWith("Correcto")) {
                        correctoProceso("Guardado correctamente");
                        //$("#" + input.id).val('');
                    } else if (data.d.startsWith("Incorrecto")) {
                        errorProceso(data.d);
                        //$("#" + input.id).val('');
                    } else if (data.d.startsWith("Tamaño")) {
                        var mensaje = data.d.substring(7, 100);
                        errorProceso(mensaje);
                        //  $("#" + input.id).val('');
                    } else if (data.d.startsWith("Ext")) {
                        var mensaje = data.d.substring(4, 100);
                        errorProceso(mensaje);
                        //  $("#" + input.id).val('');
                    }
                },
                error: function (data) {
                    alert("Error de conexión al subir el documento");
                }
            });
        }
        reader.readAsDataURL(input.files[0]);
    }

    

}

function cargaDocumento(input) {
    showPageLoad();
    var result;
    var tamanio;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            tamanio=parseFloat(e.loaded);
            result = e.target.result;
            var id = $("#lstDOCUMENTO").val();
            if (id=="0") {
                advertenciaProceso("Debe adjuntar la documentación requerida.");
                $("#"+input.id).val('');
            } else {
                var codigoGestion = $("#ContentPlaceHolder1_hdfCodigoGestion").val();
                var codigoFormulario = $("#ContentPlaceHolder1_hdfCodigoFormulario").val();
                if ((tamanio) > 104857600) {
                    errorProceso("El sistema no admite la carga archivos de mas de 100 MB");
                    $("#" + input.id).val('');
                } else {
                    var resultadoValidacion;
                    $.ajax({
                        async: false,
                        type: "POST",
                        url: "DefaultV2.aspx/comprobarExistenciaDocumento",
                        data: '{codigoGestion:"' + codigoGestion + '", nombreDocumento:"' + id + '", codigoFormulario:"' + codigoFormulario +'"}',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            resultadoValidacion = data.d;
                        },
                        error: function (data) {
                            errorProceso("Error de conexión al subir el documento");
                        }
                    });

                    if (resultadoValidacion) {
                        swal({
                            title: 'Advertencia',
                            text: "No puede agregar más archivos. \n ¿Desea eliminar el existente?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, eliminar el existente.',
                            cancelButtonText: 'Cancelar.'
                        }).then((resultAlert) => {
                            if (resultAlert) {
                                swal.showLoading();
                        $.ajax({
                            async: false,
                            type: "POST",
                            url: "DefaultV2.aspx/gcLUOWSA3bpDScLDLfWCMgcXpIKrGr1u",
                            data: '{documento:"' + result + '", gestion:"' + codigoGestion + '", parametros:"' + id + '",cf:"' + codigoFormulario + '"}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                // hidePageLoad();
                                if (data.d.startsWith("Correcto")) {
                                    cargaDocumentoCorrecta();
                                } else if (data.d.startsWith("Incorrecto")) {
                                    errorProceso(data.d);
                                    $("#" + input.id).val('');
                                } else if (data.d.startsWith("Tamaño")) {
                                    var mensaje = data.d.substring(7, 100);
                                    errorProceso(mensaje);
                                    $("#" + input.id).val('');
                                } else if (data.d.startsWith("Ext")) {
                                    var mensaje = data.d.substring(4, 100);
                                    errorProceso(mensaje);
                                    $("#" + input.id).val('');
                                }
                            },
                            error: function (data) {
                                alert("Error de conexión al subir el documento");
                                //errorProceso("");
                            }
                        });
                    }
                })
                    } else {
                        $.ajax({
                            async: false,
                            type: "POST",
                            url: "DefaultV2.aspx/gcLUOWSA3bpDScLDLfWCMgcXpIKrGr1u",
                            data: '{documento:"' + result + '", gestion:"' + codigoGestion + '", parametros:"' + id + '",cf:"' + codigoFormulario + '"}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                // hidePageLoad();
                                if (data.d.startsWith("Correcto")) {
                                    cargaDocumentoCorrecta();
                                } else if (data.d.startsWith("Incorrecto")) {
                                    errorProceso(data.d);
                                    $("#" + input.id).val('');
                                } else if (data.d.startsWith("Tamaño")) {
                                    var mensaje = data.d.substring(7, 100);
                                    errorProceso(mensaje);
                                    $("#" + input.id).val('');
                                } else if (data.d.startsWith("Ext")) {
                                    var mensaje = data.d.substring(4, 100);
                                    errorProceso(mensaje);
                                    $("#" + input.id).val('');
                                }
                            },
                            error: function (data) {
                                alert("Error de conexión al subir el documento");
                            }
                        });
        }
               
                   
    }
}
            
}
reader.readAsDataURL(input.files[0]);
}
hidePageLoad();
$("#" + input.id).val('');
}

function mostrarDiv(div, valor, campo){
    var valorCampo= $("#"+campo.id).val();
    var condiciones= valor.split("|");
    var resultado=false;
    for (var i = 0; i < condiciones.length; i++) {
        if(valorCampo==condiciones[i]){
            resultado=true;
        }
    }
    if (resultado) {
        $("#"+ div.id).attr("style","display:initial");
    }else {
        $("#"+ div.id).attr("style","display:none");
    }

}
function mostrarDivPostBack(div, valor, campo){
    var valorCampo= $("#"+campo).val();
    var condiciones= valor.split("|");
    var resultado=false;
    for (var i = 0; i < condiciones.length; i++) {
        if(valorCampo==condiciones[i]){
            resultado=true;
        }
    }
    if (resultado) {
        $("#"+ div).attr("style","display:initial");
    }else {
        $("#"+ div).attr("style","display:none");
    }

}

function returnAnios(fecha, anio){
    var resultado=false;
    $.ajax({
        async:false,
        type: "POST",
        url: "DefaultV2.aspx/calculaAnio",
        data: '{fecha:"' + fecha + '", año:"' + anio + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d) {
                resultado=true;
            }else {
                resultado=false;
            }
        },
        error: function (data) {
            alert(data.d);
        }
    });
    return resultado;
}

function returnDiasRango(fecha, diaInicio, diaFin){
    var resultado=false;
    $.ajax({
        async:false,
        type: "POST",
        url: "DefaultV2.aspx/calculaDiasRango",
        data: '{fecha:"' + fecha + '", diaInicio:"' + diaInicio + '", diaFin:"'+diaFin+'"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d) {
                resultado=true;
            }else {
                resultado=false;
            }
        },
        error: function (data) {
            alert(data.d);
        }
    });
    return resultado;
}






function habilitarCampos(campo,valores, controles){
    var listadoControles= controles.split("|");
    var listadoValores= valores.split("|");
    var resultado=false;
    if ($("#"+ campo.id).val()!="") {
    
        for (var i = 0; i < listadoControles.length; i++) {
            for (var ii = 0; ii < listadoValores.length; ii++) {
                if (campo.id.startsWith("txtFECHA")) {
                    resultado=returnAnios( $("#"+ campo.id).val(),listadoValores[ii]);
                }
                else
                {
                    if ($("#"+ campo.id).val()==listadoValores[ii]) {
                        resultado=true;
                    }
                }
                if (resultado) {
                    $("#"+ listadoControles[i]).removeAttr("disabled");
                }else {
                    $("#"+ listadoControles[i]).attr("disabled","true");
                    $("#"+ listadoControles[i]).val("");
                }
            }
        }
    }
}

function redirecBandejaUPA(bandejaEspecifica, bandejaDefault, mensaje) {
    //0 bandeja Especifica, 1 = bandeja Mis Gestiones , 2 =Mensaje
    swal({
        //title: 'Atención!',
        text: mensaje,
        type: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO'
    }).then((resultAlert) => {
        if (resultAlert) {
            location.href = bandejaEspecifica;
}
}, function (dismiss) {
    if (dismiss == 'cancel' || dismiss == 'esc'  ) {
        location.href = bandejaDefault;
    }
})
}

