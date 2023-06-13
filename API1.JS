//--PESSOA1--
//criando Array


const json = '{"nome": "Harry Potter", "idade": "10 anos",  "sexo": "Masculino", "habilidade": "Sabe criar poções mágicas, voar em vassouras.", "poder": "Defesa contra as artes das trevas", "fraqueza": "Preguiça"}';

const ficha = JSON.parse(json);

console.log(ficha)

function myFunction(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha.nome;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha.idade;
    document.getElementById("sexo").innerHTML = `Sexo: ` + ficha.sexo;
    document.getElementById("habilidade").innerHTML = `Habilidade: ` + ficha.habilidade;
    document.getElementById("poder").innerHTML = `Poder: ` + ficha.poder;
    document.getElementById("fraqueza").innerHTML = `Fraqueza: ` + ficha.fraqueza;
}

const json2 = '{"Nome": "Hermione", "Idade": "9 anos",  "Sexo": "Feminino", "Habilidade": "inteligente", "Poder": "Viagem no tempo", "Fraqueza": "Medo de fantasma"}'; 

const ficha2 = JSON.parse(json2);

console.log(ficha2)

function myFunction1(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha2.Nome;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha2.Idade;
    document.getElementById("sexo").innerHTML = `Sexo: ` + ficha2.Sexo;
    document.getElementById("habilidade").innerHTML = `Habilidade: ` + ficha2.Habilidade;
    document.getElementById("poder").innerHTML = `Poder: ` + ficha2.Poder;
    document.getElementById("fraqueza").innerHTML = `Fraqueza: ` + ficha2.Fraqueza;

}


const json3 = '{"NOME": "Roni", "IDADE": "10 anos",  "SEXO": "Masculino", "HABILIDADE": "Sabe criar poções mágicas, voar em vassouras.", "PODER": "Defesa contra as artes das trevas", "FRAQUEZA": "Preguiça"}';

const ficha3 = JSON.parse(json3);

console.log(ficha3)

function myFunction2(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha3.NOME;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha3.IDADE;
    document.getElementById("sexo").innerHTML = `Sexo: ` + ficha3.SEXO;
    document.getElementById("habilidade").innerHTML = `Habilidade: ` + ficha3.HABILIDADE;
    document.getElementById("poder").innerHTML = `Poder: ` + ficha3.PODER;
    document.getElementById("fraqueza").innerHTML = `Fraqueza: ` + ficha3.FRAQUEZA;


}




