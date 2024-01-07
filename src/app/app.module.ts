import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './hem/slideshow/slideshow.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { TidigareProjektComponent } from './tidigare-projekt/tidigare-projekt.component';
import { TjansterComponent } from './tjanster/tjanster.component';
import { VaraMaskinerComponent } from './vara-maskiner/vara-maskiner.component';
import { HemComponent } from './hem/hem.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    OmOssComponent,
    TjansterComponent,
    VaraMaskinerComponent,
    TidigareProjektComponent,
    KontaktComponent,
    HemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
