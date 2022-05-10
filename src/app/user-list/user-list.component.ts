import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  userName:string='';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    this.userList = this.userService.getUsers();
    this.userName=this.userService.userName;
    console.log("Username"+this.userService.userName);    
  }
  remove(id: number) {
    console.warn("remove id :"+id);
    if (confirm("Are you sure would you like to delete the details?") == true) {
      this.userService.removeUser(id);
      this.userList = this.userService.getUsers();
    } 
}

}
