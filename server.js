const randomWords = require("random-words");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});


app.get("/static", (req, res) => {
  res.send({
    fondopmi: {
      contratti: 2100000000,
      controparti: 1371871,
      finanziato: 240000000000,
      garantito: 162000000000,
      anno_mese: 202212,
    },
    garanzie: {
      contratti: 5825,
      controparti: 3204,
      finanziato: 12000000000,
      garantito: 12000000000,
      anno_mese: 202206,
    },
    export: {
      contratti: 3465,
      controparti: 2262,
      imp_deliberato: 60000000000,
      imp_perfezionato: 57000000000,
      anno_mese: 202206,
    },
    gacs: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 117851036518,
      garantito: 13745269568,
      anno_mese: 202302,
    },
  });
});

app.get("/static-5", (req, res) => {
  res.send({
    fondopmi: {
      contratti: 2100000000,
      controparti: 1371871,
      finanziato: 240000000000,
      garantito: 162000000000,
      anno_mese: 202212,
    },
    garanzie: {
      contratti: 5825,
      controparti: 3204,
      finanziato: 12000000000,
      garantito: 12000000000,
      anno_mese: 202206,
    },
    export: {
      contratti: 3465,
      controparti: 2262,
      imp_deliberato: 60000000000,
      imp_perfezionato: 57000000000,
      anno_mese: 202206,
    },
    gacs: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 117851036518,
      garantito: 13745269568,
      anno_mese: 202302,
    },
    fondo: {
      operazioni: 31,
      banche_originator: 65,
      nominale_lordo: 217851036518,
      garantito: 15745269568,
      anno_mese: 202402,
    },
  });
});


app.get("/static-2", (req, res) => {
  res.send({
    fondopmi: {
      contratti: 2040038,
      controparti: 1371871,
      finanziato: 226273920088,
      garantito: 167020696109,
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026752,
      garantito: 23613416507,
      anno_mese: 202203,
    },
    gacs: {
      nominale_lordo: 59897749603,
      banche_originator: 2394,
      operazioni: 3679,
      garantito: 55660506075,
      anno_mese: 202112,
    },
    export: {
      contratti: 3679,
      controparti: 2394,
      imp_deliberato: 59897749603,
      imp_perfezionato: 55660506075,
      anno_mese: 202112,
    },
  });
});

app.get("/garesiacc", (req, res) => {
  const { numerorda } = req.query;

  if (!numerorda) {
    return res.status(501).send({
      code: "501",
      message: "Numero RDA non valido",
      gara: [],
    });
  }

  // Esempio JSON di partenza
  const json = {
    code: "200",
    message: "Successo",
    gara: [
      {
        label: "Numero RdA",
        name: "numeroRDA",
        value: "2137",
      },
      {
        label: "Numero iniziativa SOGEI",
        name: "numIniSogei",
        value: "n. 110/2019",
      },
      {
        label: "Titolo Gara*",
        name: "titoloGaraSIACC",
        value: "Lavori di manutenzione impianti",
      },
    ],
  };

  // Funzione per generare un array di 5 parole casuali di senso compiuto
  function getRandomWords() {
    return randomWords({
      exactly: 5,
      wordsPerString: 1,
      formatter: (word) => word.toLowerCase(),
    });
  }

  // Genera una nuova sequenza di parole casuali per la proprietà "value" di ogni oggetto in "gara"
  for (let i = 0; i < json.gara.length; i++) {
    json.gara[i].value = getRandomWords().join(" ");
  }

  return res.status(200).send(json);
});

