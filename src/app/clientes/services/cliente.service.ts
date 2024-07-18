import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../models/cliente.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'ruben',
      apellidos: 'Zapata',
      ruc: '00000',
      email: 'ruben@gmail.com',
      direccion: 'calle 000',
      esMayorista: false
    },
  ];
  constructor() { }
  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }
  getCliente(id: number): Observable<Cliente | undefined> {
    return of(this.clientes.find(c => c.id === id));
  }
}
