//Esto es lo de HIGHCHARTS
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 50
            }
        },
        title: {
            text: 'Relación de Graduados respecto al Tipo de Titulación'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Total',
            data: [
                ['Técnico', 23],
                ['Tecnólogo', 87]
            ]
        }]
    });
});
//Aqui termina lo de HIGHCHARTS

//Esta es la consulta al servicio API REST
function Cregistros(elemento){
    $.ajax({
        dataType: "json",
        //url:'getData.json',
        url: 'http://senaegresados.tk/AutomaticApiRest/getData.php?t=Egresados',
}).done(function () {
    var items = [];
    //$.each(Object , function (k, val ) {
        $.each(data, function (val) {

            items.push("<li><a>");
            items.push("<h2>" + val.Nombres + " " + val.Apellidos + "</h2>");
            items.push("<p><strong>" + val.Tipo_Documento + " : " + val.No_Documento + "</strong></p>");
            items.push("<p>" + val.Celular + " - " + val.Correo_MiSena + " - " + val.Correo_Electronico + "</p>");
            items.push("<p>" + val.Direccion + " - " + val.Barrio + "</p>");
            items.push("<p class='ui-li-aside'>Ficha: <strong>" + val.Ficha + "</strong></p>");
            items.push("</a></li>")

        //});
    });
    var container = document.getElementById(elemento);
    $("<ul/>", {
        "id": "List", "data-role": "listview", "data-inset": "true", "data-autodividers": "true", "data-filter": "true",
        html: items.join("")
    }).appendTo(container);
})
};