app.get("/garesigef/indizioneGare", (req, res) => {
  const { idsigef } = req.query;

  if (!idsigef) {
    return res.status(501).send({
      code: "501",
      message: "id SIGEF non valido",
      gara: [],
    });
  }

  // Esempio JSON di partenza
  const json = {
    code: "200",
    message: " $[Valorizzato se necessario]$",
    gara: [
      {
        label: "ID SIGEF*",
        name: "idSigef",
        value: "2137",
      },
      {
        label: "Titolo breve gara (oggetto)*",
        name: "titoloBreveGara",
        value: "Titolo Breve gara Oggetto prova",
      },
      {
        label: "Titolo gara (oggetto)*",
        name: "titoloGara",
        value: "Titolo gara Oggetto prova",
      },
      {
        label: "Contratto",
        name: "Contratto",
        value: "Prova Contratto",
      },
      {
        label: "Categoria merceologica",
        name: "categoriaMerc",
        value: "Prova categoria merceologica",
      },
      {
        label: "Denominazione Amministrazione Giudicatrice",
        name: "DenAmmAggiud",
        value: "Prova Denominazione Amministrazione giudicatrice ",
      },
      {
        label: "Tipo di Amministrazione",
        name: "TipoAmm",
        value: " Prova Tipo Amministrazione ",
      },
      {
        label: "Sede di Gara",
        name: "SedeGara",
        value: " Prova Sede di Gara ",
      },
      {
        label: "Importo",
        name: "Importo",
        value: " Prova Importo ",
      },
      {
        label: "Data pubblicazione(data)",
        name: "PubblicazioneData",
        value: "13/03/2023",
      },
      {
        label: "Data pubblicazione(orario)",
        name: "PubblicazioneOrario",
        value: "15:30",
      },
      {
        label: "Data scadenza bando(data)",
        name: "scadenzaData",
        value: "13/03/2023",
      },
      {
        label: "Data scadenza bando(orario)",
        name: "scadenzaOrario",
        value: "15:30",
      },
      {
        label: "Criterio di aggiudicazione",
        name: "CriterioAggiud",
        value: " Prova Criterio di aggiudicazione ",
      },
      {
        label: "Termini di Gara",
        name: "TerminiGara",
        value: " Prova Termini di Gara ",
      },
      {
        label: "Termine ricezione offerte(data)",
        name: "RicezioneOfferteData",
        value: "15/03/2023",
      },
      {
        label: " Termine ricezione offerte (orario)",
        name: "RicezioneOfferteOrario",
        value: "20:00",
      },
      {
        label: "Termine richiesta chiarimenti(data)",
        name: "richiestaChiarimentiData",
        value: "15/03/2023",
      },
      {
        label: "Termine richiesta chiarimenti(orario)",
        name: "richiestaChiarimentiOrario",
        value: "20:00",
      },
      {
        label: "Codice CPV",
        name: "Codice CPV",
        value: "Prova codice CPV",
      },
      {
        label: "Codice CIG",
        name: "Codice CIG",
        value: "Prova codice CIG",
      },
      {
        label: "Responsabile del Procedimento",
        name: "ResponsabileProcedimento",
        value: "Nome e cognome Responsabile del Procedimento",
      },
      {
        label: "INIZIATIVA PNRR/PNC (SI/NO)",
        name: "INIZIATIVA PNRR/PNC (SI/NO)",
        value: "INIZIATIVA PNRR/PNC (SI/NO)",
      },
      {
        label: "Disciplinare",
        name: "Disciplinare",
        value: "Prova Disciplinare: INAIL, INPS, MIC",
      },
    ],
  };

  // Funzione per generare un array di 5 parole casuali di senso compiuto
  function getRandomWords() {
    return randomWords({
      exactly: 5,
      wordsPerString: 1,
      formatter: (word) => word.toLowerCase(),
    });
  }

  // Genera una nuova sequenza di parole casuali per la proprietà "value" di ogni oggetto in "gara"
  for (let i = 0; i < json.gara.length; i++) {
    json.gara[i].value = getRandomWords().join(" ");
  }

  const emptyValuesCount = 5; // Numero minimo di value vuoti da generare
  const emptyValue = ""; // Valore vuoto

  for (let i = 0; i < emptyValuesCount; i++) {
    const emptyValueIndex = Math.floor(Math.random() * json.gara.length); // Genera un indice casuale nell'array gara
    json.gara[emptyValueIndex].value = emptyValue; // Assegna il valore vuoto all'oggetto corrispondente
  }

  return res.status(200).send(json);
});

app.get("/static2", (req, res) => {
  res.send({
    fondopmi: {
      contratti: 2040038,
      controparti: 1380539,
      finanziato: 237613431826,
      garantito: 169987971932,
      anno_mese: 202209,
    },
    garanzie: {
      contratti: 5825,
      controparti: 3204,
      finanziato: 11717638877,
      garantito: 11583883449,
      anno_mese: 202206,
    },
    export: {
      contratti: 0,
      controparti: 0,
      imp_deliberato: 0,
      imp_perfezionato: 44383095702,
      anno_mese: 202206,
    },
    gacs: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 117851036518,
      garantito: 13745269568,
      anno_mese: 202302,
    },
  });
});

