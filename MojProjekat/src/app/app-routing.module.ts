import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfesoriListaComponent } from './profesori/profesori-lista/profesori-lista.component';
import { ProfesoriDetailsComponent } from './profesori/profesori-details/profesori-details.component';
import { AddProfesorComponent } from './profesori/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './profesori/edit-profesor/edit-profesor.component';

const routes: Routes = [
  
  {
    path:'students', component: StudentListComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  },
  {
    path: 'student-details/:id', component: StudentDetailsComponent
  },
  {
    path: 'app-edit-student/:id', component: EditStudentComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'profesori', component: ProfesoriListaComponent
  },
  {
    path:'profesori-details/:id', component: ProfesoriDetailsComponent
  },
  {
    path:'add-profesor', component: AddProfesorComponent
  },
  {
    path: 'edit-profesor/:id', component:EditProfesorComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
