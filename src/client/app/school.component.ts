import {Component, OnInit}  from '@angular/core';
import {School}             from 'ng2Competition';
import {Router}             from '@angular/router';

import {AppService}         from './app.service';

@Component({
    selector: 'app-school',
    templateUrl: 'client/app/school.component.html',
    styleUrls: ['client/app/school.component.css']
})
export class SchoolComponent implements OnInit {
    private schools: School[];

    constructor(private appService: AppService, private router: Router) { }

    GetSchools(): void{
        this.appService.getSchools()
        .then(resq => this.schools = resq as School[])
        .catch(err => this.errorHandler(err));
    }

    btnNew_Clicked(): void{
        this.router.navigate(['/detail/0']);
    }

    ngOnInit(){
        this.GetSchools();
    }

    private errorHandler(error:any){
        console.error('whoops it\'s all gone pear shaped');
    }
}