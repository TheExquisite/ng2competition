import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as morgan from 'morgan';

import registerRoutes from './server/routes/default.route'

let app:express.Application = express();

app.use(morgan('dev'));

registerRoutes(app);

app.use(express.static(__dirname));

app.get('/', (req:Request, res:Response) => {
    res.sendFile(__dirname + '/client/index.html');
});

console.log('dirname: ' + __dirname);

app.listen(3000, () => {
    console.log('Magic is on port 3000');
});


