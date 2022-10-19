// Iteration 1: Names and Input

console.log("I'm ready");

let hacker1 = "Mark";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Steve";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let nomeFinal  = "";


for (let i = 0; i < hacker1.length; i++) {
    
    nomeFinal += `${hacker1[i].toUpperCase()} `
}

console.log(nomeFinal);

