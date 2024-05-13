let numeroAleatorio = (Math.floor(Math.random() * 100 + 1))
let input = document.querySelector('input')
let tentativas = 5

const p = document.querySelector('p strong')
const dica = document.querySelector('#dica')
const btt = document.querySelector('button')

const bttReinicar = document.createElement('button')
const span = document.querySelector('#bttReiniciar')
bttReinicar.innerHTML = "REINICIAR"

console.log(numeroAleatorio)

function verificar() {
  const valor = Number(input.value)
  if (valor === numeroAleatorio) {
    dica.textContent = ("Você acertou!")
    fimDoJogo()
    reinicar()
  } else if (tentativas > 1) {
    if (valor > numeroAleatorio) {
      dica.textContent = ("Palpite muito alto!")
    } else {
      dica.textContent = ("Palpite muito baixo!")
    }
  } else {
    dica.textContent = ("FIM DO JOGO")
    fimDoJogo()
    reinicar()
  }
  tentativas--
  p.textContent = (tentativas)
}

function fimDoJogo() {
  btt.disabled = true
  input.disabled = true
}

function reinicar() {
  span.appendChild(bttReinicar)
  bttReinicar.addEventListener('click', () => {
    tentativas = 5
    btt.disabled = false
    input.disabled = false
    p.textContent = (tentativas)
    input.placeholder= "0 A 100"
    dica.textContent = " "
    bttReinicar.remove()
   numeroAleatorio = (Math.floor(Math.random() * 100 + 1))
  }
  )
};





