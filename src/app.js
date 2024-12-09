/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let who = ["Mi Gato", "Michael Jackson", "El Rubius", "Notorious BIG"];
let action = ["se robo", "tiro a la basura", "se fumo", "no me devolvio"];
let what = ["mi pantalon", "mi dinero", "la tarea"];
let when = [
  "despues de la fiesta.",
  "cuando fuimos a acampar.",
  "mientras robabamos un banco.",
  "en la cena de negocios.",
  "mientras lo carreaba en lol.",
];

function Elegiraleatorio(lista) {
  let randomnumber = Math.random() * lista.length;
  randomnumber = Math.floor(randomnumber);
  return lista[randomnumber];
}

let excuse =
  Elegiraleatorio(who) +
  " " +
  Elegiraleatorio(action) +
  " " +
  Elegiraleatorio(what) +
  " " +
  Elegiraleatorio(when);

let excusegenerator = document.querySelector("#Excusesgenerator");
excusegenerator.textContent = excuse;
console.log(excusegenerator);
