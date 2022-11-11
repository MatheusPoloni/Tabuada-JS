const numeroDesejado = Number(prompt("Insira um número para ver sua tabuada até o 10:"));
let mensagem = "";
for (let i = 0; i <= 10; i++)
{

    mensagem += `${numeroDesejado} * ${i} = ${numeroDesejado * i}\n`
}
alert(mensagem);