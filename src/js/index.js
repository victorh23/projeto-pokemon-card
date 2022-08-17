const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')

const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

function esconderCartaoSelecionado() {
  const cartaoSelecionada = document.querySelector('.selecionada')
  cartaoSelecionada.classList.remove('selecionada')
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add('selecionada')
}

btnAvancar.addEventListener('click', function () {
  if (cartaoAtual === cartoes.length - 1) return

  esconderCartaoSelecionado()

  cartaoAtual++
  mostrarCartao(cartaoAtual)
})

btnVoltar.addEventListener('click', function () {
  
  if (cartaoAtual === 0) return


  esconderCartaoSelecionado()

  cartaoAtual--
  mostrarCartao(cartaoAtual)
})
