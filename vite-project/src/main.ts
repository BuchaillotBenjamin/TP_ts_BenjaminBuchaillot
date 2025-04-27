import './style.css'
import { Usuario } from '../types/Usuario'
import {UsuarioClass } from '../types/UsuarioClass';
import { AdminUsuario } from '../types/AdminUsuario';
import { CajaClass } from '../types/Caja';

//ejercicio 2
console.log("ejercicio 2");
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

//ejercicio 3
console.log("ejercicio 3");
const usuario1 = new UsuarioClass(1, "María", 22, "maria@mail.com", true);
const usuario2 = new UsuarioClass(2, "Carlos", 35, "carlos@mail.com", false);

usuario1.toggleActivo();
usuario2.toggleActivo();

console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

//ejercicio 4
console.log("ejercicio 4");
let permisos: string[] = ["crear", "editar", "eliminar"];
const admin1 = new AdminUsuario(4, "Admin", 45, "admin@mail.com", true,permisos);

console.log("Admin:", admin1);

//ejercicio 5
console.log("ejercicio 5");
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

//ejercicio 6
console.log("ejercicio 6");
console.log(productos.sort((a, b) => a.precio - b.precio));

const nuevoProducto = {
    id: 5,
    nombre: "Webcam",
    precio: 80,
    stock: 15
};
productos.push(nuevoProducto);
console.log(productos);

productos.pop();
console.log( productos);

//ejercicio 7
console.log("ejercicio 7");

function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const numeros: number[] = [1, 2, 3, 4, 5];
console.log("letra aleatorio:", getRandomItem(numeros));

const palabras: string[] = ["a", "b", "c", "d", "e"];
console.log("letra aleatoria:", getRandomItem(palabras));

console.log("usuario aleatorio:", getRandomItem(usuarios));

//ejercicio 8
console.log("ejercicio 8");

const cajaNumero = new CajaClass<number>(42);
console.log(cajaNumero.contenido);

const cajaTexto = new CajaClass<string>("hola mundo");
console.log(cajaTexto.contenido);

const cajaUsuario = new CajaClass<Usuario>(usuarios[0]);
console.log(cajaUsuario.contenido);

//ejercicio 9
console.log("ejercicio 9");

function obtenerDatos(): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const datos = [
                { id: 1, titulo: "Primer dato", descripcion: "Descripción 1" },
                { id: 2, titulo: "Segundo dato", descripcion: "Descripción 2" },
                { id: 3, titulo: "Tercer dato", descripcion: "Descripción 3" }
            ];
            resolve(datos);
        }, 3000);
    });
}

async function mostrarDatos() {
    try {
        const datos = await obtenerDatos();
        console.log("Datos recibidos:", datos);
    } catch (error) {
        console.error(error);
    }
}

mostrarDatos();

//ejercicio 10
console.log("ejercicio 10");

async function obtenerUsuariosAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        console.log("Usuarios de la API:", usuarios);
    } catch (error) {
        console.error(error);
    }
}

obtenerUsuariosAPI();

//ejercicio 11

function renderizarUsuarios(usuarios: Usuario[]) {
    const $listaElement = document.getElementById('listaUsuarios');
    if (!$listaElement) return;

    const html = usuarios.map(usuario => `
        <li>
            <strong>${usuario.nombre}</strong>
            <br>
            Email: ${usuario.email}
            <br>
            Edad: ${usuario.edad}
            <br>
            Activo: ${usuario.activo ? 'Sí' : 'No'}            
        </li>
    `).join('');

    $listaElement.innerHTML = html;
}

//ejercicio 12
const $botonMostrar = document.getElementById('mostrarUsuarios');
if ($botonMostrar) {
    $botonMostrar.addEventListener('click', () => renderizarUsuarios(usuarios));
}





