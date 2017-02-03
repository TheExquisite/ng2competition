import { Router, Request, Response } from 'express';
import { School }                    from 'ng2Competition';
import * as bparser                  from 'body-parser';

export class SchoolAPI {
    router = Router();

    constructor( ){
        this.buildRouter();
    }

    buildRouter() {
        this.router.get('/', (req: Request, res: Response) => {
        res.status( 200 ).json( {'success': true, 'data': "Hello Dave!"});
        });
    }

    static apiController(): Router {
        let schoolAPI = new SchoolAPI();
        return schoolAPI.router;
    }

    private errorHandler( err: any, res?: Response){
        console.error('An error occurred in school.api', err.message || err);
        if(res)
        res.status( 500 ).json({'success':false, 'data': err.message} );
    }
} 