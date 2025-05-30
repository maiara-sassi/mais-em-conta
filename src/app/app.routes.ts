import { Routes } from '@angular/router';
import {ListaComponent} from './pages/lista/lista.component';
import {ComparadorComponent} from './pages/comparador/comparador.component';
import {HomeComponent} from './pages/home/home.component';
import {OrcamentoComponent} from './pages/orcamento/orcamento.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comparador', component: ComparadorComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: '**', redirectTo: '' },
];
