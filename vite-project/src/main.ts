import './style.css'
import { Usuario } from '../types/usuario'

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

