import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importar RouterModule
import { DashboardComponent } from './dashboard.component'; // Importar o componente

// Definir as rotas internas do módulo
const routes: Routes = [
  { path: 'info', component: DashboardComponent } // Rota padrão para o componente
];

@NgModule({
  // declarations: [DashboardComponent], // Declarar o componente
  // exports: [DashboardComponent]
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Configurar rotas do módulo
  ],
})
export class DashboardModule {}
