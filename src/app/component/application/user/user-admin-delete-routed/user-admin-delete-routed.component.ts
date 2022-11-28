import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IUser } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-admin-delete-routed',
  templateUrl: './user-admin-delete-routed.component.html',
  styleUrls: ['./user-admin-delete-routed.component.css']
})
export class UserAdminDeleteRoutedComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
  ) {    this.id = oActivatedRoute.snapshot.params['id'];
}

ngOnInit(): void {
  this.getOne();
}

getOne() {
  this.oUserService.getOne(this.id).subscribe({
    next: (data: IUser) => {
      this.oUser = data;
      console.log(data);
    }
  })
}

removeOne() {
  this.oUserService.deleteUser(this.id).subscribe({
    next: (data: number) => {
      this.msg = "User " + this.id + " removed";        
      //open bootstrap modal here
      alert(this.msg);
      this.oLocation.back();
    }
  })
}

}
