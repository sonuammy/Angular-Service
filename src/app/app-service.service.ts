import { Injectable } from '@angular/core';

@Injectable()
export class AppServiceService {

  constructor() { }

  getApp(): string {
    return "Hello Service !!!";
  }
}