app.get("/errors/error1", (req, res) => {
  res.send({
    fondopmi: {
      controparti: 1371871,
      finanziato: 226273920087,
      garantito: 167020696108,
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026751,
      anno_mese: 202203,
    },
    export: {
      contratti: 3679,
      controparti: 2394,
      imp_perfezionato: 55660506074,
    },
  });
});

app.get("/errors/error2", (req, res) => {
  res.send({
    fondopmi: {
      contratti: "2040038",
      controparti: 1371871,
      finanziato: 226273920087,
      garantito: 167020696108,
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026751,
      garantito: 23613416506,
      anno_mese: 202203,
    },
    export: {
      contratti: 3679,
      controparti: 2394,
      imp_deliberato: 59897749602,
      imp_perfezionato: "-",
      anno_mese: "202112",
    },
  });
});

app.get("/errors/error3", (req, res) => {
  res.send({
    fondopmi: {
      contratti: 2040038,
      controparti: 1371871,
      finanziato: 226273920087,
      garantito: "167020696108",
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026751,
      garantito: 23613416506,
      anno_mese: 202203,
    },
    export: {
      contratti: 3679,
      controparti: 2394,
      imp_deliberato: 59897749602,
      imp_perfezionato: 55660506074,
      anno_mese: 202112,
    },
  });
});

app.get("/errors/error4", (req, res) => {
  res.send({
    fondopmi: {
      contratti: null,
      controparti: null,
      finanziato: 226273920087,
      garantito: "167020696108",
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026751,
      garantito: 23613416506,
      anno_mese: 202203,
    },
    export: {
      contratti: 3679,
      controparti: 2394,
      imp_deliberato: 59897749602,
      imp_perfezionato: 55660506074,
      anno_mese: 202112,
    },
  });  
});

app.get("/errors/error5", (req, res) => {
  res.send({
    fondopmi: {
      contratti: null,
      controparti: null,
      finanziato: 226273920087,
      garantito: "167020696108",
      anno_mese: 202203,
    },
    garanzie: {
      contratti: 4868,
      controparti: 2681,
      finanziato: 25121026751,
      garantito: 23613416506,
      anno_mese: 202203,
    },
  });
});

app.get("/portafoglio", (req, res) => {
  var anno1 = 2000 + Math.floor(Math.random() * 23);
  var anno2 = 2000 + Math.floor(Math.random() * 23);
  var anno3 = 2000 + Math.floor(Math.random() * 23);

  var mese1 = Math.floor(Math.random() * 12) + 1;
  var mese2 = Math.floor(Math.random() * 12) + 1;
  var mese3 = Math.floor(Math.random() * 12) + 1;

  res.send({
    fondopmi: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      finanziato: Math.floor(Math.random() * 10000000),
      garantito: Math.floor(Math.random() * 10000000),
      anno_mese: anno1 + "" + (mese1 < 10 ? "0" + mese1 : mese1),
    },
    garanzie: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      finanziato: Math.floor(Math.random() * 10000000),
      garantito: Math.floor(Math.random() * 10000000),
      anno_mese: anno2 + "" + (mese2 < 10 ? "0" + mese2 : mese2),
    },
    export: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      imp_deliberato: Math.floor(Math.random() * 10000000),
      imp_perfezionato: Math.floor(Math.random() * 10000000),
      anno_mese: anno3 + "" + (mese3 < 10 ? "0" + mese3 : mese3),
    },
    gacs: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 117851036518,
      garantito: 13745269568,
      anno_mese: 202302,
    },
  });
});

