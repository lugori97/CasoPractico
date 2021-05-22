import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearnotaComponent} from "../app/components/crearnota/crearnota.component"
import {ActualizarnotasComponent} from "../app/components/actualizarnotas/actualizarnotas.component"
import {FooterComponent} from "../app/components/footer/footer.component"
import {ListarnotasComponent} from "../app/components/listarnotas/listarnotas.component"

const routes: Routes = [
  {path: '', component:CrearnotaComponent},
  {path: 'actualizarnota/:id', component:ActualizarnotasComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'lista-notas', component:ListarnotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
