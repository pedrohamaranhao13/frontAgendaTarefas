import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/shared/menu/menu';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from "./components/pages/dashboard/dashboard";
import { CadastrarTarefas } from "./components/pages/cadastrar-tarefas/cadastrar-tarefas";
import { ConsultarTarefas } from "./components/pages/consultar-tarefas/consultar-tarefas";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Menu,
    Dashboard,
    CadastrarTarefas,
    ConsultarTarefas
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
