import { Peliculas } from "./peliculas";

export interface User {
    gmail: string, 
    usuario:string, 
    nombre: string, 
    apellido: string, 
    contraseña:string,
    id: number, 
    cumpleaños: Date,
    genero: string, 
    listaVer: Peliculas[], 
    listaVistos: Peliculas[], 
    fotoPerfil: string
}