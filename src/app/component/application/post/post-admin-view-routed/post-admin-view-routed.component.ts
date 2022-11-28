import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/post-model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-admin-view-routed',
  templateUrl: './post-admin-view-routed.component.html',
  styleUrls: ['./post-admin-view-routed.component.css']
})
export class PostAdminViewRoutedComponent implements OnInit {

  id: number = 0;
  oPost: IPost = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oPostService: PostService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPostService.getOne(this.id).subscribe({
      next: (data: IPost) => {
        this.oPost = data;
        console.log(data);
      }
    })
  }

}
