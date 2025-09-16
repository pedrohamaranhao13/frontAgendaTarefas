import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [
    CommonModule, //usar funções básicas do Angular
    FormsModule, //tratamento de formulários
    ReactiveFormsModule //tratamento de fomulários
  ],
  templateUrl: './cadastrar-tarefas.html',
  styleUrl: './cadastrar-tarefas.css'
})
export class CadastrarTarefas {

  //atributos
  categorias = signal<any[]>([]); //array vazio
  mensagem = signal<string>('');

  // Criar um objeto do tipo HttClient
  private http = inject(HttpClient);

  // função para ao abrir a página consultar as categorias na API
  ngOnInit() {
    // fazendo uma chamada para o serviço de consulta de categorias
    this.http.get('http://localhost:8081/api/v1/categorias')
            .subscribe((dados) => this.categorias.set(dados as any[]));
  }

  //Estrutura de fomulário
  formulario = new FormGroup({
    nomeTarefa : new FormControl('', [Validators.required]),
    dataTarefa : new FormControl('', [Validators.required]),
    prioridadeTarefa : new FormControl('', [Validators.required]),
    categoriaIdTarefa : new FormControl('', [Validators.required])
  });

  //função para excutar o cadastro da tarefa
  cadastrarTarefa() {

    this.http.post('http://localhost:8081/api/v1/tarefas', this.formulario.value, { responseType: 'text' })
    .subscribe((resposta) => {
      this.mensagem.set(resposta);
      this.formulario.reset();
    });
  }

}
