//BASICS EXCERCICES

//Excercice 1

const message=("Bonjour Javascipt !");
console.log(message);

//Excercice 2

const city = ("Paris");
const year = ("2025");
const isSunny =(false);
console.log("Je vis à " + city + " en "+ year +" "+false);

//Excercice 3 

const score = 10; 
console.log(score + 5);

//Exercice 4

const a = 5;
const b = "5";

console.log(a==b); // true
console.log(a===b); // false

//Exercice 5

// const name = "Alice";
// const age = 30;
// const isMarried = false;
// const hobbies = ["cinema", "sport"];

// console.log(typeof name, typeof age, typeof isMarried, typeof hobbies );

//Exercice 6

const car = {
    brand:"Toyota",
    year: 2015,
    isElectric: false
}
console.log(car)

//Exercice 7

const temp = 22

if(temp >= 20){
console.log("Il fait chaud")
}
    else
    { console.log("Il fait froid");

}

//NUMBERS EXERCICES

//Exercice 2
const circonf = 2 * Math.PI * 5;
console.log(circonf)

console.log(Math.sqrt(144))

console.log(Math.floor(Math.random()*10)+1)

//Exercice 3

console.log( 123%10)
console.log(parseInt("256")+10)


//STRINGS EXCERCICES

//Exercice 2
// const firstname= "Patrick";
// const age = 36;

// console.log(`Le m'appelle ${firstname} et j'ai ${age}`);

//Exercice 3
const sentence = "J'aime le café";
const newSentence = sentence.replace("café", "thé")

console.log(newSentence)

//Exercice 5

const lengthSentence = "Bonjour à tous!";
console.log(lengthSentence.length);

//Exercice 8

const prenom = "Jul";
let prenomPhrase = `Bonjour ${prenom}`
console.log(prenomPhrase)

if(prenom.length < 5)
    prenomPhrase=prenomPhrase.replace("Bonjour", "Salut")

console.log(prenomPhrase)

//CONDITIONS EXCERCICES

//Exercice 1
const age = 20;
if(age > 18)
    console.log("Majeur!")

//Exercice 2

const x=2;

if(x > 10)
    console.log("x est supérieur à 10")
else
console.log("x est inférieur à 10")

//Exercice 3

const country = "GB"

if(country === "Espagne")
    console.log("Ola")
else if(country === "France")
    console.log("Bonjour")
else if(country === "Allemagne")
    console.log("Guten Tag")
else console.log("Hello")

//Exercice 9

const note = 1

const mention = note >= 10 ? "Réussi" : "Echec";
console.log(mention)