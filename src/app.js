/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronombres = ["tus", "mi", "mis", "tu"];
const adjetivos = ["grandes", "nueva", "tremendo", "rapido"];
const sustantivos = [
  "jardines",
  "cambio",
  "casa",
  "telecom",
  "ciborg",
  "internet"
];

const dominios = ["es", "com", "org", "net", "io"];

function domainHack(str) {
  if (
    typeof str == "string" &&
    dominios.some(dominio => str.includes(dominio))
  ) {
    switch (true) {
      case str.endsWith("com"):
        return str.replace("com", ".com");
      case str.endsWith("org"):
        return str.replace("org", ".org");
      case str.endsWith("net"):
        return str.replace("net", ".net");
      case str.endsWith("es"):
        return str.replace("es", ".es");
      case str.endsWith("io"):
        return str.replace("io", ".io");

      default:
        break;
    }
  }
  return str + "." + dominios[Math.floor(Math.random() * dominios.length)];
}

window.onload = function() {
  //write your code here

  for (const pron of pronombres) {
    for (const adj of adjetivos) {
      for (const sust of sustantivos) {
        console.log(pron + adj + domainHack(sust));
      }
    }
  }
};
