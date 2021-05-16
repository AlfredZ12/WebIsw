import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { XpComponent } from './xp/xp.component';
import { ScrumComponent } from './scrum/scrum.component';
import { CascadaComponent } from './cascada/cascada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { YouTubePlayerModule} from '@angular/youtube-player';



const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Contenido', component: ContenidoComponent },
  {path:'Contenido/Scrum', component: ScrumComponent},
  {path: 'Contenido/Xp', component: XpComponent},
  {path: 'Contenido/Cascada', component: CascadaComponent},
  {path: 'Contacto', component: ContactoComponent}
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ContenidoComponent,
    XpComponent,
    ScrumComponent,
    CascadaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
