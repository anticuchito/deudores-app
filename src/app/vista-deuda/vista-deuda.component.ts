import { Component, OnInit } from '@angular/core';
import { DeudoresService } from '../services/deudores.service';

@Component({
  selector: 'app-vista-deuda',
  templateUrl: './vista-deuda.component.html',
  styleUrls: ['./vista-deuda.component.css'],
})
export class VistaDeudaComponent implements OnInit {
  constructor(private deudorService: DeudoresService) {}
  dataDebo: any;
  dataDeben: any;
  getDebo() {
    const id: any = localStorage.getItem('id');
    const idUsuario = parseInt(id);
    this.deudorService.getDebo(idUsuario).subscribe((res: any) => {
      this.dataDebo = res.registro_deudas;
      console.log(this.dataDebo);
    });
  }
  getDeben() {
    const id: any = localStorage.getItem('id');
    const idUsuario = parseInt(id);
    this.deudorService.getDeben(idUsuario).subscribe((res: any) => {
      this.dataDeben = res.registro_deudas;
      console.log(this.dataDeben);
    });
  }
  notificarDeuda(id: any) {
    this.deudorService.notificarDeuda(id).subscribe(
      (res: any) => {
        if (res.mensaje) {
          alert('Se notifico correctamente');
        }
      },
      (error) => {
        alert('No se pudo notificar correctamente');
      }
    );
  }

  finalizarDeuda(id: any) {
    this.deudorService.finalizarDeuda(id).subscribe(
      (res: any) => {
        if (res.respuesta_finalizar_deuda[0] === 1) {
          alert('Se finalizo correctamente');
        }
      },
      (error) => {
        alert('No se finalizar correctamente');
      }
    );
  }
  ngOnInit(): void {
    this.getDebo();
    this.getDeben();
  }
}
