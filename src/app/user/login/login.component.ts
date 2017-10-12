import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/index';
import { UserService, AuthenticationService, AlertService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService, AuthenticationService, AlertService ],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  user: User[];
  token: any;
  maskcpf: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  email: string;
  password: string;
  loading = false;
  returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

    ngOnInit() {
      // Reset status login
      this.authenticationService.logout();

      // Get return url from  route  parameters of default to '/'
      this.returnUrl  = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      this.loading = true;
      this.authenticationService.login(this.email, this.password)
          .subscribe(
              result => {
                  this.token = result;
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
                  if (error = 401) {
                    console.log('Falha na autenticação');
                  }
              });
          if (this.token) {
            localStorage.setItem('token', this.token);
            // routerNavigate -> localhost:4200/usuario/userx
          }
  }
}
