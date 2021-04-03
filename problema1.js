function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function capital(){
    var cantidad = document.dinero.cantidad.value;
    var dinero = parseFloat(cantidad);
    var intereses = dinero * 0.02;
    var total = intereses + dinero;
    document.dinero.total.value="$"+total+"MXN";
}
function vender(){
    var sueldo = parseFloat(document.ventas.cantidad.value);
    var ventas = parseFloat(document.ventas.vendido.value);
    var resultado = sueldo + (ventas*0.1);
    document.ventas.total.value="$"+resultado+"MXN";
}
function descontar(){
    var inicio = parseFloat(document.descuento.cantidad.value);
    var total = inicio * 0.85;
    document.descuento.total.value="$"+total+"MXN";
}
function calificar(){
    var parciales = parseFloat(document.calificaciones.parcial.value);
    var examenes = parseFloat(document.calificaciones.examen.value);
    var trabajos = parseFloat(document.calificaciones.trabajo.value);
    var total = (parciales * 0.55) + (examenes * 0.3) + (trabajos * 0.15);
    document.calificaciones.total.value="Tu calificación es de "+total;
}
function calcular(){
    var hombres= parseFloat(document.porcentajes.hombres.value);
    var mujeres= parseFloat(document.porcentajes.mujeres.value);
    var e= hombres + mujeres;
    var porchom= (hombres*100)/e;
    var porcMuj= (mujeres*100)/e;
    document.porcentajes.ph.value = porchom + "%";
    document.porcentajes.pm.value = porcMuj + "%";
}