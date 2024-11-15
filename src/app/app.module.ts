import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCurriculoComponent } from './cadastro-curriculo/cadastro-curriculo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExperienciaFormComponent } from './cadastro-curriculo/experiencia-form/experiencia-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfCnpjPipe } from './shared/pipes/cpf-cnpj.pipe';
import { ConsultaCurriculosComponent } from './consulta-curriculos/consulta-curriculos.component';
import { DetalheCurriculoComponent } from './detalhe-curriculo/detalhe-curriculo.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCurriculoComponent,
    ExperienciaFormComponent,
    CpfCnpjPipe,
    ConsultaCurriculosComponent,
    DetalheCurriculoComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
