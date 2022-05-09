import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userList: User[] = [{
        id: 1,
        domain_name:'Angular',
        topic:'Introduction',
        material:"https://angular.io/docs"
    }];
    constructor() {}
    getUsers() {
        return this.userList
    }
    getUsersByID(id: number) {
        return this.userList.find(x => x.id == id)
    }
    addUser(user: User) {
        user.id = new Date().getTime();
        this.userList.push(user);
        setTimeout(()=>{
            alert("Added successfully");
          },100)
    }
    updateUser(user: User) {
        console.warn("userID : "+user.id);
        const userIndex = this.userList.findIndex(x => x.id == user.id);
        console.warn("userIndex : "+userIndex);
        console.warn("USER DETAILS : "+user);
        this.userList[userIndex] = user;
        alert("Updated successfully");
    }
    removeUser(id: number) {
        this.userList = this.userList.filter(x => x.id != id);
    }
}