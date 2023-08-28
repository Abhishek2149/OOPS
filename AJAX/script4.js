//solving problem of callback hell using Promises
function Info(){
    setTimeout(function(){
        console.log("User Created")
    },3000)
    setTimeout(function(){
        console.log("User get ID")
    },2000)
    setTimeout(function(){
        console.log("Get info by ID")
    },1000)
}
//Info()

//In this this code is async in nature
//but our requirement is sync
//we use callback hell to achive it

function Info1(){
    setTimeout(function(resolve){
        console.log("User Created")
        setTimeout(function(resolve){
            console.log("User get ID")
            setTimeout(function(resolve){
                console.log("Get info by ID")
            },1000)
        },2000)
    },3000)
}
// Info1()

//problem of sync is solved but it having low rediability, more complexity
//to avoid this we use promises

function createUser(){
    let pro = new Promise(function(resolve){
        setTimeout(function(){
            resolve("User Created")
        },3000)
    })
    return pro
}

function userGetId(){
    let pro1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve("User Get ID")
        },2000)
    })
    return pro1
}

function getInfoById(){
    let pro2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Get Info By Id")
        },1000)
    })
    return pro2
}

createUser()
.then(function(p){
    console.log(p)
    return userGetId()
})
.then(function(p1){
    console.log(p1)
    return getInfoById()
})
.then(function(p2){
    console.log(p2)
})