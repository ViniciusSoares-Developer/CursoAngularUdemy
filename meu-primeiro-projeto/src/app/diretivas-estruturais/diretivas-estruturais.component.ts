import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string }> = [
    {nome: 'Denner' },
    {nome: 'Robert' },
    {nome: 'Kleber' },
    ];

  public nome: string = "nay";

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = this.condition ? false : true;
    }, 2000);
  }

  public onClick(): void {
    this.conditionClick = this.conditionClick ? false : true;
  }

  public onClickAddList(): void{
    this.list.push({nome: "Maria"});
  }

  public onClickEventList(index: number): void{
    this.list.splice(index, 1);
  }
}
