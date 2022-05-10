import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import {User} from '../user'

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  //userList = new User();
  userList:any=[];
  id:number=0;
  constructor(private adminServe:UserService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userList=params['id'];
        const data = this.adminServe.getUsersByID(this.id);
        console.warn(data);

        if (data) {
          this.userList=data;
        }
      }
    });
    
  }

}
