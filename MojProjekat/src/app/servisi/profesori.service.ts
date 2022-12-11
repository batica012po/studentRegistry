import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesoriService {

  constructor( private httpClient:HttpClient) { }

  vratiSveProfesore(){
    return this.httpClient.get<Profesor[]>('http://localhost:3000/profesori')
  }

  vratiProfesoraPrekoId(id:number){
    return this.httpClient.get<Profesor>(`http://localhost:3000/profesori/${id}`)
  }

  obrisiProfesora(id:number){
    return this.httpClient.delete<Profesor>(`http://localhost:3000/profesori/${id}`)
  }

  dodajProfesora(profesor :Profesor){
    return this.httpClient.post<Profesor>('http://localhost:3000/profesori', profesor)
  }

  filtrirajProfesora(ime: string, prezime: string, email:string){
    return this.httpClient.get<Profesor[]>(`http://localhost:3000/profesori?ime_like=${ime}&prezime_like=${prezime}&email_like=${email}`)
  }

  updateProfesor(profesor:Profesor){
    return this.httpClient.put<Profesor>(`http://localhost:3000/profesori/${profesor.id}`, profesor)
  }

  getProfesor(id:number){
    return this.httpClient.get<Profesor>(`http://localhost:3000/profesori/${id}`);
}

}
