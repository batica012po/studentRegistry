import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { take } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesoriService } from 'src/app/servisi/profesori.service';

@Component({
  selector: 'app-profesori-lista',
  templateUrl: './profesori-lista.component.html',
  styleUrls: ['./profesori-lista.component.css']
})
export class ProfesoriListaComponent implements OnInit {

  profesori: Profesor[]=[];
  filterForm!:FormGroup;
  ime?: string= "";
  prezime?: string="";
  email?:string="";

  constructor(private formBuilder:FormBuilder, private profesoriService:ProfesoriService, private router:Router) { }

  ngOnInit(): void {
    this.createFilterForm();
    this.profesoriService.vratiSveProfesore().subscribe(profesori=>{this.profesori=profesori})
  }

  createFilterForm(){
    this.filterForm= this.formBuilder.group({
      ime:[this.ime],
      prezime:[this.prezime],
      email:[this.email]
    })
  }

  filtriraj(){
    const filteri=this.filterForm.getRawValue()
    this.profesoriService.filtrirajProfesora(filteri.ime, filteri.prezime, filteri.email).pipe(take(1)).subscribe(result=>{this.profesori=result})
  }

  resetujFiltere(){
    this.filterForm.controls['ime'].setValue('')
    this.filterForm.controls['prezime'].setValue('')
    this.filterForm.controls['email'].setValue('')

    this.filtriraj();
  }

  potvrdaBrisanja(id:number){
    if(confirm('Da li ste sigurni?')){
      this.profesoriService.obrisiProfesora(id).pipe(take(1)).subscribe({next: profesor => { this.profesoriService.vratiSveProfesore().subscribe(profesori=>{this.profesori=profesori})}})
    }
  }

  prikaziDetalje(id: number){
    this.router.navigate(['profesori-details/'+id])
  }

  dodajProfesora(){
    this.router.navigate(['/add-profesor'])
  }



}
