import './style.css'
import { Usuario } from '../types/Usuario'
import {UsuarioClass } from '../types/UsuarioClass';
import { AdminUsuario } from '../types/AdminUsuario';

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

let permisos: string[] = ["crear", "editar", "eliminar"];
const admin1 = new AdminUsuario(4, "Admin", 45, "admin@mail.com", true,permisos);

console.log("Admin:", admin1);

const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 1200,
        stock: 5
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 20,
        stock: 0
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 50,
        stock: 10
    },
    {
        id: 4,
        nombre: "Monitor",
        precio: 300,
        stock: 3
    }
];

console.log(productos.map(producto => producto.nombre));

console.log(productos.filter(producto => producto.stock > 0));


