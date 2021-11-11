Para Criar um Projeto React é necessário usar o comando: npx create-react-app nome-do-app.

JSX = Sintaxe que compila JavaScript em HTML. Consegue misturar HTML com JavaScript, mas não é HTML. para usar um arquivo JSX é necessário importar o React.

Componentes sempre tem a primeira letra maiúscula. Componentes são refêrenciados como tag.

Componentes funcionais -> Componentes baseados em funções.

.jsx não muda nada no React em sí, mas ajuda a IDE é entender que é um arquivo JSX.

props -> Propriedades, são somente leitura.

Estado do componente -> state, altera o valor dinamicamente.

Quando tem muitas tags juntas, precisamos envelopar ela com alguma tag. <> </> ou <React.Fragment> </React.Fragment> -> Para usar algum atributo a mais use o fragment. <React.Fragment sobrenome="Caldana"> </React.Fragment>.

Com a palavra default, podemos exportar uma função anônima -> Função sem nome.

Para fazer a comunicação entre o componente Pai e o componente filho, você precisa importar o filho dentro do componente Pai.

Um dos hooks do react é o useState.

Estado muda -> Componente visual muda.

Preferível trabalhar com componentes baseados em funções, pois possuí síntaxe mais próxima do JavaScript.
