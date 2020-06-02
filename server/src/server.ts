import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors(/*{
    origin: 'http://www'
}*/));
// para habilitar a utilização de json nas requisições com body em json
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));

app.listen(3333);