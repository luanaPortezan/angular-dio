"use strict";
function printaObjetos(pessoa) {
    // console.log(pessoa);
}
printaObjetos({
    nome: 'Bruce Wayne',
    vulgo: 'Batman',
});
// console.log('olá mundo!');
/* TIPOS  DE VARIÁVEIS*/
//tipos primitivos: boolean, number, string,
let ligado = true;
let desligado = false; // reconhece por inferencia
let nome = 'Portezan';
let idade = 34;
let altura = 1.63;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retorno; // não tem pq adicionar valor, já que ele é vazio!!!
function executaQuery() {
}
let retornoView; // pode ser qualquer coisa
/* OBJETOS */
// objeto sem tipagem
let objecto = {
    nome: 'Portezan',
    idade: 34,
    cidade: 'Brasília',
}; // objeto genérico (não recomendado - sem previsibilidade)
let meuProduto = {
    nome: 'Tênis Nike',
    preco: 599.90,
    unidades: 10,
}; // objeto com tipagem (recomendado - com previsibilidade)
let objecto2 = {
    nome: 'Portezan',
    idade: 34
}; // objeto com tipagem
/* ARRAYS */
let dados = ['Portezan', 'Brasília', '34']; // array de strings
let dados2 = ['Portezan', 'Brasília', '34']; // array de strings
let ligados = [true, false, true]; // array de booleans
let ligados2 = [true, false, true]; // array de booleans
let numeros = [1, 2, 3, 4, 5]; // array de números inteiros
let numeros2 = [1, 2, 3, 4, 5]; // array de números inteiros
//array de múltiplas tipagens (não recomendado - pois aceita os tipos em qualquer ordem)
let infos = ['Portezan', 34, 'Portezan', 'Luana']; // array de vários tipos
let infos2 = ['Portezan', 34, 'Portezan', 'Luana'];
/* TUPAS */
// tuplas são arrays com tipos definidos, ou seja, é um vetor de multi types, porém ela tem um lugar certo para cada tipo (recomendado - pois ele predetermina a ordem dos tipos )
let infos3 = ['Portezan', 34];
let infos4 = ['Portezan', 34];
let boletos = ['água conta', 89.90, 3489274892748872];
/* ARRAY MÉTODOS */
let dadosArray = ['Portezan', 'Brasília', 34]; // array de strings
dadosArray.map((item) => {
    // console.log(item);
});
let dadosArray2 = ['Portezan', 'Brasília', '34']; // array de strings
dadosArray2.reduce((accumulator, currentValue) => {
    // console.log(accumulator + currentValue);
    return accumulator + currentValue;
});
let dadosArray3 = [1, 2, 3, 4, 5]; // array de números inteiros
dadosArray3.pop(); // remove o último item do array e retorna o novo array com o item removido
// console.log(dadosArray3);
dadosArray3.push(6); // adiciona um item no final do array e retorna o novo tamanho do array
// console.log(dadosArray3);
dadosArray3.shift(); // remove o primeiro item do array e retorna o novo array com o item removido
// console.log(dadosArray3);
dadosArray3.unshift(0); // adiciona um item no início do array e retorna o novo tamanho do array
// console.log(dadosArray3);
dadosArray3.splice(2, 1); // remove um item do array a partir de um índice e retorna o novo array com o item removido
// console.log(dadosArray3);
dadosArray3.splice(2, 0, 3); // adiciona um item no array a partir de um índice e retorna o novo array com o item adicionado  (índice, quantidade de itens a serem removidos, item a ser adicionado)
// console.log(dadosArray3);
dadosArray3.sort(); // ordena o array e retorna o novo array ordenado
// console.log(dadosArray3);
dadosArray3.reverse(); // inverte a ordem do array e retorna o novo array invertido
// console.log(dadosArray3);
dadosArray3.join(''); // transforma o array em uma string e retorna a string
// console.log(dadosArray3);
dadosArray3.indexOf(3); // retorna o índice do item no array
// console.log(dadosArray3);
dadosArray3.lastIndexOf(1); // retorna o último índice do item no array
// console.log(dadosArray3);
dadosArray3.includes(1); // retorna true ou false se o item existe no array
// console.log(dadosArray3);
dadosArray3.every((item) => item > 0); // retorna true ou false se todos os itens do array passam no teste
// console.log(dadosArray3);
/* DATAS */
let aniversario = new Date('1989-04-09 00:35'); // ano, mês, dia e hora
// console.log(aniversario.toString());
/* FUNÇÕES */
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(1, 2);
// console.log(soma);
let soma2 = addNumber(1, 2).toString(); // não é recomendado, pois o retorno da função é number
// console.log(soma2);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello('Portezan'));
