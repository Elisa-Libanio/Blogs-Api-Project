const express = require('express');
 const router = require('./Routes/routes');

// const errorMiddleware = require('./middlewares/errorMiddlewares');

const app = express();
app.use(express.json());
app.use(router);
// app.use(errorMiddleware);
const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
