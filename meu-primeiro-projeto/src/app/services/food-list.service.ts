import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private url: string = 'http://localhost:3000/';

  public emitEvent = new EventEmitter();
  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  // public getList(): Array<string> {
  //   return this.list;
  // }

  public getList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}listFood`).pipe(
      (res) => res,
      (error) => error
    );
  }

  // public foodListAdd(value: string): void {
  //   this.foodListAlert(value);
  //   this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.url}listFood`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListEdit(id: number, value: string): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}listFood/${id}`, {nome: value}).pipe(
      res => res,
      error => error
    )
  }
  
  public foodListRemove(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}listFood/${id}`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(value: string){
  //   return this.emitEvent.emit(value);
  // }
  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
