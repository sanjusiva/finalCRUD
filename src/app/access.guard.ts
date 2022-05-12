import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  userList:User[]=[]
  userName:string='';   
  constructor(private userService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{

    return true;
  }
  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    this.userList = this.userService.getUsers();
    this.userName=this.userService.userName;
    console.log("Username in router guard"+this.userService.userName);    
  }
  
}
