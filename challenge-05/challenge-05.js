/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Maçã', 'Banana', 'Laranja', 'Morango', 'Melancia', 'Abacaxi'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( getArray(array)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getIndexOfArray(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [null, 0, 'Hello', true, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( getIndexOfArray(newArray, 0) );
console.log( getIndexOfArray(newArray, 1) );
console.log( getIndexOfArray(newArray, 2) );
console.log( getIndexOfArray(newArray, 3) );
console.log( getIndexOfArray(newArray, 4) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
  var livrosCadastrados = {
    'Ócio criativo' : {
      quantidadePaginas: 100,
      autor: 'Domenico',
      editora: 'Saraiva'
    },
    'Senhor dos Anéis' : {
      quantidadePaginas: 600,
      autor: 'Token',
      editora: 'WWBooks'
    },
    'Outro livro' : {
      quantidadePaginas: 300,
      autor: 'Outro Autor',
      editora: 'Outra Editora'
    }
  }

  if (!nomeLivro)
    return livrosCadastrados;

  if (!livrosCadastrados[nomeLivro])
    return 'Não temos este livro cadastrado. Tente novamente com outro nome.';

  return livrosCadastrados[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'Ócio criativo';

console.log( 'O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + " página!" );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + nomeLivro + ' é o ' + book(nomeLivro).autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora );
