import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generics-model';
import { IUser } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';
declare let bootstrap: any;

@Component({
  selector: 'app-user-admin-plist-routed',
  templateUrl: './user-admin-plist-routed.component.html',
  styleUrls: ['./user-admin-plist-routed.component.css']
})
export class UserAdminPlistRoutedComponent implements OnInit {

  responseFromServer: IPage<IUser>;

  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  oUser: IUser;

  constructor(private oUserService: UserService) { }

  ngOnInit(): void {
    this.getOne(1);
    this.getPage();
  }

  getPage() {
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<IUser> ) => {
        this.responseFromServer = resp;
        if (this.page > resp.totalPages - 1) {
          this.page = resp.totalPages - 1;
        }
        console.log(resp);
      },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
    });
  }

  getOne(id: number) {
    this.oUserService.getOne(id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
      }
    })
  }

  showModal = (id: number) => {
    this.getOne(id);
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    this.myModal.show()
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
