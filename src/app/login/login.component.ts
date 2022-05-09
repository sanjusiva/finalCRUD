import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username:string='';
  psw:string='';

  display(formData:NgForm){
    console.log(formData.value);
    if(this.username=="Sanju" && this.psw=="sanju123"){
      console.warn("you are admin");
      //this.username='Sanju';
      
      this.router.navigate(['/user-list']);
  }
  else{
    this.router.navigate(['/user-material']);
  }
}

  ngOnInit(): void {
  }

}
