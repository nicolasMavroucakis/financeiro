const primeiroInput = document.querySelector('#prim_moeda')
const segundoInput = document.querySelector('#seg_moeda')
const tiposPrimeiraMoeda = document.querySelector('.tipos_primeira_moeda')
const tiposSegundaMoeda = document.querySelector('.tipos_segunda_moeda')
const selecionarMoedas = document.querySelector('.selecionar_moeda')


primeiroInput.addEventListener('click', primeiroInputDesign)
segundoInput.addEventListener('click', segundoInputDesign)

function primeiroInputDesign () {
    if (primeiroInput.classList.contains('active')) {
        primeiroInput.classList.remove('active')
        tiposPrimeiraMoeda.classList.remove('active')
        selecionarMoedas.classList.remove('active')
    } else {
        primeiroInput.classList.add('active')
        tiposPrimeiraMoeda.classList.add('active')
        selecionarMoedas.classList.add('active')
    }
    
}

function segundoInputDesign () {
    if (segundoInput.classList.contains('active')) {
        segundoInput.classList.remove('active')
        tiposSegundaMoeda.classList.remove('active')
        selecionarMoedas.classList.remove('active')
    } else {
        segundoInput.classList.add('active')
        tiposSegundaMoeda.classList.add('active')
        selecionarMoedas.classList.add('active')
    }
}
