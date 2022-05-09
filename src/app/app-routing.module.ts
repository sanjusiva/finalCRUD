import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddUserComponent} from './add-user/add-user.component';
import { AdminMaterialComponent } from './admin-material/admin-material.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import {UserListComponent} from './user-list/user-list.component';
import { UserMaterialComponent } from './user-material/user-material.component';

const routes: Routes = [
   { path: '', component: CourseComponent},
  //{path:'',redirectTo:'user',pathMatch:'full'},
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent },
  { path:'user-material',component:UserMaterialComponent},
  { path:'admin-material',component:AdminMaterialComponent},
  { path:'user-list',component:UserListComponent},
  { path:'login',component:LoginComponent},
  { path:'course',component:CourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
