import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student? : Student;
  id! : number;
  
 

  constructor(private router: Router,private activeRoute: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.vratiStudenta();
  }

  vratiStudenta(){
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.studentService.vratiStudentaPrekoId(this.id).subscribe(result => this.student = result)
  }

  updateStudent(id:number){
    this.router.navigate(['/app-edit-student/'+id]);
  }


}
