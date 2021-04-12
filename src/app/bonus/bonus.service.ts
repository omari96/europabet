import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bonus } from './model/bonus.model';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/bonus/";


  getBonus(id: number) {
    return this.http.get(this.url + '?userId=' + id)
  }

  deleteBonus(id: Bonus) {
    return this.http.delete(this.url + id)
  }

  createBonus(id: number, bonus: Bonus) {
    return this.http.post(`${this.url}`, bonus)
  }

}
