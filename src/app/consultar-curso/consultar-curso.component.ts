import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-curso',
  templateUrl: './consultar-curso.component.html',
  styleUrls: ['./consultar-curso.component.css']
})
export class ConsultarCursoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  curso: any[] = [];

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/curso').subscribe(
      (data) => { this.curso = data as any[]; },
      (e) => {
        console.log(e);

      }
    )
  }

  excluir(idCurso:number):void{
    if(window.confirm('Deseja realmente excluir o curso selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/curso/" + idCurso,
      {responseType : 'text'})
      .subscribe(
        (data) =>{

          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit(); //recarregar a consulta de profissionais

        },
        (e)=>{
          console.log(e);
        }
      )
    }
  }

}
