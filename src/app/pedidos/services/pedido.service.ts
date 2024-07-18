import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidos: Pedido[] = [
    { id: 1,
      clienteId: 1,
      fecha: new Date(),
        productos: [{ nombre: 'Martillo',
        cantidad: 2,
        precio: 50 }],
        total: 100,
        tipoEntrega: 'domicilio' },
  ];

  constructor() { }

  getPedidos(): Observable<Pedido[]> {
    return of(this.pedidos);
  }

  getPedido(id: number): Observable<Pedido | undefined> {
    return of(this.pedidos.find(p => p.id === id));
  }
}
