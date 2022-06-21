import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../interfaces/Categotia.interface';
import { FuncionesService } from '../../servicios/Funciones.Service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  catg:ICategoria = {
    idCatg: '',
    nomCategoria: '',
    descripcionCategoria: ''
  }

  constructor(private servicio:FuncionesService) { }

  ngOnInit(): void {

  }

  agregar():void{
    this.servicio.addCategoria(this.catg);
  }

}
