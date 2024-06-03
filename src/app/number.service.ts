import { Injectable } from '@angular/core';

@Injectable({//не просто класс,а класс которій можно извне подключить к другому классу -єто сервис 
  providedIn: 'root' //подключается к корневому єлементу(значит что во всех компонентах после инджектирования можного его использовать )
})


export class NumberService {
  private numbers: number[] = [5, 3, 8, 1, 9];
  constructor() { }

  getNumbers(): number[] {
    return this.numbers;
  }



  sortAsc(): number[] {
    let sortNumbers = [];
    for (let num of this.numbers) {
      sortNumbers.push(num);
    }
    return sortNumbers.sort((a, b) => a - b);
  }

  sortDesc(): number[] {
    let sortNumbers = [];
  for (let num of this.numbers) {
    sortNumbers.push(num);
  }
  return sortNumbers.sort((a, b) => b - a);
  }

  getMaxNumber(): number {
    let maxNumber = this.numbers[0];
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] > maxNumber) {
        maxNumber = this.numbers[i];
      }
    }
    return maxNumber;
  }
}
