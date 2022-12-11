import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnDestroy {
  student?: Student;
  studentForm?: FormGroup;
  subscriptions?: Subscription = new Subscription();

  constructor(private formBuilder:FormBuilder, private studentService:StudentService, private router:Router ) { }
  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm(){
    this.studentForm = this.formBuilder.group({
      ime:[this.student?.ime,[Validators.required, Validators.minLength(2)]],
      prezime: [this.student?.prezime,[Validators.required, Validators.minLength(2)]],
      brojIndeksa:[this.student?.brojIndeksa,[Validators.required]],
      datumRodjenja:[this.student?.datumRodjenja,[Validators.required]],
      ulica:[this.student?.ulica,[Validators.required]],
      grad: [this.student?.grad,[Validators.required]],
    });
  }
  hasErrors(controlName: string, error: string) {
    const control = this.studentForm?.get(controlName);
    return control && control.hasError(error) && (control.touched || control.dirty)
  }

  dodajStudenta(){
    const student = this.studentForm?.getRawValue();
    this.subscriptions?.add((this.studentService.dodajStudenta(student).subscribe({
      next: student => {
        this.router.navigate(['/students'])
      }})));
    console.log("implementirati metodu");
  }
}
