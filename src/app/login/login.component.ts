import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeudoresService } from '../services/deudores.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: any;
  constructor(
    private fb: FormBuilder,
    private deudoresService: DeudoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get formReactive() {
    return this.formLogin.controls;
  }
  decodeJwtToken(token: string) {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.log(error);
    }
  }
  login() {
    this.deudoresService.login(this.formLogin.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.inicio_sesion) {
          const decoded: any = this.decodeJwtToken(data.token);
          localStorage.setItem('id', decoded.id);
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home']);
          alert('Bienvenido');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      },
      (error) => {
        alert('no se pudo obtener acceso');
      }
    );
  }
}
