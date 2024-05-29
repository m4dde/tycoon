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
    document.getElementById("te-teller").textContent = bobaLager
    document.getElementById("penger").textContent = kroner
}

function kjøpTapioca() {
    if (kroner >= 5)
        kroner -= 5;
    document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) - 1;
    document.getElementById("penger").textContent = kroner
}

function kjøpKopper() {
    if (kroner >= 5)
        kroner -= 5;
    document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) - 1;
    document.getElementById("penger").textContent = kroner
}

function kjøpSukker() {
    if (kroner >= 5)
        kroner -= 5;
    document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) - 1;
    document.getElementById("penger").textContent = kroner
}

function kjøpMelk() {
    if (kroner >= 5)
        kroner -= 5;
    document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) - 1;
    document.getElementById("penger").textContent = kroner
}
