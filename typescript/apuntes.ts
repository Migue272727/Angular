let color: string = "rojo";
let edad: number = 2;

let listado: number[] = [1,2,3,4]; //Array

let nuevoListado: [string,number] = ["miguel angel",12] //Tupla

let noSeguro: any = 3; //Usamos any cuando no tenemos conocimiento de nuestra estructura de datos
noSeguro = "Se puede cambiar el tipo"; 
let lista: any[] = [1,"pepe",true];

class Persona{
     nombre: string;
     edad: number;
    //igual que en java
}

let p1 = new Persona(); //creamos el objeto p1 de la clase persona
p1.nombre = "aa";
interface direccion{
    calle: string;
    num: number;
    poblacion: number;
    //se usan para crear objetos especificos para definir un objeto de datos
}

function sumar (sumando1: number, sumando2:number){
    return sumando1 + sumando2;
        //hara exactamente lo mismo que en java
}

function nombreCompleto (nombre: string, apellido?:string){
    //hara exactamente lo mismo que en java solo que el parametro apellido es opcional
}

