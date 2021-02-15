import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url: string = "https://api.github.com/users/";

  constructor(private http: HttpClient, private test: TestService) { }

  getUser() : User {
    return {
      name: 'Foo Bar',
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-123-1234',
        '456-456-4567'
      ]
    };
  }

  getGitUser(username: string) {
    return this.http.get<User>(`${this.url}${username}`);      
  }

  getTest(){
    return this.test.getData();
  }
}
