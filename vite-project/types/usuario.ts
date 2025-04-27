interface Usuario {
    id: number
    nombre: string
    edad: number
    email: string
    activo: boolean
}

type usuarioTiype = Usuario; 


// La principal diferencia entre interfaces y types es que las interfaces pueden ser 
// modificadas después de ser definidas agregando nuevas propiedades, mientras que 
// los types no pueden ser modificados una vez que se definen.

