//Time in secods calculator: **text.html**


let speedInkm = document.querySelector('#one')
let dist = document.querySelector('#two')


let Button = document.querySelector('button')
Button.addEventListener('click', function () {
    let InKm = speedInkm.value
    let Dist = dist.value
    let inMs = InKm * 5 / 18
    let time = Dist / inMs
    let out = document.querySelector('output')
    out.textContent = time+"sec"
})