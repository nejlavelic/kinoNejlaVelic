let trenutnaProjekcija = 0;

function validirajPodatke(podaci) {
    const validniStatusi = ["slobodno", "zauzeto", "rezervisano"];

    if (!podaci.projekcije || podaci.projekcije.length === 0) {
        return false;
    }

    for (let projekcija of podaci.projekcije) {
        for (let sjediste of projekcija.sjedista) {
            if (!validniStatusi.includes(sjediste.status)) {
                return false;
            }
        }
    }

    return true;
}

function prikaziSalu(podaci) {
    const sala = document.getElementById("sala");
    sala.innerHTML = "";

    if (!validirajPodatke(podaci)) {
        sala.innerHTML = "<p>Podaci nisu validni!</p>";
        return;
    }

    const projekcija = podaci.projekcije[trenutnaProjekcija];

    const info = document.createElement("section");
    info.className = "info";
    info.innerHTML = `
        <h1>${projekcija.film}</h1>
        <p>Vrijeme projekcije: ${projekcija.vrijeme}</p>
        <p>Broj sale: ${projekcija.sala}</p>
    `;
    sala.appendChild(info);

    const platno = document.createElement("div");
    platno.className = "platno";
    platno.textContent = "PLATNO";
    sala.appendChild(platno);

    const sjedistaDiv = document.createElement("section");
    sjedistaDiv.className = "sjedista";

    const redovi = {};

    projekcija.sjedista.forEach(function(sjediste) {
        if (!redovi[sjediste.red]) {
            redovi[sjediste.red] = [];
        }
        redovi[sjediste.red].push(sjediste);
    });

    for (let red in redovi) {
        const redDiv = document.createElement("div");
        redDiv.className = "red";

        const oznaka = document.createElement("span");
        oznaka.className = "oznaka";
        oznaka.textContent = red;
        redDiv.appendChild(oznaka);

        redovi[red].forEach(function(sjediste) {
            const sjedisteSpan = document.createElement("span");
            sjedisteSpan.className = "sjediste " + sjediste.status;
            sjedisteSpan.title = red + sjediste.broj + " - " + sjediste.status;

            sjedisteSpan.addEventListener("click", function() {
                if (sjediste.status === "slobodno") {
                    sjediste.status = "rezervisano";
                    prikaziSalu(podaci);
                }
            });

            redDiv.appendChild(sjedisteSpan);
        });

        sjedistaDiv.appendChild(redDiv);
    }

    sala.appendChild(sjedistaDiv);

    const navigacija = document.createElement("div");
    navigacija.className = "navigacija";

    const prethodna = document.createElement("button");
    prethodna.textContent = "Prethodna projekcija";
    prethodna.onclick = function() {
        if (trenutnaProjekcija > 0) {
            trenutnaProjekcija--;
            prikaziSalu(podaci);
        }
    };

    const sljedeca = document.createElement("button");
    sljedeca.textContent = "Sljedeća projekcija";
    sljedeca.onclick = function() {
        if (trenutnaProjekcija < podaci.projekcije.length - 1) {
            trenutnaProjekcija++;
            prikaziSalu(podaci);
        }
    };

    navigacija.appendChild(prethodna);
    navigacija.appendChild(sljedeca);
    sala.appendChild(navigacija);
}
