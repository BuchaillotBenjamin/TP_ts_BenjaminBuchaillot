import { UsuarioClass } from './UsuarioClass';

export class AdminUsuario extends UsuarioClass{

    public permisos: string[];

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
        super(id, nombre, edad, email, activo);
        this.permisos = permisos;
    }

    agregarPermiso(permiso: string) {
        this.permisos.push(permiso);
    }
}