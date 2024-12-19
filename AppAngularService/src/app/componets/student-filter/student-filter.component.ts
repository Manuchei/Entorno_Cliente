import { Component, inject } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'
import { ICurso } from '../../interfaces/icurso';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-student-filter',
  imports: [FormsModule],
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.css'
})
export class StudentFilterComponent {

  cursos: ICurso[];
  StudentService = inject(StudentService);

  constructor(){
    this.cursos = [];
  }
  
  ngOnInit(): void{
    this.cursos = this.StudentService.getAllCourses();
  }


getDataFilter(miForm: NgForm) {

}

}
