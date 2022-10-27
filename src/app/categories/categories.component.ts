import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[] = [
    Categories.All,
    Categories.General,
    Categories.Course,
    Categories.Laboratory
  ]
  @Output() emitCategory: EventEmitter<Categories> = new EventEmitter<Categories>();
  constructor() { }

  ngOnInit(): void {
  }

  clickButton(index: number){
    this.emitCategory.emit(this.categories[index]);
  }
}
