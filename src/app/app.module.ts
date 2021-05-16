import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { XpComponent } from './xp/xp.component';
import { ScrumComponent } from './scrum/scrum.component';
import { CascadaComponent } from './cascada/cascada.component';


const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Contenido', component: ContenidoComponent },
  {path:'Contenido/Scrum', component: ScrumComponent},
  {path: 'Contenido/Xp', component: XpComponent},
  {path: 'Contenido/Cascada', component: CascadaComponent}
  
  
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
    CascadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
