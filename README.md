# reactTindev

## Steps

Primeiros passos.
* Instalar o express e instanciar o mesmo.
```js
const express = require('express')

const server = express()
```

O express pode receber os métodos GET, POST, PUT, DELETE.  
`req.query.something` pega o atributo HTML `name="something"` da requisição que for passado pelo `?name=something` na URL.
```js
server.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` })
})
```

`req.body` recebe parâmetros enviados através de método POST

### Axios
É um módulo para puxar informações de APIs externas

___

## Criando uma aplicação React

Para criar uma aplicação react roda-se o comando
```bash
yarn create react-app nomeDoProjeto
```
Assim já trás todas as dependências do Babel e Webpack para configurar o React automaticamente.

Também é possível rodar
```bash
npx create-react-app nomeDoProjeto
```

Após criar o projeto você pode rodar os comandos:
* `yarn start`
Para iniciar o servidor
* `yarn build`
Para agrupar o app em arquivos estáticos para ambiente de produção
* `yarn test`
Para iniciar um runner de teste
* `yarn eject`
Remove essa ferramenta, copia e constrói as dependências, configurações e scripts para o diretório do app. Não pode ser revertido se executado.

Para iniciar o server com `yarn start` você precisa estar no diretório do projeto React pelo terminal.

### App.js

O arquivo `App.js` é o arquivo principal do React.  
Porém o arquivo inicial da aplicação está em `/public/index.html`.

A seção: `<div id="root"></div>` nunca deve ser deletada, o React injeta seu conteúdo através dessa div.  
Tudo que é carregado na página vem dessa div.

O arquivo `index.js` é o que vai embutir toda renderização do Aplicativo. Sempre que o React inicializa ele procura por esse arquivo

Nessa sessão
```js
ReactDOM.render(<App />, document.getElementById('root'));
```
O render só é utilizado uma única vez normalmente. Com o intuito de puxar o componente global.

### Componentes

Um componente é basicamente uma função que retorna código HTML. Essa é a única obrigação do mesmo.  
Também é possível importar componentes dentro de componentes

### Rotas no React

Para criar rotas no React utilizamos uma biblioteca chamada React Router Dom
```bash
yarn add react-router-dom
```
Em seguida criamos um arquivo `routes.js` dentro de `/src`.

Ao importar o `react-router-dom` no `routes.js` utilizamos os seguintes imports do mesmo:
* `BrowserRouter` que faz com que utilizemos `/` na url como em uma aplicação normal.
* `Route`
E em seguida exportamos o componente.

### Acessando APIs com React usando Axios

Ao rodar
```bash
yarn add axios
```