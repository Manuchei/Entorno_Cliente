export interface Itrabajador {

    nombre: string,
    apellidos: string,
    email: string,
    telefono: string,
    edad: number,
    fechaNacimiento? : Date, //Es una variable opcional se pone ? para indicar que es opcional
    cargo?: string
}
