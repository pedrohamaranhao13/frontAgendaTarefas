import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/shared/menu/menu';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Menu
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Criar um objeto do tipo HttClient
  private http = inject(HttpClient);

  // função para ao abrir a página consultar as categorias na API
  ngOnInit() {
    // fazendo uma chamada para o serviço de consulta de categorias
    this.http.get('http://localhost:8081/api/v1/categorias')
            .subscribe((dados) => console.table(dados));
  }
}
