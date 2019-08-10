//Number

// Integer
var i;            // first declaration of i (type is undefined)
i = 2;            // i is now a integer (type is number)
console.log(i);

// Float
var i = -5.01;    // second declaration of i as a float (type is number)
j = 2;            // j was not declared, automatic assignement to 2
j = i + 1.12;     // j is now a float equal to 3.12 (still number)
// Be careful
var k = 0.1 + 0.2 // k => 0.30000000000000004

console.log(k);

var l = new Number(7);    // DO NOT USE : type is object and not number

// Specials
var a = 10 / 0;           // => Infinity
var b = -10 / 0;          // => -Infinity
var c = Math.sqrt(-1);    // => NaN : Not a Number

//String
var a = ""; // The empty string: it has zero characters
var b = 'There is no spoon.';
var c = "Only human.";
var d = 'pill="red"';
var e = "Free your mind.";
var f = "You're empty.\nSo are you."; // Type of all variables is string

console.log(f);

var g = new String("Welcome to the real world.");
// DO NOT USE : type is object and not string

//Boolean
var realWorld = false;
var matrix = true;         // Type of all variables is boolean

var a = new Boolean(true); // DO NOT USE : type is object and not boolean

//null and undefined
var neo;      // Type is undefined
neo = null;   // Type is object

//Creating Array 
var a = [];                         // no elements
var b = new Array();                // equivalent to a
var c = [,,,,];                     // 4 elements, all undefined.
var d = new Array(4);               // equivalent to c
var e = ["the", 1, true];           // 3 elements of different types
var f = new Array("the", 1, true);  // equivalent to e

//Reading and writing
var a = ["white"];    // Start with a one-element array

var b = a[0];         // b => "white"
var c = a[100];       // c => undefined (no error)

a[1] = 3.14;          // a => ["white", 3.14]
var i = 2;
a[i] = 3;             // a => ["white", 3.14, 3]
a[i + 1] = "rabbit";  // a => ["white", 3.14, 3, "rabbit"]
a[a[i]] = a[0];       // a => ["white", 3.14, 3, "white"]

var d = a.length;     // d => 4

console.log(d);

//Adding and deleting
var a = ["follow", "the", "white", "rabbit"];
console.log(a);
var b = a.pop();             // a => ["follow", "the", "white"]
                             // b => "rabbit"
var c = a.push("RABBIT");    // a => ["follow", "the", "white", "RABBIT"]
                             // c => 4 (new length)

console.log(a);

var d = a.shift();           // a => ["the", "white", "RABBIT"]
                             // d => "follow"
var e = a.unshift("FOLLOW"); // a => ["FOLLOW", "the", "white", "RABBIT"]
                             // e => 4 (new length)

console.log(d);
console.log(e);

//Arithmetics
var a = 6 + 4;                    // a => 10
var b = -a;                       // b => -10
var c = 6 - 4;                    // c => 2
var d = 1, e = ++d;               // d and e are both 2
var f = 1, g = f++;               // f is 2, g is 1
var h = 7, i = --h;               // h and i are both 6
var j = 7, k = j--;               // j is 6, k is 7
var l = 3 * 3                     // l => 9
var m = 10 / 3                    // m => 3.3333333333333335
var n = 10 % 3                    // n => 1
var o = "Dodge" + " " + "this."   // o => "Dodge this.";

// Equality
var a = "2" == 2;    // a => true
var b = "2" != 2;    // b => false
// Strict equality
var c = "2" === 2;   // c => false
var d = "2" !== 2;   // d => true

//Comparison
var a = 2 > 2;          // a => false
var b = 2 <= 2;         // b => true
var c = "2" >= 2;       // c => true
var d = 2 < 2;          // d => false
var e = 2 <= 2;         // e => true
var f = 'abc' < 'def'   // f => true

//Logical
var a = true && false;  // a => false
var b = true || false;  // b => true
var c = !true;          // c => false

//Bitwise
var a = 42 & 2   // a =>          2  (AND)
var b =  7 | 2   // b =>          2  (OR)
var c =  7 ^ 2   // c =>          7  (XOR)
var d = ~8       // d =>         -7  (NOT)
var e =  1 << 3  // e =>          8  (Shift left)
var f =  8 >> 2  // f =>          2  (Shift right)
var g = -1 >>  2 // g =>         -1
var h = -1 >>> 2 // h => 1073741823  (Shift right with zero fill)

//Assignement
var a = 1, b = 0;
a += b    // a = a + b
a -= b    // a = a - b
a *= b    // a = a * b
a /= b    // a = a / b
a %= b    // a = a % b
a <<= b   // a = a << b
a >>= b   // a = a >> b
a >>>= b  // a = a >>> b
a &= b    // a = a & b
a |= b    // a = a | b
a ^= b    // a = a ^ b

//in
var a = [1,9,4];
var b = (2 in a);          // b => true
var c = (9 in a);          // c => false
//var d = (length in a);     // d => true

//typeof is used at compilation time to verify the type of a variable.
var a = 3;
var b = typeof a;   // b => "number"
var c = "";
var d = typeof c;   // d => "string"
var e = true;
var f = typeof e;   // f => "boolean"

//Explicit Type conversions
// to Number
var a = Number("10");         // a => 10
var b = Number(false);        // b =>  0
var c = parseInt("10", 10);   // c => 10
var d = parseInt(10.2);       // d => 10
var e = parseFloat("10.2");   // e => 10.2
// to String
var a = String(false);        // a => "false"
var b = String(10);           // b => "10"
var c = String(10.2);         // c => "10.2"
var d = (10).toString();      // d => "10"
// to Boolean
var a = Boolean(10);          // a => true
var b = Boolean(0);           // b => false
var c = Boolean(0.3);         // c => true
var d = Boolean("true");      // d => true

//Implicit Type conversions
// to Number
var a = +"10";            // a => 10
var b = "10" >> 0;        // b => 10
var c = "10" * 1;         // c => 10
var d = ~~"10";           // d => 10
var e = "2" * "5";        // e => 10 (both strings converts to number)
// to String
var a = 10 + "10";             // a => "1010"
var b = "10" + "10";           // b => "1010"
var c = 10 + " agents";        // c => "10 agents"
var d = 10 + 10 + " agents";   // d => "20 agents"
// to Boolean
var a = !!'morpheus';     // a => true
var b = !!'';             // b => false
var c = !!'0';            // c => true
var d = !!'1';            // d => true


//Conditionnal - if/else
var username = "vishwa";
if (username == null) {  // if username is null or undefined,
  username = "Trinity";  // define it
}

var bulletCount = 10;
if (bulletCount === 1) {
  bulletCount += ' bullet';
} else {
  bulletCount += ' bullets';
}

var name;
var user = (name == null) ? 'default user' : name;

//Conditionnal - switch
var quote;
var characterName = "Smith";
switch (characterName) {
  case 'Smith':
    quote = 'Goodbye, Mr. Anderson...';
    break;
  case 'Neo':
    quote = 'I know kung fu.';
    break;
  default:
    quote = 'What is the Matrix?';
    break;
}

console.log(quote);

console.log('Perhaps we are asking the wrong questions.');
console.error('Nothing. Just had a little déjà vu.');
console.info('A déjà vu is usually a glitch in the Matrix.');
console.warn('The Matrix is a system, Neo. That system is our enemy.'); 