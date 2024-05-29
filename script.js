/*let vaffellager = 0
let budsjett = 0
let pris = 0

function vaffelKnapp() {
    vaffellager++
    document.getElementById("viserVarebeholdning").textContent = vaffellager
}*/

let bobaLager = 0;
let kroner = 100;
let selge = 0;


function lageBoba() {
    bobaLager++;
    selge += kroner;
    document.getElementById("te-teller").textContent = bobaLager
    document.getElementById("penger").textContent = kroner
}

function kjøpTapioca() {
    if (kroner >= 1)
        kroner -= 1;
    document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) + 1;
}
