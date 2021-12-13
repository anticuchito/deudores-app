import { Component, OnInit } from '@angular/core';
import { DeudoresService } from '../services/deudores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private deudoresService: DeudoresService) {}

  getData() {
    this.deudoresService.getUsers().subscribe(
      (res: any) => {
        this.data = res.usuarios;
        console.log(this.data);
      },
      (error) => {
        alert('Error al cargar los datos');
      }
    );
  }
  ngOnInit(): void {
    this.getData();
  }
}
