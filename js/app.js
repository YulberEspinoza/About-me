'use strict';

const respuestaBuena = "si";
const respuestaMala = "no";
let conteoPos =  0;
let conteoNeg = 0;

const nombre = prompt("¿Cuál es tu nombre para continuar");
const respuesta = "Yulber";

if (nombre.toUpperCase()===respuesta.toUpperCase()) {
          alert("Correcta");
          console.log("Respuesta correcta.");
          conteoPos +=1;
          }else{
          alert("Negativa");
          console.log("Respuesta inconrrecta.");
         conteoNeg +=1;
}

const pregunta1 = prompt("¿Vives en Lima?");

if(pregunta1.toUpperCase()===respuestaBuena.toUpperCase()){
    alert("Correcta");
    console.log("Respuesta correcta.");
    conteoPos +=1;
}else{
    alert("Negativa");
    console.log("Respuesta inconrrecta.");
    conteoNeg +=1;
}

const pregunta2 = prompt("¿Tienes un solo nombre?");

if(pregunta2.toUpperCase()===respuestaBuena.toUpperCase()){
   alert("Correcta");
    console.log("Respuesta correcta.");
    conteoPos +=1;
}else{
    alert("Negativa");
    console.log("Respuesta inconrrecta.");
    conteoNeg +=1;
}

const pregunta3 = prompt("¿Superas los 30 años?");

if(pregunta3.toUpperCase()===respuestaMala.toUpperCase()){
    alert("Correcta");
    console.log("Respuesta correcta.");
    conteoPos +=1;
}else{
    alert("Negativa");
    console.log("Respuesta inconrrecta.");
    conteoNeg +=1;
}

const pregunta4 = prompt("¿Trabajas en Taured?");

if(pregunta4.toUpperCase()===respuestaBuena.toUpperCase()){
   alert("Correcta");
    console.log("Respuesta correcta.");
    conteoPos +=1;
}else{
    alert("Negativa");
    console.log("Respuesta inconrrecta.");
    conteoNeg +=1;
}

const pregunta5 = prompt("¿Trabajas remoto");

if(pregunta5.toUpperCase()===respuestaBuena.toUpperCase()){
    alert("Correcta");
    console.log("Respuesta correcta.");
    conteoPos +=1;
}else{
    alert("Negativa");
    console.log("Respuesta inconrrecta.");
    conteoNeg +=1;
}

alert("Las respuestas buenas son: "+conteoPos + " "+ "y respuestas negativas son: "+conteoNeg);

