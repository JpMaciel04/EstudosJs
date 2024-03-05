

function outcome(){ //Criar funcao para calcular

let num1 = Number(document.getElementById ('num-one').value) // Criando variaveis para receber os numeros e tratalos como NUMBER
let num2 = Number(document.getElementById (`num-two`).value)
let total = 0

if (document.getElementById("box1").checked) {
    total = num1 + num2
} else if(document.getElementById("box2").checked) {
    total = num1 - num2
} else if(document.getElementById('box3').checked){
    total = num1*num2
} else{
    total= num1/num2
}
window.document.getElementById("resultArea").innerHTML = "RESULTADO : "+String(total) // Chama o id do HTML que é responsavel por exibir o resultado 
}