






var JSonString = '{"Fragen":[' +
    '{"ID": "1", "Frage": "Das Leben gelingt besser , wenn man das Positive sieht,  anstatt sich am Negativen aufzuhalten."}]}';
    
    
    // {
    //     "ID": "2",
    //     "Frage": "Ich kann auch emotional sehr angespannte Situationen nüchtern und mit Abstand betrachten."
    // },
    // {
    //     "ID": "3",
    //     "Frage": "Ich arbeite gerne innerhalb einer Institution."
    // },
    // {
    //     "ID": "4",
    //     "Frage": "Wichtig an einem Menschen ist, dass er etwas \"darstellt\"."
    // },
    // {
    //     "ID": "5",
    //     "Frage": "Ich möchte unabhängig sein."
    // },
    // {
    //     "ID": "6",
    //     "Frage": "Am wichtigsten ist mir, dass sich die Menschen bei mir wohlfühlen."
    // },
    // {
    //     "ID": "7",
    //     "Frage": "Für mich ist es wichtig die Zukunft zu planen, damit ich weiß, was auf mich zukommt."
    // },
    // {
    //     "ID": "8",
    //     "Frage": "Wenn jemand meine Hilfe braucht, bin ich bereit, meine ganze Kraft für ihn einzusetzen."
    // },
    // {
    //     "ID": "9",
    //     "Frage": "Ich möchte leidenschaftlich, emotional und mit allen Sinnen leben - auch wenn es schmerzt."
    // },
    // {
    //     "ID": "10",
    //     "Frage": "Eigene und fremde Unvollkommenheit kann ich nur schwer ertragen."
    // },
    // {
    //     "ID": "11",
    //     "Frage": "Erfolg und Status (Orden, Ämter, Titel) spielen für mich eine große Rolle."
    // },
    // {
    //     "ID": "12",
    //     "Frage": "In der Liebe sind vor allem Anstand und Benehmen wichtig."
    // },
    // {
    //     "ID": "13",
    //     "Frage": "In der Liebe sind vor allem Anstand und Benehmen wichtig."
    // },
    // {
    //     "ID": "14",
    //     "Frage": "Ich engagiere mich für Randgruppen, Benachteiligte und Rechtlose (Asylsuchende, Kinder in der 3. Welt, Ausländer etc.)."
    // },
    // {
    //     "ID": "15",
    //     "Frage": "Das Leben ist wie ein Theaterstück, bei dem ich gleichzeitig Zuschauer und Schauspieler bin."
    // },
    // {
    //     "ID": "16",
    //     "Frage": "Für mein berufliches Fortkommen bin ich bereit, Ehe, Familie oder Freunde hintanzustellen."
    // },
    // {
    //     "ID": "17",
    //     "Frage": "Mich plagt oft ein schlechtes Gewissen."
    // },
    // {
    //     "ID": "18",
    //     "Frage": "Ich habe den Eindruck, dass sogenannte \"Autoritäten\" oft inkompetent sind, aber ich zögere meist, gegen sie vorzugehen."
    // },
    // {
    //     "ID": "19",
    //     "Frage": "Ich lasse die Dinge gerne auf mich zukommen- vieles regelt sich dann schon ganz von alleine."
    // },
    // {
    //     "ID": "20",
    //     "Frage": "Ich muss wissen, wohin ich gehöre."
    // },
    // {
    //     "ID": "21",
    //     "Frage": "Ich genieße es, die Aufmerksamkeit anderer zu erregen und im Mittelpunkt zu stehen."
    // },
    // {
    //     "ID": "22",
    //     "Frage": "Ich halte meinen Ärger oft zurück."
    // },
    // {
    //     "ID": "23",
    //     "Frage": "Ich habe das Gefühl, nie \"ganz erfüllt\" sein zu können."
    // },
    // {
    //     "ID": "24",
    //     "Frage": "Oft ahne ich, was in anderen vorgeht, bevor sie es aussprechen."
    // }


var jsonObject= JSON.parse(JSonString);

window.onload = function (){
        myFunktion();
    };


function myFunktion(){
    document.getElementById("Frage1").innerHTML =  jsonObject.Fragen[0].ID + ". " +  jsonObject.Fragen[0].Frage;
};