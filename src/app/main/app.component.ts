import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-project';
  defaultUser: User;
  gitUsers: any[] = [];

  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'Settings', url: 'settings'}
  ]

  constructor(private userService: UserService){}

  ngOnInit(){
    this.defaultUser = this.userService.getUser();
  }  

  onSubmit(name: string){   
    this.userService.getGitUser(name)
      .subscribe((response) => {
        this.gitUsers.push(response);
        console.log(this.gitUsers);
      });   
  }
}
