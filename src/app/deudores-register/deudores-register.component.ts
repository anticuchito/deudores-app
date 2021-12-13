import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeudoresService } from '../services/deudores.service';

@Component({
  selector: 'app-deudores-register',
  templateUrl: './deudores-register.component.html',
  styleUrls: ['./deudores-register.component.css'],
})
export class DeudoresRegisterComponent implements OnInit {
  idUser: any;
  dataDebt: any;
  constructor(
    private fb: FormBuilder,
    private deudoresService: DeudoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: any = localStorage.getItem('id');
    this.idUser = parseInt(id);
    this.dataDebt = this.fb.group({
      tipo: [
        0,
        [
          Validators.required,
          Validators.maxLength(1),
          Validators.pattern(/[0, 1]/),
        ],
      ],
      comentario: ['', Validators.required],
      valor: [0, Validators.required],
      involucradoId: [0, Validators.required],
    });
  }

  registerDebt() {
    console.log(this.dataDebt.value);
    this.deudoresService
      .registerDebt(this.dataDebt.value, this.idUser)
      .subscribe(
        (res: any) => {
          if (res.registro_deuda) {
            console.log(res);
            alert(res.mensaje);
            this.router.navigate(['/ver-deudas']);
          }
        },
        (error: any) => {
          alert(error.message);
        }
      );
  }
}
