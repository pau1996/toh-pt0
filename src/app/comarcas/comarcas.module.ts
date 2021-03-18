import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComarcasComponent } from './comarcas/comarcas.component';
import { ComarcasService } from './comarcas.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EstMascComponent } from './est-masc/est-masc.component';
import { EstFemComponent } from './est-fem/est-fem.component';
import { EstTotComponent } from './est-tot/est-tot.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ComarcasComponent,
    EstMascComponent,
    EstFemComponent,
    EstTotComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  exports: [
    ComarcasComponent,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    EstMascComponent,
    EstFemComponent,
    EstTotComponent,
  ],
  providers: [ComarcasService],
})
export class ComarcasModule {}
