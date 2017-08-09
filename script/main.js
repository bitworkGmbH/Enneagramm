
var textSpalte2 = " 0 1 2 3 4 5 6 ";

var JSonString = '{"Fragen":[' +
    '{"ID": "1", "Frage": "Das Leben gelingt besser , wenn man das Positive sieht,  anstatt sich am Negativen aufzuhalten."},' + 
    '{"ID": "2", "Frage": "Ich kann auch emotional sehr angespannte Situationen nüchtern und mit Abstand betrachten."},' +
    '{"ID": "3", "Frage": "Ich arbeite gerne innerhalb einer Institution."},' +
    '{"ID": "4", "Frage": "Wichtig an einem Menschen ist, dass er etwas &quot;darstellt&quot;."},' +
    '{"ID": "5", "Frage": "Ich möchte unabhängig sein."},' +
    '{"ID": "6", "Frage": "Am wichtigsten ist mir, dass sich die Menschen bei mir wohlfühlen."},'+
    '{"ID": "7", "Frage": "Für mich ist es wichtig die Zukunft zu planen, damit ich weiß, was auf mich zukommt."},' +
    '{"ID": "8", "Frage": "Wenn jemand meine Hilfe braucht, bin ich bereit, meine ganze Kraft für ihn einzusetzen."},' +
    '{"ID": "9", "Frage": "Ich möchte leidenschaftlich, emotional und mit allen Sinnen leben - auch wenn es schmerzt."},' +
    '{"ID": "10", "Frage": "Eigene und fremde Unvollkommenheit kann ich nur schwer ertragen."},' +
    '{"ID": "11", "Frage": "Erfolg und Status (Orden, Ämter, Titel) spielen für mich eine große Rolle."},' +
    '{"ID": "12", "Frage": "In der Liebe sind vor allem Anstand und Benehmen wichtig."},' +
    '{"ID": "13", "Frage": "In der Liebe sind vor allem Anstand und Benehmen wichtig."},' +
    '{"ID": "14", "Frage": "Ich engagiere mich für Randgruppen, Benachteiligte und Rechtlose (Asylsuchende, Kinder in der 3. Welt, Ausländer etc.)."},' +
    '{"ID": "15", "Frage": "Das Leben ist wie ein Theaterstück, bei dem ich gleichzeitig Zuschauer und Schauspieler bin."},' +
    '{"ID": "16", "Frage": "Für mein berufliches Fortkommen bin ich bereit, Ehe, Familie oder Freunde hintanzustellen."},' +
    '{"ID": "17", "Frage": "Mich plagt oft ein schlechtes Gewissen."},' +
    '{"ID": "18", "Frage": "Ich habe den Eindruck, dass sogenannte &quot;Autoritäten&quot; oft inkompetent sind, aber ich zögere meist, gegen sie vorzugehen."},' +
    '{"ID": "19", "Frage": "Ich lasse die Dinge gerne auf mich zukommen- vieles regelt sich dann schon ganz von alleine."},' +
    '{"ID": "20", "Frage": "Ich muss wissen, wohin ich gehöre."},'+
    '{"ID": "21", "Frage": "Ich genieße es, die Aufmerksamkeit anderer zu erregen und im Mittelpunkt zu stehen."},' +
    '{"ID": "22", "Frage": "Ich halte meinen Ärger oft zurück."},'+
    '{"ID": "23", "Frage": "Ich habe das Gefühl, nie &quot;ganz erfüllt&quot; sein zu können."},' +
    '{"ID": "24", "Frage": "Oft ahne ich, was in anderen vorgeht, bevor sie es aussprechen."}]}';


var jsonObject= JSON.parse(JSonString);

window.onload = function (){
        myFunktion();
    };



