
let botao = document.getElementById('button')
let select = document.getElementById('select-moedas')



async function converterMoedas() {

  let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function(resposta){
    return resposta.json()
  })
 
  let dolar = moedas.USDBRL.high
  let euro = moedas.EURBRL.high

  let inputValorReais = Number(document.getElementById('input').value)
  let inputMoedas = document.getElementById('input-moedas')
  let textoReal = document.getElementById('texto-real')

  if (select.value === 'US$ - Dolar Americano') {
    let valorDolares = inputValorReais / dolar
    inputMoedas.innerHTML = valorDolares.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  if(select.value === '€ - Euro') {
    let valorEuros = inputValorReais / euro
    inputMoedas.innerHTML = valorEuros.toLocaleString('de-DE', {style: 'currency', currency:'EUR'})

  }

  textoReal.innerHTML = inputValorReais.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

function trocaDeMoeda() {
  let textoMoedas = document.getElementById('texto-moedas')
  let bandeiraMoedas = document.getElementById('bandeira-moedas')

  if (select.value === 'US$ - Dolar Americano') {
    textoMoedas.innerHTML = 'Dolar Americano'
    bandeiraMoedas.src = 'imagens/estados-unidos.png'
  }

  if (select.value === '€ - Euro') {
    textoMoedas.innerHTML = 'Euro'
    bandeiraMoedas.src = 'imagens/euro.png'
  }

  converterMoedas()
}

botao.addEventListener('click', converterMoedas)
select.addEventListener('change', trocaDeMoeda)
