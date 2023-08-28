//program 1 -- all the functions are in sync
//this function will exicute one by one as the order of calling
function AdditonA() {
    console.log("A is exicuted")
}

function AdditonB() {
    console.log("B is exicuted")
}

function AdditonC() {
    console.log("C is exicuted")
}

// AdditonB()
// AdditonA()
// AdditonC()

//program 2 ---- to make program async we use setTimeout()
function SumA() {
    setTimeout(function () {
        console.log("Sum A is exicuted")
    }, 3000)
}

function SumB() {
    console.log("Sum B is eicuted")
}

// SumA()     //SumB will exicute first and after 3 seconds SumA will exicuted
// SumB()


//program 3 ------ async code
function getInfo() {
    setTimeout(function () {
        console.log("User created")
    }, 3000)
    setTimeout(function () {
        console.log("Use got ID")
    }, 2000)
    setTimeout(function () {
        console.log("Get ifo by ID")
    }, 1000)
}

//getInfo()

//in above situation we have async code. but we need it as a sync code.
//so we use callback hell to make it in sync


//program 4
//call back hell ==>> async => sync
function getInfo1() {
    setTimeout(function () {
        console.log("User created")
        setTimeout(function () {
            console.log("Use got ID")
            setTimeout(function () {
                console.log("Get ifo by ID")
            }, 1000)
        }, 2000)
    }, 3000)
}
// getInfo1()



//in this senario we can achive sync code by call back hell,
//but code is looking much complicated and not easy to understand
//and all functions will be called evety time

//to overcome this problem we use Promises
//it having three states ==>>  pending,resolve,rejected

//Program 5

let pro = new Promise(function(resolve,rejected){
    let a = 12
    let b = Math.sqrt(144)
    if(a==b){
        resolve("a is square root of b")
    }
    else{
        rejected("a is not a square root of b")
    }
})



//program 6
pro.then(function(r){  //if Promise is resolve it will exicute first finction
    console.log(r)
},function(r){         //if Promise is not resolved it will exicute second function
    console.log(r)
})

let pro1 = new Promise(function(resolve,reject){
    let str = "Abhishek"
    if(str.length >=9){
        resolve([1,22,333,4444])
    }
    else{
        reject([-1,-22,-333,-4444])
    }
})
pro1.then(function(p){  //if resolve this will exicute
    console.log(p)
    console.log(p[2])
},function(p){          //if reject this will exicute
    console.log(p)
    console.log(p[2])
})

//with catch block
pro1
.then(function(n){
    console.log("RESOLVED")
    console.log(n)
})
.catch(function(n){             //it is used for rejected
    console.log("REJECTED")
    console.log(n)
})

//with finally --------- it will exicute every time resolve or rejected

pro1
.then(function(r){
    console.log(r[0])
})
.catch(function(r){
    console.log(r[0])
})
.finally(function(){
    console.log("This block will exicute every time")
})

