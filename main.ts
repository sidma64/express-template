import express, { Request, Response } from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.use(logger('dev'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('Phone Number: +90 530 309 28 78 E-Mail: toprak.code@gmail.com');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
