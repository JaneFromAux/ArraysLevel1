
console.log("Level1_1_1");
adresse = ["Holzweg", , 86156, "Augsburg", "Bayern"];
besteFreunde = ["Nora", "Marie", "Stefan", "Martin", "Berndt", "Dorothe", "Rizan", "Salina", "Daisy"];
person = ["Janette", "Schäfer", "Jane", 30, "Musik", "Schwabmünchen", "Supercode"];
console.log(adresse);
console.log(besteFreunde);
console.log(person);
console.log(person.push(adresse, besteFreunde));
console.log(person);
console.log(person[0]);
console.log(person[7]);
console.log(person[8]);
console.log("Level1_1_2");
console.log(adresse.length);
console.log(besteFreunde.length);
console.log(person.length);

console.log("Level1_2");
meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed"];
console.log(meineTrainer1);
let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);
let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);

console.log("Level1_3");
let numberArray = new Array(5, 6, 7, 8, 9, 10);
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

console.log("Level1_4");
let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = "Heute ist ein großer Tag für uns.";
let split1 = meinText1.split();
let split2 = meinText1.split("");//jeder Anschlag einzeln
let split3 = meinText1.split(" "); // jedes Wort einzeln
console.log(split1);
console.log(split2);
console.log(split3);
let split11 = meinText2.split();
let split22 = meinText2.split("");
let split33 = meinText2.split(" ");
console.log(split11);
console.log(split22);
console.log(split33);
let split111 = meinText3.split();
let split222 = meinText3.split("");
let split333 = meinText3.split(" ");
console.log(split111);
console.log(split222);
console.log(split333);

console.log("Level1_5_1");
songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
songs.push("Techno Ballerina", "Olive", "Rocca");
let totalsongs = songs;
console.log(totalsongs);
besteFussballerAllerZeiten = ["Fußballer1", "Fußballer2", "Fußballer3", "Fußballer4", "Fußballer5"];
besteFussballerAllerZeiten.push("Torwart1", "Torwart2", "Hier könnte Ihr Name stehen");
console.log(besteFussballerAllerZeiten);

console.log("Level1_5_2");
let heroUndEnemy = new Array(["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]);
heroUndEnemy.unshift(["SuperBero", "Hände waschen"], ["SuperMartin", "aufräumen"], ["SuperJane", "Fasten"]);
console.log(heroUndEnemy);

console.log("Level1_6");
let entfernterSong = totalsongs.pop();
console.log(totalsongs);
console.log(entfernterSong);
let entfernterFussballer = besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);
console.log(entfernterFussballer);
besteFussballerAllerZeiten.splice(0, 3);
console.log(besteFussballerAllerZeiten);

console.log("Level1_7");
let deutscheGerichte = new Array("Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten");
deutscheGerichte.unshift("Pfannkuchen", "Flammkuchen", "Weißwurst", "Brezen", "Weißbier");
console.log(deutscheGerichte);

console.log("Level1_8");
let nichtGut = new Array(deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift());
console.log(nichtGut);

console.log("Level1_9");
let arr1 = new Array(23, 54, 75);
arr1.push(1, 2, 3, 4, 5);
console.log(arr1);
arr1.unshift(11, 22, 33, 44, 55);
console.log(arr1);
let popp = new Array(arr1.pop(), arr1.pop());
console.log(arr1);
console.log(popp);
let shifty = new Array(arr1.shift(), arr1.shift());
console.log(arr1);
console.log(shifty);

console.log("Level1_12");
let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let copyImg1 = array.slice(7, 15);
console.log(copyImg1);
let copyImg2 = array.slice(6, 12);
console.log(copyImg2);