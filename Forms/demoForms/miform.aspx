<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="miform.aspx.cs" Inherits="demoForms.miform" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
    <script src="../assets/js/sweet-alert/sweetalert.min.js"></script>
    <!--Datatable js-->
    <script src="../assets/js/datatables/jquery.dataTables.min.js"></script>
    <script> 


        function pintarCampos(json) {
            try {
                let titulo = json.valor.nombre;
                let descripcion = json.valor.descripcion;
                let htmlTitulo = `<h3>${titulo}<small>${descripcion}</small></h3>`;
                $("#divTitulo").html(htmlTitulo);
                let htmlCampo = '';
                let scriptAuxIni = '$(document).ready(function () {';
                let script = '';
                let scriptAuxFin = '});';
                $.each(json.valor.campos, function (i, campo) {
                    let idCampo = campo.idCampo;
                    let idTipoCampo = campo.idTipoCampo;
                    let idTipoDato = campo.idTipoDato;
                    let tabIndex = campo.tabIndex;
                    let etiqueta = campo.etiqueta;
                    let valor = campo.valor;
                    let texto = campo.texto;
                    let placeHolder = campo.placeHolder;
                    let longitudMinima = campo.longitudMinima;
                    let longitudMaxima = campo.longitudMaxima;
                    let valMinimo = campo.valMinimo;
                    let valMax = campo.valMax;
                    let mascara = campo.mascara;
                    let esRequerido = campo.esRequerido;
                    let tipoOrigen = campo.tipoOrigen;
                    let valorLista = campo.valorLista;
                    let elementoJson = campo.elementoJson;
                    let seleccionMultiple = campo.seleccionMultiple;
                    let urlWebBuscar = campo.urlWebBuscar;
                    let validacionScript = campo.validacionScript;
                    let visible = campo.visible;
                    let soloLectura = campo.soloLectura;
                    let numeroLineas = campo.numeroLineas;
                    let aumentarEn = campo.aumentarEn;
                    let expresionRegular = campo.expresionRegular;
                    let tamanioDiv = campo.tamanioDiv;
                    let elementoJsonPadre = campo.elementoJsonPadre;

                    let htmlTamanio = "col-md-6 mb-3";
                    
                    let htmlAdd = '';
                    let htmlVisible = '';

                    if (parseInt(tamanioDiv) == 12) {
                        htmlTamanio = "col-md-12 mb-6";
                    }

                    if (esRequerido == 1 && visible == 1) {
                        htmlAdd += ` required`
                    }

                    let camposRelacionados = json.valor.campos.find(item => item.elementoJsonPadre == elementoJson);
                    if (camposRelacionados) {
                        console.log("Campos relacionados", camposRelacionados);
                        console.log("Nombre campo", elementoJson);
                        if (idTipoCampo != 4) {
                            script += `$("#${elementoJson}").change(function () {
                        getItemsListaConParametros('${camposRelacionados.elementoJson}','${camposRelacionados.valorLista}','${elementoJson}');
                        });`;
                        } else {
                            script += `$("#hidden${elementoJson}").bind("change",function () {
                        getItemsListaConParametros('${camposRelacionados.elementoJson}','${camposRelacionados.valorLista}','hidden${elementoJson}');
                        });`;
                        }

                    }
                    
                    if (tipoOrigen == 2) {
                        if (elementoJsonPadre.trim().length <= 0) {
                            script += ` getItemsListaSinParametros('${elementoJson}','${valorLista}');`;
                        }
                    }
                    
                    if (soloLectura > 0) {
                        htmlAdd += ` readonly="readonly"`
                    }

                    if (visible == 0) {
                        htmlVisible = ` style="display: none"`;
                    }
                    if (idTipoCampo == 1) {

                        if (texto.trim().length > 0) {
                            htmlAdd += ` value="${texto}"`;
                        }

                        if (idTipoDato == 1) {
                            if (expresionRegular.trim().length > 0) {
                                htmlAdd += ` pattern="${expresionRegular}"`;
                            }

                            if (parseInt(longitudMinima) > 0) {
                                htmlAdd += ` minlength="${longitudMinima}"`;
                            }

                            if (parseInt(longitudMaxima) > 0) {
                                htmlAdd += ` maxlength="${longitudMaxima}"`;
                            }

                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="text" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 2) {
                            if (parseInt(valMinimo) >= 0) {
                                htmlAdd += ` min="${valMinimo}"`;
                            }
                            if (parseInt(valMax) >= 0) {
                                htmlAdd += ` max="${valMax}"`;
                            }
                            if (parseInt(aumentarEn) > 0) {
                                htmlAdd += ` step="${aumentarEn}"`;
                            }
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="number" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 3) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="email" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 4) {

                            if (valMinimo.length == 10) {
                                htmlAdd += ` min="${valMinimo}"`;
                            }
                            if (valMax.length == 10) {
                                htmlAdd += ` max="${valMax}"`;
                            }

                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="date" class="form-control" id="${elementoJson}" name="${elementoJson}" ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 5) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="time" class="form-control" id="${elementoJson}" name="${elementoJson}" ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 6) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="text" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" ${htmlAdd} pattern="^[2|3|4|5|6|7][0-9]{7}$" minlength="8" maxlength="8">
                                </div>
                                `;
                        } else if (idTipoDato == 7) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="password" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}"  ${htmlAdd}>
                                </div>
                                `;
                        } else if (idTipoDato == 8) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <input type="url" class="form-control" id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" ${htmlAdd}>
                                </div>
                                `;
                        }
                    } else if (idTipoCampo == 2) {

                        if (expresionRegular.trim().length > 0) {
                            htmlAdd += ` pattern="${expresionRegular}"`;
                        }

                        if (parseInt(longitudMinima) > 0) {
                            htmlAdd += ` minlength="${longitudMinima}"`;
                        }

                        if (parseInt(longitudMaxima) > 0) {
                            htmlAdd += ` maxlength="${longitudMaxima}"`;
                        }

                        htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                <textarea id="${elementoJson}" name="${elementoJson}" placeholder="${placeHolder}" rows="${numeroLineas}" class="form-control" ${htmlAdd}>${texto.trim()}</textarea>
                                </div>
                                `;
                    } else if (idTipoCampo == 3) {
                        if (parseInt(tipoOrigen) == 1) {
                            let itemsLista = JSON.parse(valorLista);
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${etiqueta}</label>
                                  <select class="form-control custom-select" id="${elementoJson}" name="${elementoJson}" ${htmlAdd}>
                                        <option value="">Seleccione</option>
                                `;
                            $.each(itemsLista, function (i, data) {
                                htmlCampo += `
                                        <option value="${data.valor}">${data.text}</option>
                                `;
                            });
                            htmlCampo += `</select></div>`;
                        } else if (parseInt(campo.tipoOrigen) == 2) {
                            htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                <label for="texto">${elementoJson}</label>
                                  <select class="form-control custom-select" id="${elementoJson}" name="${elementoJson}" ${htmlAdd}>
                                        <option value="">${elementoJsonPadre}</option>
                                    </select></div>`;
                        }
                    } else if (idTipoCampo == 4) {
                        htmlCampo += `
                                <div class="${htmlTamanio}" ${htmlVisible}>
                                    <div class="form-group">
                                        <label>${etiqueta}</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="${elementoJson}" name="${elementoJson}"  readonly="readonly">
                                            <div class="input-group-append">
                                                <a class="btn btn-info" id="btn${elementoJson}" name="btn${elementoJson}" onclick="getModal('${elementoJson}','${urlWebBuscar}')"> <span class="icon-share"></span> Buscar</a>
                                                <input class="form-control" type="hidden" id="hidden${elementoJson}" name="hidden${elementoJson}" style="display: none;" value="0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                    }
                });
                let jsScript = document.createElement("script");
                jsScript.text = scriptAuxIni + script + scriptAuxFin;
                document.getElementsByTagName('head')[0].appendChild(jsScript)
                $("#divCampoFormulario").html(htmlCampo);
            }
            catch (error) {
                swal('Error', error.message, 'warning');
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

        function getItemsListaConParametros(elementoJson, nombreSp, elementoPadre) {
            let parametro = $(`#${elementoPadre}`).val();
            $(`#${elementoJson}`).empty();
            if (parametro.length > 0) {
                getJson(JSON.stringify({ nombreSp: nombreSp, parametro: parametro }), "miform.aspx/getItemsLista").then(response => {
                    let htmlOptions = '';
                    if (response.codigo == 0) {
                        htmlOptions = `<option value="">Seleccione</option>`;
                        $.each(response.valor, function (i, item) {
                            htmlOptions += `<option value="${item.value}">${item.texto}</option>`;
                        });
                        $(`#${elementoJson}`).prepend(htmlOptions);
                    } else {
                        htmlOptions = `<option value="">No existen registros</option>`;
                        $(`#${elementoJson}`).prepend(htmlOptions);
                        swal("Alerta", response.mensaje, "error");
                    }
                }).catch(error => {
                    swal("Alerta", error, "warning");
                });
            }
        }

        function getItemsListaSinParametros(elementoJson, nombreSp) {
            $(`#${elementoJson}`).empty();
            getJson(JSON.stringify({ nombreSp: nombreSp, parametro: null }), "miform.aspx/getItemsLista").then(response => {
                let htmlOptions = '';
                if (response.codigo == 0) {
                    htmlOptions = `<option value="">Seleccione</option>`;
                    $.each(response.valor, function (i, item) {
                        htmlOptions += `<option value="${item.value}">${item.texto}</option>`;
                    });
                    $(`#${elementoJson}`).prepend(htmlOptions);
                } else {
                    htmlOptions = `<option value="">No existen registros</option>`;
                    $(`#${elementoJson}`).prepend(htmlOptions);
                    swal("Alerta", response.mensaje, "error");
                }
            }).catch(error => {
                swal("Alerta", error, "warning");
            });
        }



    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:HiddenField ID="hidIdFormulario" runat="server" Value="0" ClientIDMode="Static" />
    <div class="container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6" id="divTitulo">
                </div>
                <div class="col-lg-6">
                    <ol class="breadcrumb pull-right">
                        <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
                        <li class="breadcrumb-item">Formulario</li>
                        <li class="breadcrumb-item active">1039</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="form-builder">
        <div class="row">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h5>INGRESO DE INFORMACIÓN</h5>
                    </div>
                    <div class="card-body">
                        <div class="row" id="divCampoFormulario">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary" id="btnRegistrar" name="btnRegistrar" onclick="registrarFormulario()">Registrar</button>
                        <input type="reset" class="btn btn-light" value="Cancelar">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade bd-example-modal-lg" id="modalBusqueda" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <input id="txtCodigoModal" type="hidden" value="0" />
        <input id="txtElementoJson" type="hidden" value="" />
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="tituLoModal"></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label id="TituloDivModal"></label>
                        <div class="input-group">
                            <input type="search" class="form-control" id="txtCriterioBusqueda" name="txtCriterioBusqueda">
                            <div class="input-group-append">
                                <a class="btn btn-info" id="btnBuscar" name="btnBuscar" onclick="getBusquedaModal()"><span class="fa fa-search"></span>Buscar</a>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap" id="tblModal">
                            <thead id="tbTitulo">
                            </thead>
                            <tbody id="tBody">
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script>


        function getModal(elementoJson, idModal) {
            $("#tblModal_wrapper").hide();
            $("#tbTitulo").empty();
            $("#tBody").empty();
            $("#txtCodigoModal").val(0);
            $("#txtCriterioBusqueda").val('')
            $("#txtElementoJson").val(elementoJson);
            getJson(JSON.stringify({ idModal: idModal }), "miform.aspx/getInfoModal").then(response => {
                if (response.codigo == 0) {
                    $("#TituloDivModal").html(response.valor[0].textoAyuda);
                    $("#txtCodigoModal").val(idModal);
                    $("#tituLoModal").html(response.valor[0].nombre);
                    $('#modalBusqueda').modal('show');
                    $('#txtCriterioBusqueda').attr("placeholder", response.valor[0].textoAyuda);
                } else {
                    swal("Alerta", response.mensaje, "error");
                }
            }).catch(error => {
                swal("Alerta", error, "warning");
            });
        }

        function getBusquedaModal() {
            $("#tbTitulo").empty();
            $("#tBody").empty();
            let idModal = $("#txtCodigoModal").val();
            let parametro = $("#txtCriterioBusqueda").val();

            if (parametro.trim().length > 0) {
                let tituloAgregado = false;
                let nombreTitulos = '';
                let htmlBody = '';
                getJson(JSON.stringify({ idModal: idModal, parametro: parametro }), "miform.aspx/getBusquedaModal").then(response => {
                    if (response.codigo == 0) {
                        $.each(response.valor, function (i, fila) {
                            let titulo = fila;
                            if (!tituloAgregado) {
                                let htmlTitulo = '<tr>';
                                for (let key in titulo) {
                                    htmlTitulo += `<th>${key}</th>`;
                                    nombreTitulos += key + '|';
                                }
                                htmlTitulo += `<th></th>`;
                                htmlTitulo += '</tr>';
                                $("#tbTitulo").html(htmlTitulo);
                                tituloAgregado = true;
                            }

                            htmlBody += '<tr>';
                            let codigo = '';
                            let descripcion = '';
                            let arregloText = nombreTitulos.split('|');
                            for (let i = 0; i < (arregloText.length - 1); i++) {
                                let llave = arregloText[i];
                                htmlBody += '<td>' + fila[llave] + '</td>';

                                if (i == 0) {
                                    codigo = fila[llave];
                                }
                                if (i == 1) {
                                    descripcion = fila[llave];
                                }
                            }
                            htmlBody += `<td class="text-right">
                                        <a class="icon" href="javascript:void(0)"></a>
                                        <a href="javascript:void(0)" onclick="agregarValor(${codigo},'${descripcion}');" class="btn btn-primary btn-sm"><i
                                            class="fa fa-pencil"></i>Seleccionar</a>
                                    </td>`;
                            htmlBody += '</tr>';
                        });
                        $("#tblModal").dataTable().fnDestroy();
                        $("#tBody").html(htmlBody);
                        $('#tblModal').DataTable({
                            "searching": false,
                            "bLengthChange": false,
                            "bAutoWidth": false,
                            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                            language: {
                                processing: "Cargando información",
                                search: "Filtrar por:",
                                lengthMenu: "Mostrar _MENU_ filas",
                                info: "Vizualización  _END_ de _TOTAL_ filas",
                                infoEmpty: "Vizualización del elemento 0 a 0 de 0 filas",
                                infoFiltered: "(Filtrado de _MAX_ filas en total)",
                                infoPostFix: "",
                                loadingRecords: "Cargando...",
                                zeroRecords: "No se logró encontrar ninguna coincidencia",
                                emptyTable: "Aucune donnée disponible dans le tableau",
                                paginate: {
                                    first: "Primera",
                                    previous: "Anterior",
                                    next: "Siguiente",
                                    last: "Ultima"
                                },
                                aria: {
                                    sortAscending: ": active para ordenar la columna en orden ascendente",
                                    sortDescending: ": active para ordenar la columna en orden descendente"
                                }
                            }
                        });
                    } else {
                        swal("Alerta", response.mensaje, "error");
                    }
                }).catch(error => {
                    swal("Alerta", error, "warning");
                });
            } else {
                mostrarAlertaGeneral("Error", "Debe de ingresar un valor", "danger");
            }
        }

        function agregarValor(value, text) {
            let elementoJson = $("#txtElementoJson").val();
            console.log("elementoJson", text);
            $(`#${elementoJson}`).val(text);
            $(`#hidden${elementoJson}`).val(value);
            $('#modalBusqueda').modal('hide');
        }

        $(document).ready(function () {

        });

        function registrarFormulario() {
            let miForm = document.getElementById('divCampoFormulario');
            let campoValue = new Array();
            let infoCampo;
            let controlesInput = miForm.getElementsByClassName("form-control")
            for (i = 0; i < controlesInput.length; i++) {
                let control = controlesInput[i];
                console.log("Control", control);
                let elementoJson =''+ control.id;
                let valor = '';
                let texto = '';
                
                if (control.type != 'hidden') {
                    console.log("control.type", control.type);
                    if (control.readOnly !== true) {
                       
                        if (control.type == "select-one") {
                            valor = $(`#${elementoJson}`).val();
                            texto = $(`#${elementoJson} option:selected`).text();;
                        } else {
                            valor = $(`#${elementoJson}`).val();
                            texto = $(`#${elementoJson}`).val();
                        }
                        infoCampo = {
                            elementoJson: elementoJson,
                            valor: valor,
                            texto: texto
                        };
                        campoValue.push(infoCampo);
                    }
                }
               
                if (control.type == 'hidden') {
                    valor = $(`#${elementoJson}`).val();
                    let idInput = elementoJson.replace('hidden', '');
                    texto = $(`#${idInput}`).val();
                    elementoJson = idInput;
                    console.log("data", idInput);
                    infoCampo = {
                        elementoJson: elementoJson,
                        valor: valor,
                        texto: texto
                    };
                campoValue.push(infoCampo);
                }

                
                
            }

            let idForm = $("#hidIdFormulario").val();
            getJson(JSON.stringify({ idForm: idForm, data: campoValue}), "miform.aspx/regForm").then(response => {
                if (response.codigo == 0) {
                } else {
                    swal("Alerta", response.mensaje, "error");
                }
            }).catch(error => {
                swal("Alerta", error, "warning");
            });
            console.log("elementoJson", campoValue);
        }

    </script>
</asp:Content>
