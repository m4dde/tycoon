/*let vaffellager = 0
let budsjett = 0
let pris = 0

function vaffelKnapp() {
    vaffellager++
    document.getElementById("viserVarebeholdning").textContent = vaffellager
}*/

let bobaLager = 0;
let kroner = 0;
let selge = 0;
let produksjon = 0;


function lageBoba() {
    bobaLager++;
    selge += kroner;
    document.getElementById("te-teller").textContent = bobaLager
    document.getElementById("penger").textContent = kroner
}