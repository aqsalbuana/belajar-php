//code structure
console.log("Hello World");
alert("Hello World");

//javascript variables
var nama = "aqs";
let id = 123;
const alamat = "kps";

// Data Type Number
console.log("aqs + 1");
console.log("al");
console.log(Nan * 3);

// Data Type Bigint

//Data Type String
const nama1 = "aqs";
const nama2 = "aqs";
const nama3 = `aqs`;

//Data Type Boolean
let isLoggedIn = true;
let isAdmin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;

//Data Type Null
let girlfriend = null;

//Data Type Undefined
let name;
console.log("aqs");

//Data Type Symbol
let employee = Symbol("aqs");
console.log(employee);
console.log(employee.description);

//Data Type Object

//Type Conversion String
value = String(value);
alert(typeof value);

//Type Conversion Numeric
alert("6" / "2");

//Type Conversion Boolean
alert(Boolean(1));
alert(Boolean(0));

alert(Boolean("aqs"));
alert(Boolean(""));

//Aritmethic Operator
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Assignment Operator
let ax = 2;
console.log(ax);

ax += 5;
console.log(ax);

//Comparison Operator
let abi = 4;
let bubu = 5;

console.log(abi == bubu);
console.log(abi < bubu);
console.log(abi > bubu);
console.log(abi != bubu);

//Logical Operator
let one = true;
let piece = false;

console.log(one && piece);
console.log(one || piece);
console.log(!one);

//Bitwise Operator
let aqsal = 1001;
let arya = 1010;

console.log(aqsal & arya);
console.log(aqsal | arya);
console.log(aqsal ^ arya);
console.log(~a);

//Ternary Operator
let iya = 1;
let engga = 1;

console.log(a == b ? "yes" : "no");

//Pop Up Alert
alert("Selamat Datang di Tempat Saya");
alert("Sekarang tanggal: " + new Date());

//Pop Up Box
let response = prompt("Apakah Kamu mau nonton");
alert("Jawabannya adalah" + response);

//Pop up Confirm
let jawaban = confirm("mau makan bang?");
alert("Jawabannya:" + jawaban);

//Conditional IF
let resp = prompt("2+2");
if (resp == 4) {
  alert("correct!");
}

//Conditional IF ELSE
let re = prompt("2+2=");
if (re == 2) {
  alert("correct!");
} else {
  alert("Wrong!");
}

//Conditional ELSE IF
let res = prompt("1+1=");
if (res == 2) {
  alert("correct!");
} else if (res < 2) {
  alert("Too Low!");
} else {
  alert("Too high!");
}

//Conditional Switch
let color = "red";

switch (color) {
  case "green":
    alert("i hate green");
    break;
  case "red":
    alert("i hate red");
    break;
  default:
    alert("i don't know");
    break;
}

// Loop For
for (let i = 0; 1 < 5; i++) {
  console.log("Iterasi ke ${1}");
}

// Loop Do While
let i = 0;

do {
  console.log("iterasi ke ${i}");
  1 + 1;
} while (1 < 5);

//Loop While
let f = 0;

while (f < 5) {
  console.log("Iterasi ke ${f}");
  f++;
}

//Loop Control Break
for (let g = 0; g < 5; g++) {
  if (g == 3) {
    break;
  }
  console.log("iterasi ke ${g}");
}

//Loop Control Continue
for (let h = 0; h < 5; h++) {
  if (h == 3) {
    continue;
  }
  console.log("iterasi ke ${h}");
}
