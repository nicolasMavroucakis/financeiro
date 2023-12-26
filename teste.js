const button = document.querySelector('.trade_button_div') 
const valor = document.querySelector('.moeda_scundaria_text')

button.addEventListener('click', function () {
    const deInput = document.querySelector('.input_primeira_moeda')
    const paraInput = document.querySelector('.input_segunda_moeda')

    if (deInput.value === 'USD' && paraInput.value === 'BRL') {
        fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then(response => response.json())
        .then(data => {
            let cotacao = data
            let valorDisplay = cotacao.USDBRL.bid
            valor.textContent = `${valorDisplay}`
        })
    }
})