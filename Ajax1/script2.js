let buttonA = document.querySelector('button')

function getUsers(pageNo) {
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            console.log(res.data[0].id)
            return res.data[0].id
        })
}

function getIndividualUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            console.log(res.dat)
            return res.data
        })
}

function renderHtml(obj) {
    document.write(`<h1>${obj.id}</h1>`)
    document.write(`<h3>${obj.first_name}${obj.last_name}</h3>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<img src = ${obj.avatar}>`)
}


getUsers(9)
.then(function(id){
    return getIndividualUser(id)
})
.then(function(user){
    renderHtml(user)
})

// let inVAl = document.querySelector('input')
// let n = inVAl.value

// buttonA.addEventListener('click',function(){
//     getUsers(n)
// .then(function(n){
//     return getIndividualUser(n)
// })
// .then(function(n){
//     renderHtml(n)
// })
// n = ""
// })


//using async await
// let buttonB = document.querySelector('button')
// let pageNoA = document.querySelector('#one')
// let idA = document.querySelector('#two')
// let pg = pageNoA.value
// let idB = idA.value

// async function getinfo(pageNo) {
//     let id = getUsers(pageNo)
//     let user = getIndividualUser(id)
//     renderHtml(user)
// }
// getinfo(1)
// getIndividualUser(3)
// .then(function (user) {
//     renderHtml(user)
// })


// buttonB.addEventListener('click', function () {
//     getinfo(pg)
//     getIndividualUser(idB)
//     .then(function (user) {
//         renderHtml(user)
//     })
// })
   