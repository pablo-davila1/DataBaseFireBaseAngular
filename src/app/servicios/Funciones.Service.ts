import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {  ICategoria } from '../interfaces/Categotia.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor(private db:AngularFirestore) {}

  addCategoria(categoria:ICategoria){
    this.db.collection('categorias').doc().set({
      "idCatg": categoria.idCatg,
      "nomCategoria": categoria.nomCategoria,
      "descripcionCategoria": categoria.descripcionCategoria
    }).then(respuesta => {
      console.log(respuesta);
    }).catch((error)=>{
      console.log(error)
    });
  }

}
