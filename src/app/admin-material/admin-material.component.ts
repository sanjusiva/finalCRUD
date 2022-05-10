import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-material',
  templateUrl: './admin-material.component.html',
  styleUrls: ['./admin-material.component.scss']
})
export class AdminMaterialComponent implements OnInit {
  userList: User[] = [];
  userName:string='';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    this.userName=this.userService.userName;
    console.log("Username"+this.userService.userName);    
  }

}
