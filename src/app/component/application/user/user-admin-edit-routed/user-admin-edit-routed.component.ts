import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUser2Form } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';
declare let bootstrap: any;


@Component({
  selector: 'app-user-admin-edit-routed',
  templateUrl: './user-admin-edit-routed.component.html',
  styleUrls: ['./user-admin-edit-routed.component.css']
})
export class UserAdminEditRoutedComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;
  oUser2Form: IUser2Form = null;
  oForm: FormGroup<IUser2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder
  ) { this.id = oActivatedRoute.snapshot.params['id'];}

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [,],
      name: [, ],
      surname: [, ],
      lastname: [, ],
      email: [],
      username: [ ]
    });
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id,],
          name: [data.name, ],
          surname: [data.surname, ],
          lastname: [data.lastname, ],
          email: [data.email,],
          username: [data.username, ]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Form = {
      id: new FormControl(this.oForm.value.id),
      name: new FormControl(this.oForm.value.name),
      surname: new FormControl(this.oForm.value.surname),
      lastname: new FormControl(this.oForm.value.lastname),
      email: new FormControl(this.oForm.value.email),
      username: new FormControl(this.oForm.value.username),
    }
    if (this.oForm.valid) {
      this.oUserService.updateUser(this.oUser2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle="Blogbuster";
          this.modalContent="User " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/user/view', this.id])
    })
    this.myModal.show()
  }
}