app.get("/portafoglio-5", (req, res) => {
  var anno1 = 2000 + Math.floor(Math.random() * 23);
  var anno2 = 2000 + Math.floor(Math.random() * 23);
  var anno3 = 2000 + Math.floor(Math.random() * 23);

  var mese1 = Math.floor(Math.random() * 12) + 1;
  var mese2 = Math.floor(Math.random() * 12) + 1;
  var mese3 = Math.floor(Math.random() * 12) + 1;

  res.send({
    fondopmi: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      finanziato: Math.floor(Math.random() * 10000000),
      garantito: Math.floor(Math.random() * 10000000),
      anno_mese: anno1 + "" + (mese1 < 10 ? "0" + mese1 : mese1),
    },
    garanzie: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      finanziato: Math.floor(Math.random() * 10000000),
      garantito: Math.floor(Math.random() * 10000000),
      anno_mese: anno2 + "" + (mese2 < 10 ? "0" + mese2 : mese2),
    },
    export: {
      contratti: Math.floor(Math.random() * 10000000),
      controparti: Math.floor(Math.random() * 10000000),
      imp_deliberato: Math.floor(Math.random() * 10000000),
      imp_perfezionato: Math.floor(Math.random() * 10000000),
      anno_mese: anno3 + "" + (mese3 < 10 ? "0" + mese3 : mese3),
    },
    gacs: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 117851036518,
      garantito: 13745269568,
      anno_mese: 202302,
    },
    fondo: {
      operazioni: 45,
      banche_originator: 61,
      nominale_lordo: 187851036518,
      garantito: 15745269568,
      anno_mese: 202402,
    },
  });
});

