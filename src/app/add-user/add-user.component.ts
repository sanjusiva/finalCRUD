import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,NgForm,Validators,FormControl} from '@angular/forms';
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
      mobile: ['',[Validators.required,Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(/([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/)]],
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
  resetValues(){
    this.userform.reset();
  }

  get name(){
    return this.userform.get('name');
  }
  get mobile(){
    return this.userform.get('mobile');
  }
  get email(){
    return this.userform.get('email');
  }
  // get gender(){
  //   return this.userform.get('gender');
  // }
  // get usertype(){
  //   return this.userform.get('usertype');
  // }
  // get fullFormControl(){
  //   return this.userform.controls;
  // }
  

}

