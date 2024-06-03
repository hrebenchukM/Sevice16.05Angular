import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from './serv1.service';
import { LogService } from './log.service';
import { AdminServService } from './admin-serv.service';
import { ProductService } from './product.service';
import { NumberService } from './number.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  providers:[Serv1Service,LogService,ProductService,NumberService],//необходимо сервисі вписать в провайдері потому что компоненті автономніе и сами определяют че им использовать
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Service';
  products: any[] = [];
  // name: string = "";
  fproducts :  any[]= [];
  fname: string = '';

  sortProducts :  any[]= [];


  numbers: number[]= [];
  sortNumbersAsc: number[]= [];
  sortNumbersDesc: number[]= [];
  maxNumber: number= 0;

    constructor(private dataService: ProductService,private numberService: NumberService){}//инджектировали сервис через параметр конструктора.Конструктор создает связь с сервисом

    // addItem(name: string){//візіваем через обьект сервиса метод


    //  this.dataService.addData(name);
    // }
    
    sortByPriceA(): void {//візіваем через обьект сервиса метод
      this.dataService.sortByPriceAsc();
      this.products = this.dataService.getData();
    }
  
    sortByPriceD(): void {//візіваем через обьект сервиса метод
         this.dataService.sortByPriceDesc();
         this.products = this.dataService.getData();
    }

    filterByName() {//візіваем через обьект сервиса метод
      this.fproducts = [];
      for (let product of this.products) {
          if (product.name.includes( this.fname)) {
              this.fproducts.push(product);
          }
          else{
            this.fproducts.push({ name: 'Нет совпадений', price: '', description: '' });
          }
      }
  }

    ngOnInit(){//візіваем через обьект сервиса метод.ngOnInit візівается сразу же автоматически после конструктора
        this.products = this.dataService.getData();
        this.fproducts = this.products;


        this.numbers = this.numberService.getNumbers();
        this.sortNumbersAsc = this.numberService.sortAsc();
        this.sortNumbersDesc = this.numberService.sortDesc();
        this.maxNumber = this.numberService.getMaxNumber();
    }


}
