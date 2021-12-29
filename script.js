/* 
    Estudos sobre Expressões regulares com JS (Regex)
*/

const frase1 = 'O rato roeu a roupa do rei de roma'

console.log('frase1:', frase1)

// usamos o .match na string para retornar os casos existentes na pesquisa
console.log('buscando uma palavra completa:', frase1.match(/rato/))

// buscando mais palavras, usamos o pipe |
console.log('buscando mais palavras:', frase1.match(/rato|roma/g))

// agrupando caracteres com o ()
console.log('Agrupando carcateres:', frase1.match(/(rato)/g))

// aqui a flag g representa uma busca global, ou seja, na string inteira retornando todos os casos
console.log('todos os "r" da frase1:', frase1.match(/r/g))

const frase2 = 'A Aranha Fabrica 1000 teiAs'

// a flag i faz a busca com case insensitive
console.log('buscando a letra "a" tanto maiúscula quanto minúscula:', frase2.match(/a/gi))

// retornando com case sensitive
console.log('buscando a letra "a":', frase2.match(/a/g))
console.log('buscando a letra "A":', frase2.match(/A/g))

// buscando caracteres alfanuméricos, retorna letras e números e o _
console.log('buscando caracteres alfanuméricos:', frase2.match(/\w/g))

// buscando números
console.log('buscando números:', frase2.match(/\d/g))

//buscando um número exato
console.log('buscando números:', frase2.match(/1000/))

// pesquisando qualquer caractere especificado entre [] que represneta uma lista
console.log('pesquisando qualquer match de caractere especificado dentro da lista:', frase2.match(/[ab1t]/g))

//buscando números de 0 a 9
console.log('buscando números de 0 a 9:', frase2.match(/[0-9]/g))

// buscando todas as letras de a até z minúsculas
console.log('buscando todas as letras de a até z minúsculas:', frase2.match(/[a-z]/g))

// buscando todas as letras de a até z maiúsculas
console.log('buscando todas as letras de A a Z minúsculas:', frase2.match(/[A-Z]/g))

const frase3 = 'Hoje é dia 22 de dezembro de 2021'

// buscando toda a frase com o .
console.log('buscando toda a frase":', frase3.match(/./g))

// OBS.: pode-se usar intervalor diferentes, como: a-g, a-k, d-w
// Com números também: 5-9, 3-6

const data = '1/1/2022'

console.log('colocando 0 antes da data:', data.replace(/[0-9]\//g, '0$&'))


const frase4 = 'Eu estou treinando expressões regulares'

// negação usamos o ^ para para buscar tudo menos vogais
// a negação deve ser usada dentro da lista []
console.log('negando caracteres:', frase4.match(/[^aeiou]/gi))


// a negação para caracteres alfanuméricos é feita com  o \W
console.log('negação de alfanuméricos:', frase4.match(/[\W]/g))

const frase5 = 'Hoje é dia 22 de dezembro de 2021._$@%$#'

// a negação para dígitos \D
console.log('negação de dígitos:', frase5.match(/[\D]/g))

// \S pega todos os caracteres exceto espaço em branco
console.log('pega todos os caracteres exceto espaço em branco:', frase5.match(/[\S]/g))

// mais alguns usos interessantes para regex:
// o espaço é representado pelo \s
// o tab é representado pelo \t
// o . da match com todas as letras, números e caracteres especiais, incluindo o espaço, só nao casa com a quebra de linha "\n"

// repetidores:
// são representados por {}
// nele podemos colocar {n,m} onde:
// - n é o mínimo de repetições
// - m é o máximo de repetições

// exemplo:
const frase6 = 'Com grandes poderes vem grandes responsabilidade.'

console.log('pegando palavras com mais de 10 caracteres:', frase6.match(/\w{10,}/g))

// poderia ser {1,}, mas o mais comum é o +
console.log('pegando palavras com um ou mais caracteres:', frase6.match(/\w+/g))

// buscando valor opcional com o ? para dar match com http ou https
console.log('https://'.match(/https?:\/\//))

// ^ fora da lista [] indica a captura com início de string
// $ para capturar com o fim da string

const tag = '<h1>Esse é um título</h1>'
console.log('verificando se a tag na string comeã com <h1>:', tag.match(/^<h1>/))
console.log('verificando se a tag na string acaba com </h1>:', tag.match(/<\/h1>$/))

// verificando se inicia e termina com um h1, podemos fazer:
console.log('inicia e termina com a tag h1:', tag.match(/^<h1>.+<\/h1>$/))

console.log('william araujo de assis'.match(/ara.+/))