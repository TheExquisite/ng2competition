import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h3>Hello {{name}}</h3>
        <input type= "text" [(ngModel)]="name">
        <button type="button" (click)="btnCheck_Click()">Check</button>
        <br><br>{{result}}
        `
})
export class AppComponent {
    name:string = "Frank";
    result:string;

    btnCheck_Click() {
        if(this.name === "Warren") this.result = "You're a Legend Warren"; else this.result = "You're not a Legend " + this.name;
    }
}