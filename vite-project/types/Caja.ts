export interface Caja<T> {
    contenido: T;
}

export class CajaClass<T> implements Caja<T> {
    
    constructor(public contenido: T) {
        this.contenido = contenido;
    }

}