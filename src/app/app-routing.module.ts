import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HemComponent } from './hem/hem.component';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { TjansterComponent } from './tjanster/tjanster.component';
import { VaraMaskinerComponent } from './vara-maskiner/vara-maskiner.component';
import { TidigareProjektComponent } from './tidigare-projekt/tidigare-projekt.component';


const routes: Routes = [
  { path: '', component: HemComponent, pathMatch: 'full' },
  { path: 'om-oss',component: OmOssComponent },
  { path: 'tjanster',component: TjansterComponent },
  { path: 'vara-maskiner',component: VaraMaskinerComponent },
  { path: 'tidigare-projekt',component: TidigareProjektComponent },
  { path: 'kontakt',component: KontaktComponent },
  { path: '**', component: HemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
