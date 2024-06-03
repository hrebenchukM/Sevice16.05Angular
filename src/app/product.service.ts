import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { NumberService } from './number.service';

@Injectable({//не просто класс,а класс которій можно извне подключить к другому классу -єто сервис 
  providedIn: 'root' //подключается к корневому єлементу(значит что во всех компонентах после инджектирования можного его использовать )
})



export class ProductService {
  private products = [
    { id: 1, name: 'Телефон', price: 20000, description: 'Samasung Galaxy A52' },
    { id: 2, name: 'Ноутбук', price: 50000, description: 'Thinkpad L15' },
    { id: 3, name: 'Наушники', price: 2000, description: 'Redmi Buds 4' },
  ];
  constructor(private logService: LogService){}//ПАТТЕРН DEPENDENCY INJECTION//инджектировали доп сервис чтоб использовать функционал его извне

  getData() {

      this.logService.write("операция получения данных");
      return this.products;
  }



  sortByPriceAsc(): void {
    this.products.sort((a, b) => a.price - b.price);
    this.logService.write("операция сортировки данных");
  }

  sortByPriceDesc(): void {
    this.products.sort((a, b) => b.price - a.price);
    this.logService.write("операция сортировки данных");
  }

  // addData(name: string){

  //     this.products.push(name);
  //     this.logService.write("операция добавления данных");
  // }

}
