export interface Cliente {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  direccion: string;
  dni?: string;          
  ruc?: string;          
  esMayorista: boolean;
}
