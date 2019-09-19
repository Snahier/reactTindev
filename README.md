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