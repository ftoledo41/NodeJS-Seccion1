const fs = require("fs");
const content = fs.readFileSync("readme.md", "utf-8");

const wordCount = content.split(" ");
// para buscar palabras en un string
const reactwordCount = wordCount.filter((word) => word.toLowerCase() === "react").length;

// para buscar palabras en un string
const reactwordCount2 = wordCount.filter((word) => word.toLowerCase().includes("react")).length;

// para buscar palabras en un string con expresiones regulares
const reactwordCount3 = content.match(/react/gi ?? []).length;

console.log("Palabras:", wordCount.length)
console.log("Palabras React:", reactwordCount); //case insensitive
console.log("Palabras React:", reactwordCount2); //case insensitive
console.log("Palabras React:", reactwordCount3); //case insensitive
