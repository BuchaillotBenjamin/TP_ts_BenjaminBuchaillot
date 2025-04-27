import { Usuario } from './Usuario';

export class UsuarioClass implements Usuario {

    public id: number;
    public nombre: string;
    public edad: number;
    public email: string;
    public activo: boolean;

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.email = email
        this.activo = activo
    }

    toggleActivo() {

        this.activo = !this.activo
    
    }


}