import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstFemComponent } from './comarcas/est-fem/est-fem.component';
import { EstMascComponent } from './comarcas/est-masc/est-masc.component';
import { EstTotComponent } from './comarcas/est-tot/est-tot.component';

const routes: Routes = [
  { path: '', component: EstMascComponent },
  { path: 'Comarcas/Masculino', component: EstMascComponent },
  { path: 'Comarcas/Femenino', component: EstFemComponent },
  { path: 'Comarcas/General', component: EstTotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
