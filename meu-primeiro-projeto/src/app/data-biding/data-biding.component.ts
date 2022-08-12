import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public name: string = "Denner";
  public idade: number = 29;

  public checkedDisable: boolean = true;
  public imgsrc: string = "https://i.pinimg.com/474x/05/23/a2/0523a2adeb72ac0835178cbba3d34b85.jpg";
  public imgtitle: string = "Property binding";

  public position: {x: number, y: number} = {x:0, y:0};

  constructor() { }

  ngOnInit(): void {
    
  }

  public alertInfo(valor: MouseEvent): void{
    console.log(valor);
  }

  public mouseMoveTest(arg: MouseEvent): void{
    this.position.x = arg.offsetX;
    this.position.y = arg.offsetY;
  }

}
