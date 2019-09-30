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

## React Native

### Criando um projeto

A maneira mais fácil de criar um projeto React-Native é rodando o comando
```bash
npx react-native init nomeDoProjeto
```

Porém você também pode instalar de forma global o pacote do react native ao rodar
```bash
yarn global add react-native-cli
```
E com o pacote instalado você pode rodar
```bash
react-native init nomeDoProjeto
```

### Rodando o Projeto

Para rodar o projeto é necessário executar um dos dois comandos à seguir
```bash
yarn react-native run-android
yarn react-native run-ios
```
O IOS só funcionará caso esteja rodando em um MacOS

Caso dê erro ao rodar o comando no android tente rodar um dos comandos a seguir dentro da pasta do projeto React Native antes de rodar um dos comandos acima
```bash
react-native start
yarn start
```

### Diferenças entre o React Web e o React Native

No React Native não se usa tags HTML.  
ex:
React | React Native
|---|---|
|`<p>`|`<Text>`|
|`<div>`|`<View>`|

No HTML sabemos que tags como H1, H2, p, span, etc... já fazem uma certa estilização própria.  
No React Native nenhuma tag no geral tem uma estilização própria nem valor semântico ou seja, ela não significa nada ali dentro.

Então toda vez que incluímos um texto no React native utilizamos apenas a tag `<Text>`.

#### Estilização no React Native

É possível utilizar uma sintaxe bem parecida com o CSS. Porém não utiliza-se o hífen.  
Componentes também já vem no padrão **flex**

Para utilizar estilização no React Native você pode passar o exemplo a seguir.
```js
<View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center' }}></View>
```

Porém estilização inline não é uma boa prática, então importa-se o StyleSheet do react-native, e cria-se uma constante para o mesmo.  
ex:
```js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
  },
});
```

No React-Native os componentes vem por padrão com `flexDirection: 'column'`. Do contrário do HTML que vem em `row`

---

Considerando todos os princípios acima, à partir desse ponto é tudo igual ao ReactJS. Chamadas à APIs, controle de estado, useEffect, useState, etc... Tudo funciona da mesma forma.

### Navegação no React Native

Para fazer navegação entre páginas no React Native, é necessário importar 3 módulos.
```bash
yarn add react-navigation react-native-gesture-handler react-native-reanimate
```
O `react-navigation` é a navegação básica que fazemos entre as rotas.  
O `react-native-gesture-handler` lida com os gestos do usuário, ex: abrir um menu lateral, ou arrastar o dedo para voltar a tela, etc.
O `react-native-reanimated` faz transições animadas entre rotas

Caso esteja no Android a biblioteca `react-native-gesture-handler` precisa de mais uma configuração dentro de um arquivo no diretório `android`.  
Na [Docs](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html) do Gesture Handler existe uma área para o ambiente android que pede para adicionar umas linhas à mais no arquivo `MainActivity.java`

Após isso é necessário rodar novamente o comando
```bash
react-native run-android
```
Porque ao adicionar algumas dependências no android ele faz algumas alterações nativas, então é necessário reinstalar o aplicativo.  
Caso esteja no IOS tem um passo à mais para fazer antes de rodar esse comando.  
Dentro da pasta `ios` é necessário ter o Cocoapods instalado, porém só funciona em MacOS, e então rodar o comando `pod install`

---

Ao instalar as dependências criamos um arquivo de Rotas, e dentro dele importamos do react-navigation o seguinte...
```js
import { createAppContainer, createSwitchNavigator } from "react-navigation";
```
O `createAppContainer` precisa ficar por volta de toda navegação da nossa aplicação, isso está na própria documentação do react-navigation, isso é porque podemos ter vários tipos de navegação diferente rodando no app.  
O `createSwitchNavigator` cria uma navegação entre duas telas sem qualquer tipo de feedback visual, então ao navegar entre telas não terá animação, cabeçalho, abas, não pode voltar para a rota anterior puxando a tela para a esquerda, etc.  
Várias funcionalidades são desabilitadas ao utilizar o Switch Navigator.

Existem vários navigators como:
```js
createStackNavigator // Dá um cabeçalho que podemos customizar, e ao trocar entre rotas ele dá um botão para voltar
createBottomTabNavigator // Dá uma navegação por abas em baixo com as rotas informadas
createMaterialTopNavigator // Dá uma navegação por abas em cima com o estilo Material
createDrawerNavigator // Dá uma sidebar ao arrastar da esquerda pra direita com as possíveis rotas
```

---

Para se conectar à api do backend utilizamos o `axios` mais uma vez.  
Passamos o endereço de novo da aplicação.  
```js
baseURL: 'http://localhost:3333' // Ou a porta que você passou no backend.
```

Se você está no IOS já está pronto para utilizar a API isso é porque no MacOS utiliza-se um simulador, não um emulador. Ele reaproveita o mesmo Kernel em vez de utilizar um outro emulado.  
No android ele cria uma Máquina Virtual, sendo assim o localhost não aponta para o mesmo localhost da máquina em que está hospedado. Então é necessário fazer algumas alterações.  

Existem as seguintes estratégias.  
* Celular via USB/WiFi: Ao utilizar o ip da máquina ex: 192.168.0.10 ele funciona.
* Ips feitos para emuladores. Se você quer apontar para o localhost dentro do Genymotion: `http://10.0.3.2:3333`
* Ips feitos para emuladores. Se você quer apontar para o localhost dentro do Android Studio: `http://10.0.2.2:3333`  
Porém tem uma forma de continuar utilizando o Localhost.  
Se você instalou o SDK corretamente você tem acesso ao ADB.  
É possível falar para o Android quando acessar uma porta, utilizar tal porta da máquina  
ex:
```bash
adb reverse tcp:3333 tcp:3333
```
E caso volte a falhar é só rodar esse comando de novo

#### Manter User logado

Ao atualizar o APP ele volta para a página de login, ele não mantém o usuário Logado.

Vamos utilizar uma ferramenta que age como um local storage da web dentro do React Native, chamado **async storage**. É um storage de chave/valor para armazenar essas informações rápidas que precisamos ter entre as telas da aplicação, ou quando um usuário fecha e abre de novo.
```bash
yarn add @react-native-community/async-storage
```
Essa ferramenta não precisa de configuração adicional.  
Porém para quem está no IOS, é necessário entrar no diretório `/IOS` e rodar o comando `pod install`.  

Após isso é necessário rodar o `run-android/ios` de novo

1:17:27