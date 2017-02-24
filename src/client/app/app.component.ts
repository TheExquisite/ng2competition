import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a>
        <a routerLink="/school" routerLinkActive="active" >Schools</a>
    </nav>
    <router-outlet></router-outlet>
        `,
    styleUrls: ['client/app/app.component.css']
})
export class AppComponent {
    title:string = "Sunshine Coast Robotics Competition";
}