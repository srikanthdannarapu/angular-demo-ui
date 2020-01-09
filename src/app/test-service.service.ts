import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  printToConsole(arg: string) {
    console.log(arg)
  }
}
