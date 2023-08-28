//difference between arrow function and function expression
 var x = 10
 console.log(window.x)

 //window is global level decleration and acessable only for "var"  datatype

// var firstName = "Akash";
// var lastName = "Shirsath";
// let info ={
//     firstName:"Abhishek",
//     lastName:"Jaybhaye",
//     display:function(){
//         //value of this ------>info
//         console.log(this.firstName + " " + this.lastName)
//         let display1 = function(){
//             //value of this----->window
//             console.log(this.firstName + " " + this.lastName)
//         }
//         display1()
//     }
// }
// info.display()

/*here is one problem as we use function expression for first function it use parents(info) referance,
but the function inside child(display1) not using its parents(display) reference.
It using global level decleared variables
*/

//program 2
//using arrow function for display1

// var firstName = "Akash";
// var lastName = "Shirsath";
// let info ={
//     firstName:"Abhishek",
//     lastName:"Jaybhaye",
//     display:function(){
//         //value of this ------>info
//         console.log(this.firstName + " " + this.lastName)
//         let display1 = ()=>{
//             //because of arow function it will also use value(reference) of this as info
//             //value of this ------>info
//             console.log(this.firstName + " " + this.lastName)
//         }
//         display1()
//     }
// }
// info.display()

//program3
//using arrow function for both display and display1

var firstName = "Akash";
var lastName = "Shirsath";
let info ={
    firstName:"Abhishek",
    lastName:"Jaybhaye",
    display: () =>{
        //value of this ------>window
        console.log(this.firstName + " " + this.lastName)
        let display1 = () =>{
            //value of this----->window
            console.log(this.firstName + " " + this.lastName)
        }
        display1()
    }
}
info.display()

//if we use arrow function for both it will use global decleration