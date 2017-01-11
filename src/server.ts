import * as express from 'express';
import * as morgan from 'morgan';

let app:express.Application = express();

app.use(morgan('dev'));

app.use(express.static(__dirname));

app.get('/', (req:express.Request, res:express.Response) => {
    res.sendFile(__dirname + '/client/index.html');
});

console.log('dirname: ' + __dirname);

app.listen(3000, () => {
    console.log('Magic is on port 3000');
});


