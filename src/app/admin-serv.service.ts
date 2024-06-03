import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServService {

  constructor() { }

  IsAdmin(str:string):boolean
  {
    if(str=="Admin"||str=="admin")
      {
        return true;
      }
      return false;
  }
}
