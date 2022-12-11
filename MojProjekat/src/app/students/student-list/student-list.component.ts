import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/servisi/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[]=[];
  filterForm!: FormGroup;
  ime?:string = "";
  prezime?: string = "";
  brIndeksa?:string = "";

  constructor(private studentService:StudentService,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createFilterForm();
    this.studentService.vratiSveStudente().subscribe(students=>{this.students=students; console.log (this.students)})
  }
  createFilterForm(){
    this.filterForm = this.formBuilder.group({
      ime:[this.ime],
      prezime: [this.prezime],
      brIndeksa:[this.brIndeksa],
    });
  }

  filtriraj(){
    const filteri = this.filterForm.getRawValue();
    this.studentService.filtrirajStudente(filteri.ime, filteri.prezime, filteri.brIndeksa).pipe(take(1)).
      subscribe(result=>{this.students=result})
  }

  resetujFiltere(){
    this.filterForm.controls['prezime'].setValue('');
    this.filterForm.controls['ime'].setValue('');
    this.filterForm.controls['brIndeksa'].setValue('');

    this.filtriraj();
  }

  potvrdaBrisanja(id:number){
    if(confirm('Da li ste sigurni?')){
      this.studentService.obrisiStudenta(id).pipe(take(1)).subscribe({
        next: student => {
          this.studentService.vratiSveStudente().subscribe(students=>{this.students=students; console.log (this.students)});
        }});
    }
  }

  dodajStudenta(){
    this.router.navigate(['/add-student']);
  }

  prikaziDetalje(id: number){
    this.router.navigate(['/student-details/'+id])
  }
}
