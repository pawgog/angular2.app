import { Component, OnInit } from '@angular/core';
 
import { User } from '../user/index';
import { UserService } from '../service/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styles: ['a {color:#ffffff;} ']
})
 
export class HomeComponent implements OnInit {
    users: User[] = [];
 
    constructor(private userService: UserService) { }
 
    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
}