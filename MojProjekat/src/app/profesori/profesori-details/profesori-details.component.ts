import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesoriService } from 'src/app/servisi/profesori.service';

@Component({
  selector: 'app-profesori-details',
  templateUrl: './profesori-details.component.html',
  styleUrls: ['./profesori-details.component.css']
})
export class ProfesoriDetailsComponent implements OnInit {
  profesor?: Profesor;
  id!: number;
  constructor(private router: Router,private activeRoute: ActivatedRoute, private profesorService:ProfesoriService) { }

  ngOnInit(): void {
    this.vratiProfesora();
  }

  vratiProfesora(){
    this.id=Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.profesorService.vratiProfesoraPrekoId(this.id).subscribe(result=> this.profesor=result)
  }

  updateProfesor(id:number){
    this.router.navigate(['edit-profesor/'+id]);
  }

  

  

  

}
