import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  vratiSveStudente(){
    return this.httpClient.get<Student[]>('http://localhost:3000/students')

  }
  dodajStudenta(student: Student){
    return this.httpClient.post<Student>('http://localhost:3000/students', student)
  }

  obrisiStudenta(id:number){
    return this.httpClient.delete<Student>(`http://localhost:3000/students/${id}`)

  }
  vratiStudentaPrekoId(id:number){
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`)
  }

  filtrirajStudente(ime: string, prezime: string, brIndeksa: string){
    return this.httpClient.get<Student[]>(`http://localhost:3000/students?ime_like=${ime}&prezime_like=${prezime}&brojIndeksa_like=${brIndeksa}`)
  }

  getStudent(id:number){
      return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }

  updateStudent(student:Student){
    return this.httpClient.put<Student>(`http://localhost:3000/students/${student.id}`, student)
  }
}
