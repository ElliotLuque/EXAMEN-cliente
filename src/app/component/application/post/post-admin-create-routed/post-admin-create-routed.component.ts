import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost, IPost2Form } from 'src/app/model/post-model';
import { PostService } from 'src/app/service/post.service';
declare let bootstrap: any;

@Component({
  selector: 'app-post-admin-create-routed',
  templateUrl: './post-admin-create-routed.component.html',
  styleUrls: ['./post-admin-create-routed.component.css']
})
export class PostAdminCreateRoutedComponent implements OnInit {

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
    private oPostService: PostService,
    private oFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      title: [''],
      body: [''],
      labels: [''],
      visible: [''],
      datetime: [''],
      user: ['']
    });
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
      this.oPostService.newPost(this.oPost2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle="Blogbuster";
          this.modalContent="Post " + this.id + " created";
          this.showModal(data);
        }
      })
    }
  }

  getRandomData():void {
    this.oPostService.randomPost().subscribe({
      next: (data: IPost) => {
        this.oForm.controls['body'].setValue(data.body);
        this.oForm.controls['title'].setValue(data.title);

        const labels = data.body
        const array = labels.split(" ");
        let stringLabels = array['1'] + ", " + array['2'] + ", " + array['3'];

        this.oForm.controls['labels'].setValue(stringLabels);
        this.oForm.controls['visible'].setValue(true);
        this.oForm.controls['user'].setValue(1)
    }})
  }

  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/developer/view', data])
    })
    this.myModal.show()
  }

}
