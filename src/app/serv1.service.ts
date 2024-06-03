import { Injectable } from '@angular/core';
import { LogService } from './log.service';//использовать один сервис в другом сервисе/ Подключили сервис


@Injectable({//сервис
  providedIn: 'root'
})
export class Serv1Service {

  private data: string[] = [ "Tom", "Bob",  "Sam"];//инкапсуляция

  constructor(private logService: LogService){}//ПАТТЕРН DEPENDENCY INJECTION//инджектировали доп сервис чтоб использовать функционал его извне

  getData(): string[] {

      this.logService.write("операция получения данных");
      return this.data;
  }
  addData(name: string){

      this.data.push(name);
      this.logService.write("операция добавления данных");
  }
}
