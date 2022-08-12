import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public comidas: Array<string> = [
    'X-Burquer',
    'X-Salada',
    'X-Savero'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm): void {
    console.log(form.value);
  }

}
