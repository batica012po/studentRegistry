import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesoriService } from 'src/app/servisi/profesori.service';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.css']
})
export class AddProfesorComponent implements OnInit {

  profesor?: Profesor;
  profesorForm?: FormGroup;
  subscriptions?: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private profesorService: ProfesoriService, private router: Router) { }

  ngOnInit(): void {
    this.createProfesorForm();
  }

  createProfesorForm() {
    this.profesorForm = this.formBuilder.group(
      {
        ime: [this.profesor?.ime, [Validators.required, Validators.minLength(2)]],
        prezime: [this.profesor?.prezime, [Validators.required, Validators.minLength(2)]],
        email: [this.profesor?.email, [Validators.required]],
        datumRodjenja: [this.profesor?.datumRodjenja, [Validators.required]],
        ulica: [this.profesor?.ulica, [Validators.required]],
        grad: [this.profesor?.grad, [Validators.required]],
      }
    )
  }
  hasErrors(controlName: string, error: string) {
    const control = this.profesorForm?.get(controlName);
    return control && control.hasError(error) && (control.touched || control.dirty)
  }

  dodajProfesora() {
    const profesor = this.profesorForm?.getRawValue();
    this.subscriptions?.add((this.profesorService.dodajProfesora(profesor).subscribe
    ({ next: profesor => { this.router.navigate(['/profesori']) } })))
  }

}
