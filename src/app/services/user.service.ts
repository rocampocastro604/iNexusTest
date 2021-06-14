import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {usuario: "rocampo", nombre: 'Ricardo', apellido: "Perez", sexo: 'Male'},
    {usuario: "pepe", nombre: 'Pedro', apellido: "Perez", sexo: 'Male'},
    {usuario: "juanto", nombre: 'Juan', apellido: "Ocampo", sexo: 'Female'},
    {usuario: "rikes", nombre: 'Rambo', apellido: "Vega", sexo: 'Female'},
    {usuario: "fred", nombre: 'Frederic', apellido: "Lago", sexo: 'Male'},
    {usuario: "michaelik", nombre: 'Michael', apellido: "Perez", sexo: 'Female'},
    {usuario: "focastro", nombre: 'Federico', apellido: "Zapata", sexo: 'Male'},
    {usuario: "michaelik", nombre: 'Michael', apellido: "Perez", sexo: 'Female'}
  ];
  
  constructor() { }

  getUser(){
    return this.listUsers.slice();
  }

  deleteUser(index: number){ 
    this.listUsers.splice(index, 1);
  }

  addUser(usuario: User){ 
    this.listUsers.unshift(usuario);
  }
}
