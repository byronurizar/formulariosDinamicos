<%@ Page Title="" Language="C#" MasterPageFile="~/principal.Master" AutoEventWireup="true" CodeBehind="frm.aspx.cs" Inherits="demoForms.frm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
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
                                    <button type="submit" class="btn btn-primary" id="btnRegistrar" name="btnRegistrar">Registrar</button>
                                    <input type="reset" class="btn btn-light" value="Cancelar">
                                </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            $("#btnRegistrar").click(function (e) {
                console.log("e",e);

                let infoFormulario;
                infoFormulario = JSON.parse(localStorage.getItem("infoForms")) || [];
                let ListvalorCampos = new Array();

                $.each(infoFormulario.campos, function (i, itemCampo) {
                    let campo = JSON.parse(itemCampo);

                    let valorCampo = '';
                    if (campo.tipoCampo == 7) {
                        valorCampo = $(`#${campo.id} option:selected`).text();;
                    } else {
                        valorCampo=$(`#${campo.id}`).val();
                    }

                    let agregarCampo = true;
                    if (campo.required == 1) {
                        if (valorCampo.trim() <=0) {
                            agregarCampo = false;
                            mostrarAlertaGeneral("Error", campo.titulo + " es requerido ", "danger");
                        }
                    }

                    if (agregarCampo == true) {
                        let nuevaInfo = {
                            tipoCampo: campo.tipoCampo,
                            tamanio: campo.tamanio,
                            titulo: campo.titulo,
                            id: campo.id,
                            value: valorCampo,
                            numeroLineas: campo.numeroLineas,
                            readonly: campo.readonly,
                            maxlength: campo.maxlength,
                            minlength: campo.minlength,
                            min: campo.min,
                            max: campo.max,
                            step: campo.step,
                            required: campo.required,
                            pattern: campo.pattern,
                            placeholder: campo.placeholder,
                        };

                        ListvalorCampos.push(nuevaInfo);
                    }

                });

                console.log("Info CAmpo con valores", ListvalorCampos);

                registrar(JSON.stringify({ parametro: ListvalorCampos }), 'frm.aspx/registrarFormulario').then(response => {
                    swal("Alerta", response, "warning");
                }).catch(error => {
                    console.log("dataProduccionxHora Error", error);
                    swal("Alerta", error, "warning");
                });

            });
        });
        pintarCampos().then(res => {
            $("#divCampoFormulario").html(res);
        }).catch(error => {
            console.log("Data error", error);
        });

        var registrar = (data, metodo) => {
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
                                </div>
                                `;
                            } else if (tipoCampo == 1) {

                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <textarea id="${id}" name="${id}" placeholder="${placeholder}" value="${value}" pattern="${pattern}" ${htmlAdd} rows="${numeroLineas}" class="form-control"></textarea>
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
                                </div>
                                `;
                            }
                            if (tipoCampo == 5) {
                                htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="number" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                </div>
                                `;
                            }
                        }

                        if (tipoCampo == 3) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="time" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                </div>
                                `;
                        }
                        if (tipoCampo == 4) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="email" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                </div>
                                `;
                        }

                        if (tipoCampo == 6) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="number" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                </div>
                                `;
                        }
                        if (tipoCampo == 9) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="password" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
                                </div>
                                `;
                        }

                        if (tipoCampo == 10) {
                            htmlCampo += `
                                <div class="${htmlTamanio}">
                                <label for="texto">${titulo}</label>
                                <input type="url" class="form-control" id="${id}" name="${id}" value="${value}" ${htmlAdd}>
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
                            htmlCampo += '</select></div>';
                        }
                    });
                    resolver(htmlCampo);

                } catch (error) {
                    reject(error);
                }
            });
        }
    </script>
</asp:Content>
