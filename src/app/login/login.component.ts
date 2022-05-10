import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  username: string = '';
  psw: string = '';

  display(formData: NgForm) {
    console.log(formData.value);
    if (this.username == "Sanju" && this.psw == "sanju123") {
      console.warn("you are admin");
      //this.username='Sanju';
      //console.log(this.userService.getDomainName());
      
      this.userService.getUsername(this.username);
      this.router.navigate(['/user-list']);
    }
    else {
      this.userService.getUsername(this.username);
      this.router.navigate(['/admin-material']);
    }
  }

  ngOnInit(): void {
   
  }

}
