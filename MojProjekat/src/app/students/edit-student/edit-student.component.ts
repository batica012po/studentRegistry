import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../servisi/student.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id = 0;
  student!: Student;
  subscriptions?: Subscription = new Subscription();
  studentForm?: FormGroup

  constructor(private router: Router, private httpClient: HttpClient, private activeRoute: ActivatedRoute, private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptions?.add(this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      this.loadData(id);
      this.id = id;
    }))
    const studentID = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.loadData(studentID)

  }

  loadData(id: number) {
    this.studentService.getStudent(id).pipe(take(1)).subscribe(student => {
      this.student = student
      this.editStudentForm()
    })
  }

  editStudentForm() {
    this.studentForm = this.formBuilder.group({
      ime: [this.student?.ime],
      prezime: [this.student?.prezime],
      brojIndeksa: [this.student?.brojIndeksa],
      datumRodjenja: [this.student?.datumRodjenja],
      ulica: [this.student?.ulica],
      grad: [this.student?.grad],
    });
  }

  updateStudent() {
    const student = this.studentForm?.getRawValue();
    student.id = this.student.id;
    this.studentService.updateStudent(student).subscribe({
      next: student => {
        this.router.navigate(['/students'])
      }
    });
  }

}
