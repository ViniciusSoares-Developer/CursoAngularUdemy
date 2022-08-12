import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {

  public title:string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {
    console.log("implement");
  }
  ngOnDestroy(): void {
    console.log("destroy");
  }

}
