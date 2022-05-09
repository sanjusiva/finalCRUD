import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-material',
  templateUrl: './admin-material.component.html',
  styleUrls: ['./admin-material.component.scss']
})
export class AdminMaterialComponent implements OnInit {
  userList: User[] = [];
  constructor(private userService: UserService,private login:LoginComponent) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    console.log("Username"+this.login.username);
    
  }

}
