//function as a parameter to another functuon

let add = function(x,y){
    return x+y
}

function addition(fn,x,y){
    let q1 = fn(x,y)
    return q1
}
let q2 = addition(add,45,5)
console.log(q2)

//encapsulation
//closures
function cal(){
    let a = 25
    let b = 75
    return function(){
        console.log(a+b)
    }
}
let q3 = cal()
q3()