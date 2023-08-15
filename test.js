let myName = "Neeraj";
let sumof5and4 = 5 + 4; // function that adds 5 and 4

console.log(myName);

const NumberOfStates = 50;

function SayHello() {
  console.log("Hello World!");
}
SayHello();

let myAge = 20;

function checkAge(myName, myAge) {
  if (myAge < 21) {
    console.log(
      "Sorry, " + myName + ", you are not old enough to view this page"
    );
  }
}

checkAge(myName, myAge);
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
/*

function checkAge(myName) {
  console.log(
    "Sorry, " + myName + ", you are not old enough to view this page"
  );
}
*/
// changing this line
let pets = {
  name: "Wolfie",
  make: "Golden Retriever",
};

let vegetables = ["carrots", "tomatoes", "cucumber", "broccoli"];
let VegetablesLength = vegetables.length;

for (let z = 0; z < VegetablesLength; z++) {
  console.log(vegetables[z]);
}

let NameAndAge = [
  {
    name: "andrew",
    age: 15,
  },
  {
    name: "Bobby",
    age: 16,
  },
  {
    name: "charles",
    age: 35,
  },
  {
    name: "Dave",
    age: 18,
  },
  {
    name: "Edward",
    age: 55,
  },
];

for (z = 0; z < 5; z++) {
  checkAge(NameAndAge[z].name, NameAndAge[z].age);
}

getLength(tobechecked){
    if (tobechecked.length % 2 = 0)
}