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

const name = "Alice";
const age = 30;
const isMarried = false;
const hobbies = ["cinema", "sport"];

console.log(typeof name, typeof age, typeof isMarried, typeof hobbies );

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

console.log(Math.random()*10)
