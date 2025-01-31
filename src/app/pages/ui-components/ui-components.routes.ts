import { Routes } from '@angular/router';
import { AppCadastrarColetaComponent } from './cadastrar-coleta/cadastrar-coleta.component';
import { AppListarColetaComponent } from './listar-coleta/listar-coleta.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cadastrar-coleta',
        component: AppCadastrarColetaComponent,
      },
      {
        path: 'listar-coleta',
        component: AppListarColetaComponent,
      },
    ],
  },
];
