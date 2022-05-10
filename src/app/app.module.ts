import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { UserMaterialComponent } from './user-material/user-material.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { AdminMaterialComponent } from './admin-material/admin-material.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserMaterialComponent,
    CourseComponent,
    LoginComponent,
    AdminMaterialComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // BrowserAnimations Modules
    BrowserAnimationsModule,

    //  PrimeNG  Modules
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

    //  Angular Form Modules
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
