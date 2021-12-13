import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DeudoresService } from '../services/deudores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;
  constructor(
    private fb: FormBuilder,
    private deudoresService: DeudoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formReactive() {
    return this.form.controls;
  }
  sendData() {
    this.deudoresService.register(this.form.value).subscribe(
      (res: any) => {
        if (res.usuario) {
          console.log(res);
          alert('usuario creado authomaticamente');
          this.router.navigate(['/']);
        } else {
          alert('usario no ha podido ser creado');
        }
      },
      (error) => {
        alert('usario no ha podido ser creado');
      }
    );
  }
}
