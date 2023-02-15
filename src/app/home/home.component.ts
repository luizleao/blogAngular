import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        //console.error(err);

        this.content = (err.error) ? JSON.parse(err.error).message : 'Error with status: ' + err.status;
      }
    });
  }

}
