let Pcount = 0;
let Lcount = 2;
let Acount = 0;
let s = "PPALLL";
for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
        Acount++;
    }
    else if (s[i] === "P") {
        Pcount++
    }
    else if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
        Lcount++;
    }
}
console.log(Acount)
console.log(Lcount)
console.log(Pcount)

if (Acount >= 2) {
    console.log(false)
}
else if (Lcount >= 2) {
    console.log(false)
}
else {
    console.log(true)
}