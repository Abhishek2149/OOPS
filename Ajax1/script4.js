//writing functions with resolve state

function userOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("USER ONE RESOLVED")
        }, 2000)
    })
}

function userTwo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("USER TWO RESOLVED")
        }, 2000)
    })
}

function userThree() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("USER THREE RESOLVED")
        }, 2000)
    })
}

//WE ARE GOING TO TEST FOLLOWING OPERATIONS
/*
Promise.all()
Promise.race()
Promise.allSettled()
Promise.any()
*/

//1 Promise.all()
async function getUsersA() {
    let a = await Promise.all([
        userOne(),
        userTwo(),
        userThree(),
        //Promise.reject("FAIL")  -- in reject case it will give an error
    ])
    console.log(a)
}
// getUsersA()

//2 Promise.allSettled()

async function getUsersB() {
    let b = await Promise.allSettled([
        userOne(),
        userTwo(),
        Promise.reject("FAIL"),      //in case of allSelected()  it will not give error for reject state.
        userThree()
    ])
    console.log(b)
}
// getUsersB()

//3 Promise.race()
//it is using try-catch metod
//in case of any error(reject state it will exicute catch block)
async function getUsersC() {
    try {
        let c = await Promise.race([
            userOne(),
            // Promise.reject("REJECTED 1"),
            // Promise.reject("Rejected 2")
        ])
        console.log(c)
    }
    catch{
        console.log("Error occured")
    }
}
// getUsersC()


//4 Promise.any()
//IF ANY ONE IS IN RESOLVED STATE IT WILL NOT GIVE AN ERROR
async function getUsersD(){
    try{
        let d = await Promise.any([
            //userOne(),
            Promise.reject("REJECTED 1"),
            Promise.reject("Rejected 2"),
            Promise.reject("REJECTED 3"),
            Promise.reject("Rejected 4"),
            //userThree()
        ])
        console.log(d)
    }
    catch{
        console.log("ERROR OCCURED")
    }
}

getUsersD()