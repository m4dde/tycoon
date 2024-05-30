
/*
Kommenter på koden
Finne ut funksjon når du ikke har mer penger
Lage bilder
*/ 

//Variabler som holder oversikt på antall boba, penger og tilgjengelige varer/materialer
let bobaLager = 0;
let kroner = 100;
let selge = 0;
let tapioca = parseInt(document.getElementById("tapioca").textContent);
let kopper = parseInt(document.getElementById("kopper").textContent);
let sukker = parseInt(document.getElementById("sukker").textContent);
let melk = parseInt(document.getElementById("melk").textContent);


//Funskjon for å lage selve boba drikken
function lageBoba() {
    //Betingelse som holder styr om det er nok materialer tilgjengelige
    if (tapioca > 0 && kopper > 0 && sukker > 0 && melk > 0) {
        //Reduserer antall varer fra lageret
        tapioca -= 3;
        kopper -= 1;
        sukker -= 5;
        melk -= 2;

        //Oppdaterer visningen på varene
        document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) - 1;
        document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) - 3;
        document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) - 5;
        document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) - 2;

        //Viser at det skal øke i antall boba som blir laget
        bobaLager++;
        //Reduserer pengene
        kroner -= 4;
        document.getElementById("te-teller").textContent = bobaLager
        document.getElementById("penger").textContent = kroner
    } else {
        //Varsel som sier i fra om manglende varer hvis det er tomt.
        alert("Fyll up manglende varer!")
    }
}

//Selve funksjonen for å selge produktet
function selgeBoba() {
    //Innsjekk om det er tilgjengelig på boba
    if (bobaLager > 0) {
        //Øker pengene etter man har solgt det
        kroner += 12;
        //Reduserer lagrede boba
        bobaLager -= 1;
        document.getElementById("te-teller").textContent = bobaLager;
        document.getElementById("penger").textContent = kroner;
    }
}

//Funksjon for å kjøpe tapioca
function kjopTapioca() {
    //Sjekker om det er nok penger
    if (kroner >= 3)
        //Reduserer pengene når man skal kjøpe materialet og når man bruker det
        kroner += 3;
    //Oppdaterer
    document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

//Funksjon for å kjøpe kopper
function kjopKopper() {
    //Sjekker om det er nok penger. Koster 1kr for hver kopp som brukes
    if (kroner >= 1)
        //Reduserer pengene når man skal kjøpe materialet og når man bruker det
        kroner += 1;
    document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

//Funksjon for å kjøpe sukker
function kjopSukker() {
    //Sjekker om det er nok penger
    if (kroner >= 5)
        //Reduserer pengene når man skal kjøpe materialet og når man bruker det
        kroner += 5;
    document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}

//Funksjon for å kjøpe melk
function kjopMelk() {
    //Sjekker om det er nok penger
    if (kroner >= 2)
        //Reduserer pengene når man skal kjøpe materialet og når man bruker det
        kroner += 2;
    document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) + 1;
    document.getElementById("penger").textContent = kroner
}