var data = document.getElementById('data');
var dataFull = document.getElementById('dataFull');
var dataGiorno = document.getElementById('giorno');
var dataMese = document.getElementById('mese');
var dataOggi = document.getElementById('oggi');

const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno","Luglio", "Augusto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

var dataIntera = new Date();
var giorno = dataIntera.getDate();
var meseStringa = monthNames[dataIntera.getMonth()];
var mese = (dataIntera.getMonth() + 1);
var anno = dataIntera.getFullYear();
/* ------------------------------ */
var salutoBtn = document.getElementById('salutoBtn');
var saluto = document.getElementById('saluto');
var ora = dataIntera.getHours();


messaggio = () => {
    const nome = document.getElementById('textInput').value;
    if (nome.length == 0) {
        alert( "Non hai messo nessun nome!");
    } else if (ora <= 5) {
        saluto.innerHTML = `Buonanotte, ${nome}.`;
    } else if (ora <= 13) {
        saluto.innerHTML = `Buongiorno, ${nome}.`;
    } else if (ora <= 22) {
        saluto.innerHTML = `Buonasera, ${nome}.`;
    } else {
        saluto.innerHTML = `Buonanotte, ${nome}.`;
    }
}

data.innerHTML = `${giorno}/${meseStringa}/${anno}`;
dataFull.innerHTML = dataIntera;
dataGiorno.innerHTML += giorno;
dataMese.innerHTML += meseStringa;
dataOggi.innerHTML = `Oggi è il ${giorno}-${mese}-${anno}`;
/* Bottone saluto */
salutoBtn.addEventListener('click', messaggio);
