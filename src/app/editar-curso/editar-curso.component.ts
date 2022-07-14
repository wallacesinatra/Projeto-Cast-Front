import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  mensagem: string = '';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idCurso = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get(environment.apiUrl + "/curso/" + idCurso).subscribe(

      (data: any) => {

        //preenchendo os campos do formulário com os dados do medico
        this.formEdicao.patchValue(data);

      },
      (e) => {
        alert(e.error);
        console.log(e);
      }

    )
  }

  formEdicao = new FormGroup({

    idCurso: new FormControl(''),
    descricao: new FormControl('', [Validators.required]),
    dataIni: new FormControl('', [Validators.required]),
    dataTer: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),

  })

  get form(): any {
    return this.formEdicao.controls;
  }

  //função para fazer a camada do edição na API
  onSubmit(): void {

    this.httpClient.put(environment.apiUrl + '/curso', this.formEdicao.value,
      { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = data;
          window.location.href = "/consultar-curso"
        },
        e => {
          alert(e.error);
          this.mensagem = "Ocorreu um erro, a edição não foi realizada."
          console.log(e);

        }

      )

  }


}