function myFunktion(){
    document.getElementById("Frage1").innerHTML =  jsonObject.Fragen[0].ID + ". " +  jsonObject.Fragen[0].Frage;
    document.getElementById("Frage2").innerHTML = jsonObject.Fragen[1].ID + ". " + jsonObject.Fragen[1].Frage;
    document.getElementById("Frage3").innerHTML = jsonObject.Fragen[2].ID + ". " + jsonObject.Fragen[2].Frage;
    document.getElementById("Frage4").innerHTML = jsonObject.Fragen[3].ID + ". " + jsonObject.Fragen[3].Frage;
    document.getElementById("Frage5").innerHTML = jsonObject.Fragen[4].ID + ". " + jsonObject.Fragen[4].Frage;
    document.getElementById("Frage6").innerHTML = jsonObject.Fragen[5].ID + ". " + jsonObject.Fragen[5].Frage;
    document.getElementById("Frage7").innerHTML = jsonObject.Fragen[6].ID + ". " + jsonObject.Fragen[6].Frage;
    document.getElementById("Frage8").innerHTML = jsonObject.Fragen[7].ID + ". " + jsonObject.Fragen[7].Frage;
    document.getElementById("Frage9").innerHTML = jsonObject.Fragen[8].ID + ". " + jsonObject.Fragen[8].Frage;
    document.getElementById("Frage10").innerHTML = jsonObject.Fragen[9].ID + ". " + jsonObject.Fragen[9].Frage;
    document.getElementById("Frage11").innerHTML = jsonObject.Fragen[10].ID + ". " + jsonObject.Fragen[10].Frage;
    document.getElementById("Frage12").innerHTML = jsonObject.Fragen[11].ID + ". " + jsonObject.Fragen[11].Frage;
    document.getElementById("Frage13").innerHTML = jsonObject.Fragen[12].ID + ". " + jsonObject.Fragen[12].Frage;
    document.getElementById("Frage14").innerHTML = jsonObject.Fragen[13].ID + ". " + jsonObject.Fragen[13].Frage;
    document.getElementById("Frage15").innerHTML = jsonObject.Fragen[14].ID + ". " + jsonObject.Fragen[14].Frage;
    document.getElementById("Frage16").innerHTML = jsonObject.Fragen[15].ID + ". " + jsonObject.Fragen[15].Frage;
    document.getElementById("Frage17").innerHTML = jsonObject.Fragen[16].ID + ". " + jsonObject.Fragen[16].Frage;
    document.getElementById("Frage18").innerHTML = jsonObject.Fragen[17].ID + ". " + jsonObject.Fragen[17].Frage;
    document.getElementById("Frage19").innerHTML = jsonObject.Fragen[18].ID + ". " + jsonObject.Fragen[18].Frage;
    document.getElementById("Frage20").innerHTML = jsonObject.Fragen[19].ID + ". " + jsonObject.Fragen[19].Frage;
    document.getElementById("Frage21").innerHTML = jsonObject.Fragen[20].ID + ". " + jsonObject.Fragen[20].Frage;
    document.getElementById("Frage22").innerHTML = jsonObject.Fragen[21].ID + ". " + jsonObject.Fragen[21].Frage;
    document.getElementById("Frage23").innerHTML = jsonObject.Fragen[22].ID + ". " + jsonObject.Fragen[22].Frage;
    document.getElementById("Frage24").innerHTML = jsonObject.Fragen[23].ID + ". " + jsonObject.Fragen[23].Frage;

    document.getElementById("Antwort1").innerHTML = textSpalte2
    document.getElementById("Antwort2").innerHTML = textSpalte2
    document.getElementById("Antwort3").innerHTML = textSpalte2
    document.getElementById("Antwort4").innerHTML = textSpalte2
    document.getElementById("Antwort5").innerHTML = textSpalte2
    document.getElementById("Antwort6").innerHTML = textSpalte2
    document.getElementById("Antwort7").innerHTML = textSpalte2
    document.getElementById("Antwort8").innerHTML = textSpalte2
    document.getElementById("Antwort9").innerHTML = textSpalte2
    document.getElementById("Antwort10").innerHTML = textSpalte2
    document.getElementById("Antwort11").innerHTML = textSpalte2
    document.getElementById("Antwort12").innerHTML = textSpalte2
    document.getElementById("Antwort13").innerHTML = textSpalte2
    document.getElementById("Antwort14").innerHTML = textSpalte2
    document.getElementById("Antwort15").innerHTML = textSpalte2
    document.getElementById("Antwort16").innerHTML = textSpalte2
    document.getElementById("Antwort17").innerHTML = textSpalte2
    document.getElementById("Antwort18").innerHTML = textSpalte2
    document.getElementById("Antwort19").innerHTML = textSpalte2
    document.getElementById("Antwort20").innerHTML = textSpalte2
    document.getElementById("Antwort21").innerHTML = textSpalte2
    document.getElementById("Antwort22").innerHTML = textSpalte2
    document.getElementById("Antwort23").innerHTML = textSpalte2
    document.getElementById("Antwort24").innerHTML = textSpalte2
  };

