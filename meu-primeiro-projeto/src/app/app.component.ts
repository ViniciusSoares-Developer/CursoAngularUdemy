import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-atributos>
      <h1>Aulas Diretivas Atributos</h1>
      <hr>
    </app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->
    <!-- <ng-template [ngIf]="getData">
      <p>{{getData.name}} - {{getData.years}}</p>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output> -->
    <!-- <app-food-add></app-food-add>
    <app-food-list></app-food-list> -->
    <app-forms></app-forms>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public valor: number = 10;

  public getData: {name: string, years: number} | undefined;

  constructor() {}

  ngOnInit(): void {}

  public setData(event: {name: string, years: number}): void{
    this.getData = event;
  }
}
