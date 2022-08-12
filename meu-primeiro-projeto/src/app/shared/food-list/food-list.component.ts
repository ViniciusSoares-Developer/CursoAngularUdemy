import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public footList: Array<FoodList> = [];

  constructor(private footListService: FoodListService) {}

  ngOnInit(): void {
    this.footListService.getList().subscribe({
      next: (res) => (this.footList = res),
      error: (err) => console.log(err),
    });

    this.footListService.emitEvent.subscribe({
      next: (res: any) => {
        alert(`Item adcionado: ${res.nome}`);
        return this.footList.push(res);
      },
      error: (err: any) => window.alert(`Error: ${err}`),
    });
  }

  public foodListDelete(id: number){
    return this.footListService.foodListRemove(id).subscribe({
      next: (res) => {
        this.footList = this.footList.filter(
          item => {
            return id !== item.id;
          }
        );
      },
      error: (err) => console.log(err),
    })
  }
  public foodListEdit(value: string, id: number){
    return this.footListService.foodListEdit(id, value).subscribe({
      next: (res) => {
        
      },
      error: (err) => console.log(err)
    });
  }
}
