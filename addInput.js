const usd_1 = document.querySelector('#usa_1')
const brl_1 = document.querySelector('#brl_1')
const eur_1 = document.querySelector('#eur_1')
const gbp_1 = document.querySelector('#gbp_1')
const aud_1 = document.querySelector('#aud_1')
const cny_1 = document.querySelector('#cny_1')
const btc_1 = document.querySelector('#btc_1')

const usd_2 = document.querySelector('#usa_2')
const brl_2 = document.querySelector('#brl_2')
const eur_2 = document.querySelector('#eur_2')
const gbp_2 = document.querySelector('#gbp_2')
const aud_2 = document.querySelector('#aud_2')
const cny_2 = document.querySelector('#cny_2')
const btc_2 = document.querySelector('#btc_2')

const inputPrimeiraMoeda = document.querySelector('#input_primeira_moeda')
const inputSegundaMoeda = document.querySelector('#input_segunda_moeda')

let valor = ''

usd_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'USD'
})
brl_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'BRL'
})
eur_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'EUR'
})
gbp_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'GBP'
})
aud_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'AUD'
})
cny_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'CNY'
})
btc_1.addEventListener('click', function () {
    inputPrimeiraMoeda.value = 'BTC'
})

usd_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'USD'
})
brl_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'BRL'
})
eur_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'EUR'
})
gbp_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'GBP'
})
aud_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'AUD'
})
cny_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'CNY'
})
btc_2.addEventListener('click', function () {
    inputSegundaMoeda.value = 'BTC'
})
