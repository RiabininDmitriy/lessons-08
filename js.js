var request = new XMLHttpRequest()
request.open(
    'GET',
    'http://ptsv2.com/t/RiabininDmitriy/d/210001/json'
)
request.send()

request.onerror = function (err) {
    console.log(this.responseText)
}
request.onload = function () {
    console.log(this.responseText)
    getResponse(this.responseText)
}
function getResponse(response) {
    const obj = JSON.parse(response)
    const objbody = JSON.parse(obj.Body)
    console.log(objbody)
    objbody.forEach((elem) => {
        const img = document.createElement("img")
        img.src = elem.ref
        const paragraph = document.createElement("p")
        paragraph.innerText = elem.title
        document.body.appendChild(img)
        document.body.appendChild(paragraph)
    })
}