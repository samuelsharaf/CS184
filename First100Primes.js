#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var out = "";
var primeArray = [];
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
var n = 1; 
do {
        if(isPrime(n)) {
		out += n + ",";
		primeArray.push(n);
		console.log(primeArray.length);
	}
		n++;
   }while (primeArray.length < 100);
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
