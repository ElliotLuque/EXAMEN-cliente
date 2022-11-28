import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, IUser2Form } from 'src/app/model/user-model';
import { UserService } from 'src/app/service/user.service';
declare let bootstrap: any;

@Component({
  selector: 'app-user-admin-create-routed',
  templateUrl: './user-admin-create-routed.component.html',
  styleUrls: ['./user-admin-create-routed.component.css']
})
export class UserAdminCreateRoutedComponent implements OnInit {
  
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
    private oUserService: UserService,
    private oFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [,],
      name: [, ],
      surname: [, ],
      lastname: [, ],
      email: [],
      username: [ ]
    });
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
      this.oUserService.newUser(this.oUser2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle="Blogbuster";
          this.modalContent="User " + this.id + " created";
          this.showModal(data);
        }
      })
    }
  }

  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/user/view', data])
    })
    this.myModal.show()
  }

}
