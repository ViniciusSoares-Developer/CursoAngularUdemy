import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public sendData = new EventEmitter();

  public list: Array<{name: string, years: number}> = [
    {name: 'Arizona', years: 24},
    {name: 'California', years: 32},
    {name: 'Colorado', years: 26},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getData(event: number): void{
    this.sendData.emit(this.list[event]);
  }

}
