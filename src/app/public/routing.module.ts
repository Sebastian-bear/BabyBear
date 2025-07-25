import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponentComponent } from './components/layoutComponent/layoutComponent.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { WebComponent } from './pages/web/web.component';
import { MovilComponent } from './pages/movil/movil.component';
import { TransformaciónComponent } from './pages/transformación/transformación.component';
import { OtrosComponent

 } from './pages/otros/otros.component';
const publicRoutes: Routes = [
  { 
    path: '', 
    component: LayoutComponentComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'contacto', component: ContactoComponent }, 
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'web', component: WebComponent },
      { path: 'movil', component: MovilComponent },
      { path: 'transformación', component: TransformaciónComponent },
      { path: 'otros', component: OtrosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }