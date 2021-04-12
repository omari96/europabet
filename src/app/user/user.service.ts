import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/users/";

  getUsers(page:any, size:any) {
    return this.http.get<User[]>(this.url+`?_page=${page}&_limit=${size}`);
  }
  
  createUser(user: User) {
    return this.http.post(`${this.url}`, user)
  }

  getAllUSer() {
    return this.http.get(this.url)
  }

  deleteUser(id: User) {
    return this.http.delete(this.url + id)
  }

  editUser(id: User) {
    return this.http.get(`${this.url}` + `${id}`)
  }

  updateUser(id: User, user: User) {
    return this.http.put(this.url + id, user)
  }
}
