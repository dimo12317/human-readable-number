module.exports = function toReadable (number) {
let zeroTen = {
0: 'zero',
1: 'one',
2: 'two',
3: 'three',
4: 'four',
5: 'five',
6: 'six',
7: 'seven',
8: 'eight',
9: 'nine',
10: 'ten'
}

let elevenTwenty = {
1: 'eleven',
2: 'twelve',
3: 'thirteen',
4: 'fourteen',
5: 'fifteen',
6: 'sixteen',
7: 'seventeen',
8: 'eighteen',
9: 'nineteen',
0: 'twenty',
}

let tenNinety = {
1: 'ten',
2: 'twenty',
3: 'thirty',
4: 'forty',
5: 'fifty',
6: 'sixty',
7: 'seventy',
8: 'eighty',
9: 'ninety',
}

if (number>=0 && number<=10){
return zeroTen[number];
}

if (number > 10 && number < 21){
return elevenTwenty[number.toString()[1]];
}

if (number > 20 && number < 100){
if (number.toString()[1] == "0"){
return tenNinety[number.toString()[0]];
} else {
return tenNinety[number.toString()[0]] + " " + zeroTen[number.toString()[1]];
}
}

if (number > 99 && number < 1000){
if (number.toString()[1] == "0" && number.toString()[2] == "0")
return zeroTen[number.toString()[0]] + " hundred";
if (number.toString()[1] == "0")
return zeroTen[number.toString()[0]] + " hundred " + zeroTen[number.toString()[2]];
if (number.toString()[1] == "1" && number.toString()[2] == 0)
return zeroTen[number.toString()[0]] + " hundred ten";
if (number.toString()[1] == "1")
return zeroTen[number.toString()[0]] + " hundred " + elevenTwenty[number.toString()[2]]
if (number.toString()[2] == "0")
return zeroTen[number.toString()[0]] + " hundred " + tenNinety[number.toString()[1]];
else
return zeroTen[number.toString()[0]] + " hundred " + tenNinety[number.toString()[1]] + " " + zeroTen[number.toString()[2]];
}
}
