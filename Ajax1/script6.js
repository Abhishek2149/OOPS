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


getIndividualUser(9)
.then(function(user){
    renderHtml(user)
})