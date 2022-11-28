import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-admin-view-routed',
  templateUrl: './user-admin-view-routed.component.html',
  styleUrls: ['./user-admin-view-routed.component.css']
})
export class UserAdminViewRoutedComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
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

}
