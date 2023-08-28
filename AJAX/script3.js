let pro1 = new Promise(function(resolve,reject){
    let num = 144
    if(Math.sqrt(num) == 12){
        resolve("It's a suare root")
    }
    else{
        reject("No it is not a square root")
    }
})

//consuming promise
pro1
.then(function(p){
    console.log(p)
    return "Done"
}) //it will return done for next .then   this is known as chaining
.then(function(p1){
    console.log(p1)
})
.catch(function(p3){
    console.log(p3)
})
.finally(function(){
    console.log("finally exicuted")
})