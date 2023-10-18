type heroi = {
    nome: string,
    vulgo: string,
}


function printaObjetos(pessoa: heroi) {
  // console.log(pessoa);
}

printaObjetos({
  nome: 'Bruce Wayne',
  vulgo: 'Batman',
});

// console.log('olá mundo!');

/* TIPOS  DE VARIÁVEIS*/

//tipos primitivos: boolean, number, string,
let ligado: boolean = true;
let desligado = false; // reconhece por inferencia
let nome: string = 'Portezan';
let idade: number = 34;
let altura: number = 1.63;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void; // não tem pq adicionar valor, já que ele é vazio!!!
function executaQuery(): void { // não tem retorno
}

let retornoView: any; // pode ser qualquer coisa

/* OBJETOS */ 

// objeto sem tipagem
let objecto: object = { 
  nome: 'Portezan',
  idade: 34,
  cidade: 'Brasília',
}; // objeto genérico (não recomendado - sem previsibilidade)

// objeto com tipagem
type ProdutoLoja = {
  nome: string,
  preco: number,
  unidades: number,
}
let meuProduto: ProdutoLoja = {
  nome: 'Tênis Nike',
  preco: 599.90,
  unidades: 10,
} // objeto com tipagem (recomendado - com previsibilidade)


let objecto2: { 
  nome: string
  idade: number
} = { 
  nome: 'Portezan',
  idade: 34
}; // objeto com tipagem


/* ARRAYS */

let dados: string[] = ['Portezan', 'Brasília', '34']; // array de strings
let dados2: Array<string> = ['Portezan', 'Brasília', '34']; // array de strings

let ligados: boolean[] = [true, false, true]; // array de booleans
let ligados2: Array<boolean> = [true, false, true]; // array de booleans

let numeros: number[] = [1, 2, 3, 4, 5]; // array de números inteiros
let numeros2: Array<number> = [1, 2, 3, 4, 5]; // array de números inteiros

//array de múltiplas tipagens (não recomendado - pois aceita os tipos em qualquer ordem)
let infos: (string | number)[] = ['Portezan', 34, 'Portezan', 'Luana']; // array de vários tipos
let infos2: Array<string | number> = ['Portezan', 34, 'Portezan', 'Luana'];


/* TUPAS */
// tuplas são arrays com tipos definidos, ou seja, é um vetor de multi types, porém ela tem um lugar certo para cada tipo (recomendado - pois ele predetermina a ordem dos tipos )
let infos3: [string, number] = ['Portezan', 34];
let infos4: Array<string | number> = ['Portezan', 34];

let boletos: [string, number, number] = ['água conta', 89.90, 3489274892748872];

/* ARRAY MÉTODOS */
let dadosArray: Array<string | string | number> = ['Portezan', 'Brasília', 34]; // array de strings
dadosArray.map((item) => { // percorre o array e retorna um novo array
  // console.log(item);
});

let dadosArray2: Array<string> = ['Portezan', 'Brasília', '34']; // array de strings
dadosArray2.reduce((accumulator, currentValue) => { // soma todos os valores do array e retorna um único valor
  // console.log(accumulator + currentValue);
  return accumulator + currentValue;
});

let dadosArray3: Array<number> = [1, 2, 3, 4, 5]; // array de números inteiros
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
let aniversario: Date = new Date('1989-04-09 00:35' ); // ano, mês, dia e hora
// console.log(aniversario.toString());

/* FUNÇÕES */

function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(1, 2);
// console.log(soma);
let soma2: string = addNumber(1, 2).toString(); // não é recomendado, pois o retorno da função é number
// console.log(soma2);

function addToHello(name: string) {
  return `Hello ${name}`;
}
// console.log(addToHello('Portezan'));

// funções com multi tipos
function callToPhone(phone:number | string): number | string {
  return `Ligando para o número ${phone}`;
}
// console.log(callToPhone(61999999999));

// funções assíncronas
async function getDataBase(id:number): Promise<number | string> {
  return 'Portezan';
}