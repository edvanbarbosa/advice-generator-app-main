const id = document.querySelector('.indice-conselho')
const conselho = document.querySelector('p')
const btn = document.querySelector('button')

const requestUrl = 'https://api.adviceslip.com/advice'

function getAdvice() {
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            conselho.innerHTML = `"${data.slip.advice}"`
            id.innerHTML = data.slip.id
        })
}

btn.addEventListener('click', getAdvice)