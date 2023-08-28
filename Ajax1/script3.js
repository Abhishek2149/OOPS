// user create  ----- get id  ---- get info

function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data[0].id)
        return response.data[0].id 
    })

}


function getSingle(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function renderHtml(obj){
        document.write(`<h1>${obj.id}</h2>`)
        document.write(`<h3>${obj.first_name}${obj.last_name}</h3>`)
        document.write(`<p>${obj.email}</p>`)
        document.write(`<img src = ${obj.avatar}>`)
}

// then()
getUsers(3)
.then(function(id){
    return getSingle(id)
})
.then(function(user){
    renderHtml(user)
})

// async await
// async function getinfo(pageNumber){
//     let id = await getUsers(pageNumber)
//     let user = await getSingle(id)
//     renderHtml(user)
// }
// getinfo(1)


// getSingle(3)
// .then(function(user){
//     renderHtml(user)
// })

// promise combinators