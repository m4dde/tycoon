/*let vaffellager = 0
let budsjett = 0
let pris = 0

function vaffelKnapp() {
    vaffellager++
    document.getElementById("viserVarebeholdning").textContent = vaffellager
}*/

let bobaLager = 0;
let kroner = 0;
let produksjon = 0;


function lageBoba() {
    bobaLager++;
    kroner += bobaLager;
    document.getElementById("te-teller").textContent = bobaLager
    document.getElementById("penger").textContent = kroner

    setTimeout(function() {
        document.getElementById("varselBoks").style.display = "block;"
    }, 5000);
}