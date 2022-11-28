import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost, IPost2Form } from 'src/app/model/post-model';
import { PostService } from 'src/app/service/post.service';
declare let bootstrap: any;

@Component({
  selector: 'app-post-admin-edit-routed',
  templateUrl: './post-admin-edit-routed.component.html',
  styleUrls: ['./post-admin-edit-routed.component.css']
})
export class PostAdminEditRoutedComponent implements OnInit {

  id: number = 0;
  oPost: IPost = null;
  oPost2Form: IPost2Form = null;
  oForm: FormGroup<IPost2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oPostService: PostService,
    private oFormBuilder: FormBuilder
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      title: [''],
      body: [''],
      labels: [''],
      visible: [''],
      datetime: ['']
    });
    this.getOne();
  }

  getOne() {
    this.oPostService.getOne(this.id).subscribe({
      next: (data: IPost) => {
        this.oPost = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id],
          title: [data.title],
          body: [data.body, ],
          labels: [data.labels ],
          visible: [data.visible, ],
          datetime: [data.datetime,]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oPost2Form = {
      id: new FormControl(this.oForm.value.id),
      title: new FormControl(this.oForm.value.title),
      body: new FormControl(this.oForm.value.body),
      labels: new FormControl(this.oForm.value.labels),
      visible: new FormControl(this.oForm.value.visible),
      datetime: new FormControl(this.oPost.datetime),
      user: new FormControl(this.oPost.user.id)
    }
    if (this.oForm.valid) {
      this.oPostService.updatePost(this.oPost2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle="Blogbuster";
          this.modalContent="Post " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/post/view', this.id])
    })
    this.myModal.show()
  }

}
