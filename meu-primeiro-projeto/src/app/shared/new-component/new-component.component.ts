import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  public numero: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  public getData($event: any): void {
    console.log($event);
  }

}
