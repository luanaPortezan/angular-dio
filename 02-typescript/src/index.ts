type heroi = {
    nome: string,
    vulgo: string,
}


function printaObjetos(pessoa: heroi) {
  console.log(pessoa);
}

printaObjetos({
  nome: 'Bruce Wayne',
  vulgo: 'Batman',
});

console.log('olá mundo!');