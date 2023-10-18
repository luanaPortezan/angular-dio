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

/*------------------------ INTERFACES -------------------------*/

// interfaces (type vs interface)

// mais recomendado para definir a forma de uma variável, constante, e estrutura de objetos
type robot = {
  readonly id: number | string,
  name: string,
};

// mais recomendado para de classes (molde para alguma coisa) - contrato!!
interface robot2 {
  readonly id: number | string,
  name: string,
  sayHello(): string,
};

const bot1: robot = {
  id: 1,
  name: 'Portezan',
};

const bot2: robot2 = {
  id: 1,
  name: 'Portezan',
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  }
};

// console.log(bot1);
// console.log(bot2);

class Pessoa implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Olá, meu nome é ${this.name}`;
  }
}

const p = new Pessoa(3, 'Alice');
// console.log(p.sayHello());


/*------------------------ CLASSES -------------------------*/

class Character {
  private name?: string
  protected strength: number;
  public skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  public  attack(): void { // é void para não irá retornar nada para as outras funções
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
  magicPoints: number;

  constructor(
    name: string, 
    strength: number, 
    skill: number,
    magicPoints: number
    ) {
    super(name, strength, skill); // chama o construtor da classe pai (Character)
      this.magicPoints = magicPoints;
  }
}

const p2 = new Magician('Mago', 9, 30, 100);


/*------------------- GENERICS -------------------*/
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(['Portezan', 'Ana'], ['Alice']);

// numArray.push(1); // não é recomendado, SE o retorno da função é any

// console.log(numArray);
// console.log(stgArray);