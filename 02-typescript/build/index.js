"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// console.log(addToHello('Portezan'));
// funções com multi tipos
function callToPhone(phone) {
    return `Ligando para o número ${phone}`;
}
// console.log(callToPhone(61999999999));
// funções assíncronas
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Portezan';
    });
}
;
const bot1 = {
    id: 1,
    name: 'Portezan',
};
const bot2 = {
    id: 1,
    name: 'Portezan',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
// console.log(bot1);
// console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Olá, meu nome é ${this.name}`;
    }
}
const p = new Pessoa(3, 'Alice');
// console.log(p.sayHello());
/*------------------------ CLASSES -------------------------*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        // console.log(`Attack with ${this.strength} points!`);
    }
}
const p1 = new Character('', 10, 98);
p1.attack(); // This will work now
/*------------------- MODIFICADORES DE ACESSO -------------------*/
/*Data Modifiers
public: acessível por qualquer classe
private: acessível apenas pela classe que o define
protected: acessível pela classe que o define e suas subclasses

obs: também pode ser usado em construtores e métodos
*/
/*------------------- SUBCLASSES -------------------*/
// Character: superclass
// Magician: subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill); // chama o construtor da classe pai (Character)
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician('Mago', 9, 30, 100);
/*------------------- GENERICS -------------------*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['Portezan', 'Ana'], ['Alice']);
// numArray.push(1); // não é recomendado, SE o retorno da função é any
// console.log(numArray);
// console.log(stgArray);
/*------------------------ DECORATORS -------------------------*/
function exibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    exibirNome
], Funcionario);
