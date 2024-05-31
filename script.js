//Variabler som holder oversikt på antall boba, penger og tilgjengelige varer/materialer
let bobaLager = 0;
let kroner = 100;
let selge = 0;
let tapiocaTekst = document.getElementById("tapioca");
let kopperTekst = document.getElementById("kopper");
let sukkerTekst = document.getElementById("sukker");
let melkTekst = document.getElementById("melk");
let tapiocaLager = 100
let kopperLager = 100
let sukkerLager = 100
let melkLager = 100


//Funskjon for å lage selve boba drikken
function lageBoba() {
    //Betingelse som holder styr om det er nok materialer tilgjengelige
    if (tapiocaLager > 0 && kopperLager > 0 && sukkerLager > 0 && melkLager > 0) {
        //Reduserer antall varer fra lageret
        tapiocaLager -= 3;
        kopperLager -= 1;
        sukkerLager -= 2;
        melkLager -= 2;

        //Oppdaterer visningen på varene
        tapiocaTekst.textContent = tapiocaLager 
        kopperTekst.textContent = kopperLager 
        sukkerTekst.textContent = sukkerLager 
        melkTekst.textContent = melkLager 

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
        if (kroner >= 3) {
            //Reduserer pengene når man skal kjøpe materialet og når man bruker det
            kroner -= 3;
        //Oppdaterer
        document.getElementById("tapioca").textContent = parseInt(document.getElementById("tapioca").textContent) + 1;
        document.getElementById("penger").textContent = kroner
    } else {
        alert("Ikke nok penger")
        kroner = Math.max(kroner, 0); //returnerer verdien
    }
}

//Funksjon for å kjøpe kopper
function kjopKopper() {
        //Sjekker om det er nok penger. Koster 1kr for hver kopp som brukes
        if (kroner >= 1) {
            //Reduserer pengene når man skal kjøpe materialet og når man bruker det
            kroner -= 1;
        document.getElementById("kopper").textContent = parseInt(document.getElementById("kopper").textContent) + 1;
        document.getElementById("penger").textContent = kroner
    } else {
        alert("Ikke nok penger")
        kroner = Math.max(kroner, 0);
    }
}

//Funksjon for å kjøpe sukker
function kjopSukker() {
        //Sjekker om det er nok penger
        if (kroner >= 2) {
            //Reduserer pengene når man skal kjøpe materialet og når man bruker det
            kroner -= 2;
        document.getElementById("sukker").textContent = parseInt(document.getElementById("sukker").textContent) + 1;
        document.getElementById("penger").textContent = kroner
    } else {
        alert("Ikke nok penger")
        kroner = Math.max(kroner, 0);
    }
}

//Funksjon for å kjøpe melk
function kjopMelk() {
        //Sjekker om det er nok penger
        if (kroner >= 2) {
            //Reduserer pengene når man skal kjøpe materialet og når man bruker det
            kroner -= 2;
        document.getElementById("melk").textContent = parseInt(document.getElementById("melk").textContent) + 1;
        document.getElementById("penger").textContent = kroner
    } else {
        alert("Ikke nok penger")
        kroner = Math.max(kroner, 0);
    }
}