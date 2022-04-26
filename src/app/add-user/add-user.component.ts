import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {UserService} from '../service/user.service'; 
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  id: number = 0;
  userform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.userform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: [''],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      id: [0, [Validators.required]],
      userType: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userform.get('Id')?.setValue(params['id']);
        const data = this.userService.getUsersByID(this.id);
        if (data) {
          this.userform.setValue(data);
        }
      }
    });
  }
  save() {
   
    if (this.userform.get('id')?.value === 0) {
      //Create New User
      this.userService.addUser(this.userform.value);
    } else {
      //Update User info
      this.userService.updateUser(this.userform.value);
    }

    //Redirecting to table
    this.router.navigate(['/user']);
  }

}

