import './style.css'
import { Usuario } from '../types/usuario'
import {UsuarioClass } from '../types/usuarioClass';

const usuarios: Usuario[] =[
  {
    id: 1,
    nombre: "Juan",
    edad: 25,
    email: "juan@mail.com",
    activo: true
  },
  {
    id: 2,
    nombre: "Ana",
    edad: 30,
    email: "ana@mail.com",
    activo: false
  },
  {
    id: 3,
    nombre: "Pedro",
    edad: 28,
    email: "pedro@mail.com",
    activo: true
  }
]

console.log(usuarios.filter(usuario => usuario.activo === true))


const usuario1 = new UsuarioClass(1, "María", 22, "maria@mail.com", true);
const usuario2 = new UsuarioClass(2, "Carlos", 35, "carlos@mail.com", false);

usuario1.toggleActivo();
usuario2.toggleActivo();

console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);