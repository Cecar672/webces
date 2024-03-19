var nombre="cesar";
var altura=50;
var concatena=nombre+" "+altura;

var datos=document.getElementById("datoid");
datos.style.padding=20 + "px";
datos.style.color="red";

// datos.style.backgroundColor="orange";
// fechas
let vd = new Date();
let dia=vd.getUTCDate();
//funcion que devuelve el dia en letras
//datos.innerHTML=dia;
//fecha en español
let diasemana= [
    'Domingo','Lunes','Martes',
    'Miercoles','Jueves',
    'Viernes','Sabado' ];
let mesanio=['Enero','Febrero','Marzo','Abril','Mayo',
'Junio','Julio','Agosto','Setiembre',
'Octubre','Noviembre','Diciembre'];

datos.innerHTML=diasemana[vd.getDay()] +', '+vd.getDate()+ ' de ' 
+ mesanio[vd.getMonth()] +' del '+vd.getFullYear();