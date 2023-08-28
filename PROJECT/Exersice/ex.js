const Input = require("prompt-sync")()


// let greatestLetter = function() {
//     let hold='';
//     for(let i=0;i<s.length;i++){
//         //  converts to lower case     check for other lower case letter
//         if(s[i].toLowerCase()!=s[i] && s.includes(s[i].toLowerCase())){
//             hold=hold>s[i]?hold:s[i];
//         }
//     }
//     console.log(hold)
   
// }
// let s = Input("Enter a String:")
// greatestLetter(s)


var cookies = []
let n = Input("Enter a length of array")
for(let i = 0;i<n;i++){
    cookies[i] = Input("Enter a bags (Element):")
}

console.log(cookies)

