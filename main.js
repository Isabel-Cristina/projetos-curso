const nome = prompt("insira seu nome")
const res = document.getElementById("nome")
res.innerHTML = `Olá ${nome}`

var pergunta = prompt("Deseja responder o quiz?")

if (pergunta == "sim")
{alert("Boa sorte!")}

else
{alert("Tchau")} 



