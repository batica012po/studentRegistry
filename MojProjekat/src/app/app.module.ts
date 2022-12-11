import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfesoriListaComponent } from './profesori/profesori-lista/profesori-lista.component';
import { ProfesoriDetailsComponent } from './profesori/profesori-details/profesori-details.component';
import { AddProfesorComponent } from './profesori/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './profesori/edit-profesor/edit-profesor.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    EditStudentComponent,
    HomePageComponent,
    ProfesoriListaComponent,
    ProfesoriDetailsComponent,
    AddProfesorComponent,
    EditProfesorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
