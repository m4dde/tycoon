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
let tapioca = parseInt(document.getElementById("tapioca").textContent);
let kopper = parseInt(document.getElementById("kopper").textContent);
let sukker = parseInt(document.getElementById("sukker").textContent);
let melk = parseInt(document.getElementById("melk").textContent);


function lageBoba() {
    if (tapioca > 0 && kopper > 0 && sukker > 0 && melk > 0) {
        tapioca -= 3;
        kopper -= 1;
        sukker -= 5;
        melk -= 2;

        document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) - 1;
        document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) - 3;
        document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) - 5;
        document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) - 2;

        bobaLager++;
        kroner -= 4;
        document.getElementById("te-teller").textContent = bobaLager
        document.getElementById("penger").textContent = kroner
    } else {
        alert("Fyll up manglende varer!")
    }
}

function selgeBoba() {
    if (bobaLager > 0) {
        kroner += 12;
        bobaLager -= 1;
        document.getElementById("te-teller").textContent = bobaLager;
        document.getElementById("penger").textContent = kroner;
    }
}

/*function kjopBoba() {
    if (kopper > 0 && tapioca > 0 && sukker > 0 && melk > 0) {
    } else alert("Ikke nok penger")
}*/



function kjopTapioca() {
    if (kroner >= 3)
        kroner += 3;
    document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

function kjopKopper() {
    if (kroner >= 1)
        kroner += 1;
    document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

function kjopSukker() {
    if (kroner >= 5)
        kroner += 5;
    document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

function kjopMelk() {
    if (kroner >= 2)
        kroner += 2;
    document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}