app.get("/jsongaranzia", (req, res) => {
    const jsonGaranzia = [{
   "titoloGaranzia":"Garanzia per prestiti relativi al NAB",
   "cluster":{
      "isAttiva":null,
      "idCluster":6,
      "dataInizioValidita":"1900-01-01",
      "garanzie":null,
      "codiCluster":"POM",
      "filtri":null,
      "dataFineValidita":"9999-12-31",
      "descCluster":"Partecipazione ad Organismi Multilaterali e Accordi Internazionali"
   },
   "statoGaranzia":{
      "codiStatoGaranzia":"GA",
      "descStatoGaranzia":"Garanzia Attiva",
      "idStatoGaranzia":2,
      "dataInizioValidita":"1900-01-01",
      "dataFineValidita":"9999-12-31"
   },
   "dataCreazione":"2020-07-14 00:00:00.000",
   "overviewNormativa":{
      "flagPresenzaAllegato18":true,
      "normaPrimariaIstitutiva":[
         {
            "descEstesaNormativa":"Art. 2, Comma 13 DECRETO LEGGE 29 dicembre 2010, n. 225",
            "aggiornamentiNormativaPrimaria":[
               {
                  "descEstesaNormativa":"Art. 1 commi 641 LEGGE 30 dicembre 2020, n. 178"
               },
               {
                  "descEstesaNormativa":"Art. 1 commi 636 LEGGE 30 dicembre 2020, n. 178"
               },
               {
                  "descEstesaNormativa":"Art. 13, Comma 6-sexies DECRETO LEGGE 30 dicembre 2016, n. 244"
               },
               {
                  "descEstesaNormativa":"LEGGE 24 febbraio 2012, n. 14"
               },
               {
                  "descEstesaNormativa":"Art. 25 DECRETO-LEGGE 29 dicembre 2011, n. 216"
               },
               {
                  "descEstesaNormativa":"LEGGE 27 febbraio 2017,  n. 19"
               },
               {
                  "descEstesaNormativa":"LEGGE 26 febbraio 2011, n. 10"
               }
            ]
         }
      ],
      "amministrazioneDiRiferimento":[
         "MINISTERO DELL'ECONOMIA E DELLE FINANZE"
      ],
      "flagPresenzaAllegato4":false
   },
   "idGaranzia":81,
   "caratteristicheOperative":{
      "validitaConvenzione":null,
      "flagGestoreEsterno":false,
      "descGestore":"MEF",
      "descComitato":null,
      "descSoggettiInteressati":null,
      "flagCalcoloPa":false,
      "flagConvenzione":"N",
      "flagRm":false,
      "sintesiOperativa":"Viene autorizzata la Banca d'Italia per lo svolgimento delle trattative con il Fondo monetario internazionale (FMI) in relazione alle operazioni a sostegno dei Paesi membri oggetto di gravi crisi di liquidità.\r\nIn particolare si regolano i rapporti per la conclusione di un accordo di prestito al FMI per un ammontare pari a 8,11 miliardi di euro, estendibile - laddove si renda necessario eccedere predetta somma - fino ad un massimo di 13,53 miliardi di euro.\r\nSuddetti prestiti coinfluiscono nello strumento di prestito New Arrangements to Borrow (NAB).\r\n\r\nIn aggiunta, la Banca d'Italia è autorizzata a concedere un ulteriore prestito pari a 800 milioni di diritti speciali di prelievo (DSP) da erogare a tassi di mercato tramite l'Extended credit facility del Poverty reduction and growth trust del Fondo monetario Internazionale. Tale autorizzazione è stata prorogata dal D.L. 30 dicembre 2016, n. 244, per un nuovo prestito garantito concesso dalla Banca d'Italia nei limiti di 400 milioni di DSP.\r\n\r\nSui prestiti sopra descritti è accordata la garanzia dello Stato per il rimborso del capitale, per gli interessi maturati e per la copertura di eventuali rischi di cambio.\r\n\r\nL'articolo 1, comma 636, della Legge 178/2020 stabilisce che la Banca d'Italia è autorizzata a prorogare fino al 31 dicembre 2025 la durata  dell'accordo  di  prestito   multilaterale  denominato New Arrangements to Borrow (NAB) e a incrementare l'importo massimo del prestito erogabile fino  a 13.797,04 milioni di diritti speciali di prelievo.\r\n\r\nIl comma 637 del suddetto articolo autorizza inoltre la Banca d'Italia  a  stipulare  con   il   Fondo   monetario internazionale un nuovo accordo di  prestito  bilaterale,  denominato Bilateral Borrowing Agreement (BBA), per un ammontare di 23 miliardi e  480 milioni  di  euro,  con  scadenza  fissata  al  31   dicembre   2023, estensibile di un anno fino al 31 dicembre 2024.  A  decorrere  dalla data di acquisto di efficacia del prestito di cui al  comma  636  dell'articolo 1  della Legge 178/2020, l'ammontare dell'accordo di prestito bilaterale di cui al presente comma si riduce a 10 miliardi e 115 milioni di euro.\r\n\r\nIl comma 638 dell'articolo 1 della Legge 178/2020 autorizza la Banca d'Italia a concedere un nuovo prestito nei limiti di 1 miliardo di diritti speciali di prelievo da erogare a tassi di mercato tramite il  Poverty Reduction and Growth Trust del FMI.\r\n\r\nIl comma 640 del suddetto articolo stabilisce che sui prestiti autorizzati dai commi 636, 637 e 638 è accordata la garanzia dello Stato per  il  rimborso  del  capitale  e  per  gli interessi maturati e, con riferimento ai prestiti di cui ai commi 636 e 637, la predetta garanzia si estende anche a  eventuali  rischi  di cambio su tutte le posizioni di credito derivanti dall'esecuzione dei relativi accordi.",
      "flagComitato":false,
      "macroCaratteristicheGaranzia":[
         {
            "descMacroCaratteristica":"Tipologia di Intervento",
            "caratteristicheGaranzia":[
               {
                  "isAttiva":null,
                  "codiCaratteristica":"008",
                  "dataInizioValidita":"2020-07-01",
                  "dataFineValidita":"9999-12-31",
                  "descCaratteristica":"Garanzia diretta",
                  "idCaratteristica":8,
                  "descEstesaCaratteristica":"Le garanzie dirette prevedono che la garanzia venga emessa direttamente dal soggetto garante a favore del debitore.  La rimessa della garanzia al debitore può essere eseguita direttamente dal garante per il tramite dell'ordinante oppure anche attraverso una soggetto terzo che, senza assumere alcun impegno proprio, la inoltra al debitore.\r\n"
               }
            ],
            "dataInizioValidita":"1900-01-01",
            "dataFineValidita":"9999-12-31",
            "idMacroCaratteristica":4,
            "codiMacroCaratteristica":"TIPO_INTERVENTO"
         }
      ]
   },
   "isEvidenza":false,
   "dataModifica":null,
   "soggettiGarantiti":[
      "BANCA D'ITALIA "
   ],
   "soggettiBeneficiari":[
      "STATI MEMBRI IN GRAVE CRISI DI LIQUIDITÀ"
   ],
   "datiContabili":{
      "ccTesoreria":"",
      "flagCcTesoreriaUscita":false,
      "flagFondoCopertura":true,
      "descFondoCopertura":" ",
      "capitoliAssociati":[
         "MEF - 7407"
      ],
      "massimoGarantibile":null,
      "flagCcTesoreriaEntrata":false
   }
}];

    res.json(jsonGaranzia);
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});