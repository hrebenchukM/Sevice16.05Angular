import { Injectable } from '@angular/core';

@Injectable({//не просто класс,а класс которій можно извне подключить к другому классу -єто сервис 
  providedIn: 'root' //подключается к корневому єлементу(значит что во всех компонентах после инджектирования можного его использовать )
})
export class LogService {

  constructor() { }

  write(logMessage:string){

      console.log(logMessage);
  }
}
