import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCurriculoComponent } from './cadastro-curriculo/cadastro-curriculo.component';
import { ConsultaCurriculosComponent } from './consulta-curriculos/consulta-curriculos.component';
import { DetalheCurriculoComponent } from './detalhe-curriculo/detalhe-curriculo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroCurriculoComponent },
  { path: 'consulta', component: ConsultaCurriculosComponent },
  { path: 'consulta/:id', component: DetalheCurriculoComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
