import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

@Injectable()
export class GithubUsersProvider {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {}

  load(): Observable<User[]> {
  	//const result = this.http.get(`${this.githubApiUrl}/users`).map(res => <User[]>res.json());
  	const result = this.http.get(`${this.githubApiUrl}/users`);
  	console.log(result);
    return result;
  }
}