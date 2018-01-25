import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

	users: User[];

  constructor(private githubUsersProvider: GithubUsersProvider) 
  {
    githubUsersProvider.load().subscribe(users => {
      console.log(users)
    })  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
