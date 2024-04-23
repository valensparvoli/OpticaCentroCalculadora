
function VerNumero(){
    var numeroX = parseInt(document.getElementById('numeroX').value);
    console.log(numeroX + 10)
}

function sacarDescuentoFBD(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    var descuento = numeroX * 0.25
    document.getElementById('descuento25').innerHTML = descuento.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX - descuento;
    document.getElementById('totalUno').innerHTML = totalUno.toString()
    
    //TOTAL DOS
    var totalDos = parseInt(document.getElementById('Armado').value);
    var totalDosSumado = totalUno + totalDos
    document.getElementById('totalDos').innerHTML = totalDosSumado.toString()

    //TOTAL FINAL
    var totalFinal= totalDosSumado * 2.662
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal*0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

function sacarDescuentoStock(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    var descuento = numeroX * 0.25
    document.getElementById('descuento25').innerHTML = descuento.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX - descuento;
    document.getElementById('totalUno').innerHTML = totalUno.toString()
    

    //TOTAL FINAL
    var totalFinal= totalUno * 4.235
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal*0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

function sacarDescuentoCioLux(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    //var descuento = numeroX * 0.25
    //document.getElementById('descuento25').innerHTML = numeroX.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX;
    document.getElementById('totalUno').innerHTML = totalUno.toString()

    //TOTAL DOS
    var totalDos = parseInt(document.getElementById('Armado').value);
    var totalDosSumado = totalUno + totalDos
    document.getElementById('totalDos').innerHTML = totalDosSumado.toString()
    
    //TOTAL FINAL
    var totalFinal= totalDosSumado * 2.96
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal * 0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

function sacarDescuentoCioRex(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    //var descuento = numeroX * 0.25
    //document.getElementById('descuento25').innerHTML = numeroX.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX;
    document.getElementById('totalUno').innerHTML = totalUno.toString()

    //TOTAL DOS
    var totalDos = parseInt(document.getElementById('Armado').value);
    var totalDosSumado = totalUno + totalDos
    document.getElementById('totalDos').innerHTML = totalDosSumado.toString()
    
    //TOTAL FINAL
    var totalFinal= totalDosSumado * 3.509
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal * 0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

function sacarDescuentoCristalBaz(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    //var descuento = numeroX * 0.25
    //document.getElementById('descuento25').innerHTML = numeroX.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX;
    document.getElementById('totalUno').innerHTML = totalUno.toString()

    //TOTAL DOS
    var totalDos = parseInt(document.getElementById('Armado').value);
    var totalDosSumado = totalUno + totalDos
    document.getElementById('totalDos').innerHTML = totalDosSumado.toString()
    
    //TOTAL FINAL
    var totalFinal= totalDosSumado * 2.662
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal * 0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

function sacarDescuentoLentesDeContacto(){

    var numeroX = parseInt(document.getElementById('Cristal').value);
    //var descuento = numeroX * 0.25
    //document.getElementById('descuento25').innerHTML = numeroX.toString()
    
    //TOTAL UNO 
    var totalUno = numeroX;
    document.getElementById('totalUno').innerHTML = totalUno.toString()

    //TOTAL DOS
    var totalDos= totalUno
    document.getElementById('totalDos').innerHTML = totalUno.toString()

    //TOTAL FINAL
    var totalFinal= totalDos * 2.662
    var totalFinalRed = Math.round(totalFinal)
    document.getElementById('totalFinal').innerHTML = totalFinalRed.toString()

    //TOTAL EFECTIVO
    var totalEfectivo = totalFinal - totalFinal * 0.15
    var totalEfectivoRed = Math.round(totalEfectivo)
    document.getElementById('totalEfectivo').innerHTML = totalEfectivoRed.toString()

}

