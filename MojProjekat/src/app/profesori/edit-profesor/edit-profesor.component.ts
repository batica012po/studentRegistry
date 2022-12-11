import { Component, OnInit } from '@angular/core';
import { ProfesoriService } from 'src/app/servisi/profesori.service';
import{Subscription, take} from 'rxjs';
import { Profesor } from 'src/app/models/profesor.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styleUrls: ['./edit-profesor.component.css']
})
export class EditProfesorComponent implements OnInit {

  id=0;
  profesor!:Profesor;
  profesorForm?: FormGroup;
  subscriptions?: Subscription= new Subscription();

  constructor( private router: Router,private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,private profesorService:ProfesoriService) { }

  ngOnInit(): void {
    this.subscriptions?.add(this.activeRoute.params.subscribe(params=>{
      const id=params['id'];
      this.loadData(id);
      this.id=id;
    }))
    const profesorID= Number (this.activeRoute.snapshot.paramMap.get('id'));
    this.loadData(profesorID)
  }

  loadData(id:number){
    this.profesorService.getProfesor(id).pipe(take(1)).subscribe(profesor => {
      this.profesor=profesor
      this.editProfesorForm()
    })
  }

  editProfesorForm() {
    this.profesorForm = this.formBuilder.group(
      {
        ime: [this.profesor?.ime],
        prezime: [this.profesor?.prezime],
        email: [this.profesor?.email],
        datumRodjenja: [this.profesor?.datumRodjenja],
        ulica: [this.profesor?.ulica],
        grad: [this.profesor?.grad],
      }
    )
  }

  updateProfesor(){
    const profesor= this.profesorForm?.getRawValue()
    profesor.id= this.profesor.id;
    this.profesorService.updateProfesor(profesor).subscribe({
      next: profesor=> {
        this.router.navigate(['/profesori'])
      }
    })
  }

}
