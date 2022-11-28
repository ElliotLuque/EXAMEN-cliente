import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generics-model';
import { IPost } from 'src/app/model/post-model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-admin-plist-routed',
  templateUrl: './post-admin-plist-routed.component.html',
  styleUrls: ['./post-admin-plist-routed.component.css']
})
export class PostAdminPlistRoutedComponent implements OnInit {

  responseFromServer: IPage<IPost>;

  strTermFilter: string = "";
  id_userFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(private oPostService: PostService) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oPostService.getPostPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_userFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<IPost> ) => {
        this.responseFromServer = resp;
        if (this.page > resp.totalPages - 1) {
          this.page = resp.totalPages - 1;
        }
      },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
    });
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

  setFilterByUser(id: number): void {
    this.id_userFilter = id;
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
