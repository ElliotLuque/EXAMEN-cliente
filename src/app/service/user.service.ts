import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPage } from '../model/generics-model';
import { IUser, IUser2Form, IUser2Send } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private entityUrl = "/user"
  url: string = ""

  constructor(private oHttp: HttpClient) { 
    this.url = `${environment.baseURL}${this.entityUrl}`;
  }

  getUserPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IUser>> {
    let params = new HttpParams()
      .set('filter', termino)
      .set("page", page)
      .set("size", size);
    if (strSortField != "") {
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>(this.url, { params: params });
  }

  getOne(id: number ): Observable<IUser> {
    return this.oHttp.get<IUser>(`${this.url}/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.oHttp.delete<number>(`${this.url}/${id}`);
  }

  updateUser(post2Form: IUser2Form): Observable<number> {
    const oPost2Send = {
      id: post2Form.id.value,
      name: post2Form.name.value,
      surname: post2Form.surname.value,
      lastname: post2Form.lastname.value,
      email: post2Form.email.value,
      username: post2Form.username.value
    }
    return this.oHttp.put<number>(`${this.url}`, oPost2Send);
  }

  newUser(oDeveloper2Form: IUser2Form): Observable<number> {    
    let oDeveloper2Send: IUser2Send = {
      id: 0,
      name: oDeveloper2Form.name.value,
      surname: oDeveloper2Form.surname.value,
      lastname: oDeveloper2Form.lastname.value,
      username: oDeveloper2Form.username.value,
      email: oDeveloper2Form.email.value,
    }
    return this.oHttp.post<number>(this.url, oDeveloper2Send);
  }

}


