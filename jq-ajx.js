// var x=$(document);
// x.ready(inicializar());
// function inicializar(){
// var x;
// x=("#hola");
// x.click(clickhecho);
// }

// function clickhecho(){
//     var x;
//     x=$("#hola");
//     x.css("color","green");
// }

$(document).ready(function(){
    $("#hola").click(function(){
        $("#hola").css("color","green");
        $("#hola").css("background-color","yellow");
        $("#hola").css("border","1px solid red");
    });
    
    $("#pri").click(function(){
        $(".primario").css("background-color","green");
    });

    $("h1").click(function(){
        $(this).css("color", "orange");
    });


    $("#most").click(function(){
        $(".divmos").toggle();
    });

    $("#link").click(function(){
        $("[href]").css("background-color","aqua");
    });
    //Mostrar-Ocultar
    $("#mostrar").click(function(){
        $("#fade").fadeIn("fast");
    });
    $("#ocultar").click(function(){
        $("#fade").fadeOut("slow");
    });

    //eventos del mouse
    $("#inout").mouseover(function(){
        $("#inout").css("background-color", "red");
    });
    $("#inout").mouseout(function(){
        $("#inout").css("background-color", "white");
    });

    $("#inout2").mouseover(function(){
        $("#inout2").css("background-color", "green");
    });
    $("#inout2").mouseout(function(){
        $("#inout2").css("background-color", "white");
    });

        //mouse move (coordenadas)
    $("#x").mousemove(function(){
        $("#x").text("Coordenada x: "+event.clientX +
                     "  Coordenada y: "+ event.clientY);
    });
    
    $("#updown").mousedown(function(){
        $("#updown").css("background-color", "blue");
    });
    $("#updown").mouseup(function(){
        $("#updown").css("background-color", "white");
    });


    //cambiar texto/mostrar texto
    $("#alert").click(function(){
        alert($("#pcambiar").text())
    });

    $("#cambiartexto").click(function(){
        $("#pcambiar").text("Holaaaaa");
        $("#pcambiar").css("color", "red");
        $("#pcambiar").css("font-size", "30px");

    });
});
