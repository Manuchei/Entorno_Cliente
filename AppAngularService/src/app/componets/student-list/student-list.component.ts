import { StudentService } from './../../services/student.service';
import { Component, inject } from '@angular/core';
import { IStudent } from '../../interfaces/istudent';
import { StudentCardComponent } from "../student-card/student-card.component";
import { StudentFilterComponent } from "../student-filter/student-filter.component";

@Component({
  selector: 'app-student-list',
  imports: [StudentCardComponent, StudentFilterComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  alumnos!: IStudent[] //Es lo mismo quie inicializarlo a vacion alumno: IStudent[] = [];

  //Inyectar el servicio
  studentService = inject(StudentService);

  constructor(){
    this.alumnos = [];
  }

  ngOnInit(): void{
    this.alumnos = this.studentService.getAllStudents();
  }

}
