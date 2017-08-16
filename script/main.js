
var textSpalte2 = " 0 1 2 3 4 5 6 ";


window.onload = function () { 
    createTable();
}


function createTable(){

var table = document.getElementById("tabelle1");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();

// Create an empty <tr> element and add it to the first position of <thead>:
var hrow = header.insertRow(0);    

// Insert a new cell (<td>) at the first position of the "new" <tr> element:
var hcell = hrow.insertCell(0);

// Add some text in the new cell:
hcell.innerHTML = "<b>table header</b>"; 


// create table body


var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i <= 23; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(i+1+". "+ Fragen[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // appends <tblBody> into <Table>
  table.appendChild(tblBody);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");


}



var Fragen = ["Das Leben gelingt besser, wenn man das Positive sieht, anstatt sich am Negativen aufzuhalten.", 
"Ich kann auch emotional sehr angespannte Situationen nüchtern und mit Abstand betrachten.", 
"Ich arbeite gerne innerhalb einer Institution.",
"Wichtig an einem Menschen ist, dass er etwas &quot;darstellt&quot;.",
"Ich möchte unabhängig sein.",
"Am wichtigsten ist mir, dass sich die Menschen bei mir wohlfühlen.",
"Für mich ist es wichtig die Zukunft zu planen, damit ich weiß, was auf mich zukommt.",
"Wenn jemand meine Hilfe braucht, bin ich bereit, meine ganze Kraft für ihn einzusetzen.",
"Ich möchte leidenschaftlich, emotional und mit allen Sinnen leben - auch wenn es schmerzt.",
"Eigene und fremde Unvollkommenheit kann ich nur schwer ertragen.",
"Erfolg und Status (Orden, Ämter, Titel) spielen für mich eine große Rolle.",
"In der Liebe sind vor allem Anstand und Benehmen wichtig.",
"In der Liebe sind vor allem Anstand und Benehmen wichtig.",
"Ich engagiere mich für Randgruppen, Benachteiligte und Rechtlose (Asylsuchende, Kinder in der 3. Welt, Ausländer etc.).",
"Das Leben ist wie ein Theaterstück, bei dem ich gleichzeitig Zuschauer und Schauspieler bin.",
"Für mein berufliches Fortkommen bin ich bereit, Ehe, Familie oder Freunde hintanzustellen.",
"Mich plagt oft ein schlechtes Gewissen.",
"Ich habe den Eindruck, dass sogenannte &quot;Autoritäten&quot; oft inkompetent sind, aber ich zögere meist, gegen sie vorzugehen.",
"Ich lasse die Dinge gerne auf mich zukommen- vieles regelt sich dann schon ganz von alleine.",
"Ich muss wissen, wohin ich gehöre.",
"Ich genieße es, die Aufmerksamkeit anderer zu erregen und im Mittelpunkt zu stehen.",
"Ich halte meinen Ärger oft zurück.",
"Ich habe das Gefühl, nie &quot;ganz erfüllt&quot; sein zu können.",
"Oft ahne ich, was in anderen vorgeht, bevor sie es aussprechen."]



























// // create table body (funktioniert nicht)

// HTMLTableElement.appendChild(document.createElement('tbody'));

// var row2 = tbody.insertRow(0);

// var cell2 = tbody.insertCell(0);

// cell2.innerHTML = "tryit";
// }
















// // super simple Tabelle mit 2 Spalten aus dem Kopf gebaut
// var 1= "1";
// var Antwort1= "Antwort1";

// function createTable(){
//     for (i=0; i<=3; i++){

//     document.getElementById("tabelle1").innerHTML = "<tr>";

//         for (j=0; j<=25; j++){
//             document.getElementById("tabelle1").innerHTML += "<td>" + 1 + "</td>" +  "<td>" + Antwort1 + "</td>";  
//                             }
//         for (k=0; k<=3; k++)
//     document.getElementById("tabelle1").innerHTML += "</tr>";
//         } 
                        
//    }



/* /* 
document.getElementById("tabelle1").innerHTML = text1; */

/* 
/* <tr>
    <th><p>Bitte erst alle 115 n beantworten, dann Streifen rechts nach hinten falten und Auswertung vornehmen.<p>  </th>
    <td id="imgArrow"><img  src="images/double-arrow.png"><br>
    <p>stimmt nicht &nbsp; stimmt<p> </td> 
  </tr> */










    /* 
var JSonString = '{"n":[' +
     "1", "": "Das Leben gelingt besser, wenn man das Positive sieht, anstatt sich am Negativen aufzuhalten."
     "2", "": "Ich kann auch emotional sehr angespannte Situationen nüchtern und mit Abstand betrachten."
     "3", "": "Ich arbeite gerne innerhalb einer Institution."
     "4", "": "Wichtig an einem Menschen ist, dass er etwas &quot;darstellt&quot;."
     "5", "": "Ich möchte unabhängig sein."
     "6", "": "Am wichtigsten ist mir, dass sich die Menschen bei mir wohlfühlen."
     "7", "": "Für mich ist es wichtig die Zukunft zu planen, damit ich weiß, was auf mich zukommt."
     "8", "": "Wenn jemand meine Hilfe braucht, bin ich bereit, meine ganze Kraft für ihn einzusetzen."
     "9", "": "Ich möchte leidenschaftlich, emotional und mit allen Sinnen leben - auch wenn es schmerzt."
     "10", "": "Eigene und fremde Unvollkommenheit kann ich nur schwer ertragen."
     "11", "": "Erfolg und Status (Orden, Ämter, Titel) spielen für mich eine große Rolle."
     "12", "": "In der Liebe sind vor allem Anstand und Benehmen wichtig."
     "13", "": "In der Liebe sind vor allem Anstand und Benehmen wichtig."
     "14", "": "Ich engagiere mich für Randgruppen, Benachteiligte und Rechtlose (Asylsuchende, Kinder in der 3. Welt, Ausländer etc.)."
     "15", "": "Das Leben ist wie ein Theaterstück, bei dem ich gleichzeitig Zuschauer und Schauspieler bin."
     "16", "": "Für mein berufliches Fortkommen bin ich bereit, Ehe, Familie oder Freunde hintanzustellen."
     "17", "": "Mich plagt oft ein schlechtes Gewissen."
     "18", "": "Ich habe den Eindruck, dass sogenannte &quot;Autoritäten&quot; oft inkompetent sind, aber ich zögere meist, gegen sie vorzugehen."
     "19", "": "Ich lasse die Dinge gerne auf mich zukommen- vieles regelt sich dann schon ganz von alleine."
     "20", "": "Ich muss wissen, wohin ich gehöre."
     "21", "": "Ich genieße es, die Aufmerksamkeit anderer zu erregen und im Mittelpunkt zu stehen."
     "22", "": "Ich halte meinen Ärger oft zurück."
     "23", "": "Ich habe das Gefühl, nie &quot;ganz erfüllt&quot; sein zu können."
     "24", "": "Oft ahne ich, was in anderen vorgeht, bevor sie es aussprechen."}]}';



var jsonObject = JSON.parse(JSonString);

window.onload = function () {
// jsonObject.n.push( {"ID": "25", "": "Neue "});
    setTableInhalt(jsonObject);
};

// Schleife, die den Inhalt der Tabelle einfügt;
function setTableInhalt(pJsonObject) {
    for (i = 1; i <= pJsonObject.n.length; i++) {
        document.getElementById('Antwort' + i).innerHTML = textSpalte2;
        document.getElementById('' + i).innerHTML = pJsonObject.n[i - 1].ID + ". " + pJsonObject.n[i - 1].;
        };
}; */







// function myFunktion(){
//     document.getElementById("1").innerHTML =  jsonObject.n[0].ID + ". " +  jsonObject.n[0].;
//     document.getElementById("2").innerHTML = jsonObject.n[1].ID + ". " + jsonObject.n[1].;
//     document.getElementById("3").innerHTML = jsonObject.n[2].ID + ". " + jsonObject.n[2].;
//     document.getElementById("4").innerHTML = jsonObject.n[3].ID + ". " + jsonObject.n[3].;
//     document.getElementById("5").innerHTML = jsonObject.n[4].ID + ". " + jsonObject.n[4].;
//     document.getElementById("6").innerHTML = jsonObject.n[5].ID + ". " + jsonObject.n[5].;
//     document.getElementById("7").innerHTML = jsonObject.n[6].ID + ". " + jsonObject.n[6].;
//     document.getElementById("8").innerHTML = jsonObject.n[7].ID + ". " + jsonObject.n[7].;
//     document.getElementById("9").innerHTML = jsonObject.n[8].ID + ". " + jsonObject.n[8].;
//     document.getElementById("10").innerHTML = jsonObject.n[9].ID + ". " + jsonObject.n[9].;
//     document.getElementById("11").innerHTML = jsonObject.n[10].ID + ". " + jsonObject.n[10].;
//     document.getElementById("12").innerHTML = jsonObject.n[11].ID + ". " + jsonObject.n[11].;
//     document.getElementById("13").innerHTML = jsonObject.n[12].ID + ". " + jsonObject.n[12].;
//     document.getElementById("14").innerHTML = jsonObject.n[13].ID + ". " + jsonObject.n[13].;
//     document.getElementById("15").innerHTML = jsonObject.n[14].ID + ". " + jsonObject.n[14].;
//     document.getElementById("16").innerHTML = jsonObject.n[15].ID + ". " + jsonObject.n[15].;
//     document.getElementById("17").innerHTML = jsonObject.n[16].ID + ". " + jsonObject.n[16].;
//     document.getElementById("18").innerHTML = jsonObject.n[17].ID + ". " + jsonObject.n[17].;
//     document.getElementById("19").innerHTML = jsonObject.n[18].ID + ". " + jsonObject.n[18].;
//     document.getElementById("20").innerHTML = jsonObject.n[19].ID + ". " + jsonObject.n[19].;
//     document.getElementById("21").innerHTML = jsonObject.n[20].ID + ". " + jsonObject.n[20].;
//     document.getElementById("22").innerHTML = jsonObject.n[21].ID + ". " + jsonObject.n[21].;
//     document.getElementById("23").innerHTML = jsonObject.n[22].ID + ". " + jsonObject.n[22].;
//     document.getElementById("24").innerHTML = jsonObject.n[23].ID + ". " + jsonObject.n[23].;

//     document.getElementById("Antwort1").innerHTML = textSpalte2
//     document.getElementById("Antwort2").innerHTML = textSpalte2
//     document.getElementById("Antwort3").innerHTML = textSpalte2
//     document.getElementById("Antwort4").innerHTML = textSpalte2
//     document.getElementById("Antwort5").innerHTML = textSpalte2
//     document.getElementById("Antwort6").innerHTML = textSpalte2
//     document.getElementById("Antwort7").innerHTML = textSpalte2
//     document.getElementById("Antwort8").innerHTML = textSpalte2
//     document.getElementById("Antwort9").innerHTML = textSpalte2
//     document.getElementById("Antwort10").innerHTML = textSpalte2
//     document.getElementById("Antwort11").innerHTML = textSpalte2
//     document.getElementById("Antwort12").innerHTML = textSpalte2
//     document.getElementById("Antwort13").innerHTML = textSpalte2
//     document.getElementById("Antwort14").innerHTML = textSpalte2
//     document.getElementById("Antwort15").innerHTML = textSpalte2
//     document.getElementById("Antwort16").innerHTML = textSpalte2
//     document.getElementById("Antwort17").innerHTML = textSpalte2
//     document.getElementById("Antwort18").innerHTML = textSpalte2
//     document.getElementById("Antwort19").innerHTML = textSpalte2
//     document.getElementById("Antwort20").innerHTML = textSpalte2
//     document.getElementById("Antwort21").innerHTML = textSpalte2
//     document.getElementById("Antwort22").innerHTML = textSpalte2
//     document.getElementById("Antwort23").innerHTML = textSpalte2
//     document.getElementById("Antwort24").innerHTML = textSpalte2
//   };
