import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPage } from '../model/generics-model';
import { IPost, IPost2Form } from '../model/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private entityUrl = "/post"
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${environment.baseURL}${this.entityUrl}`;
  }

  getPostPlist(page: number, size: number, termino: string, id_user: number, strSortField: string, strOrderDirection: string): Observable<IPage<IPost>> {
    let params = new HttpParams()
      .set('filter', termino)
      .set("page", page)
      .set("size", size);
    if (id_user != 0) {
      params = params.set("id_user", id_user);
    }
    if (strSortField != "") {
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IPost>>(this.url, { params: params });
  }

  getOne(id: number ): Observable<IPost> {
    return this.oHttp.get<IPost>(`${this.url}/${id}`);
  }

  deletePost(id: number): Observable<number> {
    return this.oHttp.delete<number>(`${this.url}/${id}`);
  }

  updatePost(post2Form: IPost2Form): Observable<number> {
    const oPost2Send = {
      id: post2Form.id.value,
      title: post2Form.title.value,
      body: post2Form.body.value,
      labels: post2Form.labels.value,
      visible: post2Form.visible.value,
      datetime: post2Form.datetime.value,
      user: post2Form.user.value
    }
    return this.oHttp.put<number>(`${this.url}`, oPost2Send);
  }

  newPost(post2Form: IPost2Form): Observable<number> {
    const oPost2Send = {
      id: post2Form.id.value,
      title: post2Form.title.value,
      body: post2Form.body.value,
      labels: post2Form.labels.value,
      visible: post2Form.visible.value,
      datetime: post2Form.datetime.value,
      user: post2Form.user.value
    }
    return this.oHttp.post<number>(`${this.url}`, oPost2Send);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  randomPost(): Observable<any> {
    let random = this.getRandomInt(100);
    return this.oHttp.get<any>(`https://jsonplaceholder.typicode.com/posts/${random}`);
  }
  
}
