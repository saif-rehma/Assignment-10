//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does

// this video is for comment

// please dont change line 9 to 15 (saif)



/*let PersonName = "Muhammad saif ur rehman";
// Step 1 show in lower case
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
// step 2 show uppercase
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase
let words = PersonName.split(" ");
let titlecaseName = "";*/

for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);



