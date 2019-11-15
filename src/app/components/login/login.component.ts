import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.httpService.login(this.email, this.password).subscribe((token) => this.router.navigateByUrl('/profile'));
  }
}
