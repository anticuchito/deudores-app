import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeudoresService {
  url = environment.url_backend;
  constructor(private http: HttpClient) {}
  login(dataForm: any) {
    console.log(dataForm);
    return this.http.post(this.url + 'login/inicio-sesion', dataForm);
  }

  register(dataForm: any) {
    dataForm.tipo = 0;
    dataForm.estado = 1;
    return this.http.post(this.url + 'usuario/crear', dataForm);
  }
  getUsers() {
    return this.http.get(this.url + 'usuario/obtener-usuarios');
  }
  registerDebt(dataDebt: any, userId: any) {
    const date = new Date().toISOString();
    // const dateFormated =
    //   date.toISOString().split('T')[0] +
    //   ' ' +
    //   date.toTimeString().split(' ')[0];
    dataDebt.usuarioId = userId;
    dataDebt.estado = 0;
    dataDebt.fecha_creacion = date;
    console.log(dataDebt);
    return this.http.post(this.url + 'registro_deuda/crear', dataDebt);
  }
  getDebo(idUsuario: any) {
    return this.http.get(
      `${this.url}registro_deuda/obtener-registro-deuda-pagar/${idUsuario}/0`
    );
  }
  getDeben(idUsuario: any) {
    return this.http.get(
      `${this.url}registro_deuda/obtener-registro-deuda-deben/${idUsuario}/1`
    );
  }
  notificarDeuda(id: any) {
    return this.http.get(`${this.url}registro_deuda/notificar-deuda/${id}`);
  }
  finalizarDeuda(id: any) {
    // const date= new Date().toISOString();
    return this.http.get(`${this.url}registro_deuda/finalizar-deuda/${id}`);
  }
}
