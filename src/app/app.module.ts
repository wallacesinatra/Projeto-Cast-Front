import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarCursoComponent } from './consultar-curso/consultar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



const routes: Routes= [
  {path: '', component: HomeComponent},
  {path: 'cadastrar-curso', component: CadastrarCursoComponent},
  {path: 'consultar-curso', component: ConsultarCursoComponent},
  {path: 'editar-curso/:id', component: EditarCursoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ConsultarCursoComponent,
    EditarCursoComponent,
    CadastrarCursoComponent,
    HomeComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
