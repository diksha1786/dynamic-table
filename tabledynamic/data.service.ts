import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  
  arr = [
    {
      "userId": 1,
      "id": 1,
      "Name": "Diksha",
      "DOB": "04/08/1997"
    },
    {
      "userId": 1,
      "id": 2,
      "Name": "Aayush",
      "DOB": "23/11/1997"
    },
    {
      "userId": 1,
      "id": 3,
      "Name": "AArushi",
      "DOB": "08/09/1997"
    },
    {
      "userId": 1,
      "id": 4,
      "Name": "Deeksha",
      "DOB": "09/10/1997"
    },
    {
      "userId": 1,
      "id": 5,
      "Name": "gagan",
      "DOB": "09/7/1996"
    }]
  myArr;

  setdata() {
    this.myArr = this.arr;
  }
  getdata() {
    return this.myArr
  }
}

