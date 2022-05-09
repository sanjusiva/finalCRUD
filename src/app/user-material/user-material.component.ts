import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-material',
  templateUrl: './user-material.component.html',
  styleUrls: ['./user-material.component.scss']
})
export class UserMaterialComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();

  }

}
