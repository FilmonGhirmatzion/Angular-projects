import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Filmon", "Ghirmatzion", "filmon@gmail.com", 5000),
  new SalesPerson("John", "Doe", "john@gmail.com", 4000),
  new SalesPerson("Jane", "Smith", "jane@gmail.com", 6000),
  new SalesPerson("Michael", "Johnson", "michael@gmail.com", 7000),
  new SalesPerson("Emily", "Davis", "emily@gmail.com", 5500),
  new SalesPerson("David", "Wilson", "david@gmail.com", 4500)
  ];

  constructor() { }
  ngOnInit() {

  }

}
