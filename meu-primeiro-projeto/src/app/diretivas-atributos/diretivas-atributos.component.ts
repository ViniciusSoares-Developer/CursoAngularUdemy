import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;

  public height: string = '25px';

  public verdadeiro: boolean = true;

  public nome: Array<string> = ['Vinicius', 'Bernador', 'Flocks', 'Victory', 'El'];

  public input: string = '';

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      this.valor=this.valor?false:true;
      this.height=this.height=='25px'?'50px':'25px';
    }, 2000 )

  }

}
