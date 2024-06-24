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


const numAdivinar = Number(Math.random().toFixed(2)) * 100;
alert(numAdivinar)

for (let i = 0; i <4; i++) {

  const numero = Number(prompt("Adivina un numero aleatorio del 1 al 100 "))
   if (numero ===  numAdivinar) {
       alert("Adivinaste el numero");
       conteoPos +=1;
       break;
   } else{
       if(numero>numAdivinar){
        alert("Numero muy grande");
       }else{
        alert("Numero muy pequeño");
       }
       alert("Hacer otro intento");
   }
    if(i===4){
          alert("Ya no tienes oportunidades");
          conteoNeg +=1;
        }
}

const posRespuestas =["Perú","Argentina","Brasil","Uruguay"];

for (let i = 0; i < 6; i++) {
  let respuestaPais = prompt("Digite un país de América del Sur");

   if (respuestaPais.toLocaleLowerCase === posRespuestas[i].toLocaleLowerCase) {
      alert("Encontraste el pais");
      conteoPos +=1;
      break;
   }else{
     alert("Sigue intentando");
   }
   
   if(i===5){
    alert("Se te acabaron los intentos");
    conteoNeg +=1;
alert("Posibles respuestas");
for (let a = 0;a < 4; a++) {
  alert(posRespuestas[a]);
}

   }
}

alert("Las respuestas buenas son: "+conteoPos + " "+ "y respuestas negativas son: "+conteoNeg);
