//program 1
// function AdittionA(){
//     console.log("A is exicuted")
// }

// function AdittionB(){
//     console.log("B is exicuted")
// }

// function AdittionC(){
//     console.log("C is exicuted")
// }
// AdittionA()
// AdittionB()
// AdittionC()

//the functions are exucuted one by one in the order of calling

//program 2

// function SumA(){
//     setTimeout(function(){
//         console.log("A is exicuted")
//     },3000)
// }

// function SumB(){
//     console.log("B is exicuted")
// }
// SumA()
// SumB()

//in this case as we set a delay of 3000 mili seconds to SumA()  it will exicute after exicution of SumB()

//program 3
//create user----------user got id----------info by id
// function infoUser(){
//     setTimeout(function(){
//         console.log("User created")
//     },3000)
//     setTimeout(function(){
//         console.log("User got Id")
//     },2000)
//     setTimeout(function(){
//         console.log("User Informaton from id")
//     },1000)
// }
// infoUser()

//program exicuting in reverse oreder (wrong order)


//program 4
function infoUserA(){
    setTimeout(function(){
        console.log("User created")
        setTimeout(function(){
            console.log("User got Id")
            setTimeout(function(){
                console.log("User Informaton from id")
            },1000)
        },2000)
    },3000) 
}
infoUserA()

//this code will run properly but every time every function will got called