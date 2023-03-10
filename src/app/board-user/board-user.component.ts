import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        console.error(err);

        this.content = (err.error) ? JSON.parse(err.error).message : 'Error with status: ' + err.status;
      }
    });
  }

}
