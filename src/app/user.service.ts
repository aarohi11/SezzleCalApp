import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UserService 
{

  constructor(private http:HttpClient) { }

  private useUrl = 'http://localhost:8080/users/getAllUsers';

  public getUsers() 
  {
    console.log(this.http.get<User[]>(this.useUrl));
    return this.http.get<User[]>(this.useUrl);
  }
}
