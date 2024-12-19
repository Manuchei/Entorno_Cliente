import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent';
import { ICurso } from '../interfaces/icurso';
import { ALUMNOS } from '../db/students.db';
import { CURSOS } from '../db/courses.db';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private arrAlumnos: IStudent[];
  private arrCurso: ICurso[];
  private id: number;

  constructor() { 
    this.arrAlumnos = ALUMNOS;
    this.id = ALUMNOS.length + 1;
    this.arrCurso = CURSOS;

  }

  getAllCourses(): ICurso[]{
    return this.arrCurso;
  }

  getAllStudents(): IStudent[]{
    //Cuando tenamos apis haremos llamadas a las APIs desde el Service
    return this.arrAlumnos;
  }

  getStudentById(id: number): IStudent | undefined{
    return this.arrAlumnos.find(student => student.id == id);

    //Para eliminar el tipo undefined en ;la devolucion
    // let response = this.arrAlumnos.find(student => student.id == id);
    // if(response){
    //   return (response as IStudent);
    // }
    // else{
    //   let noAlumno: IStudent = {
    //     nombre: "",
    //     edad: -1,
    //     email: "",
    //     curso: "string"
    //   }
    //   return noAlumno;
    // }
    }
  }


