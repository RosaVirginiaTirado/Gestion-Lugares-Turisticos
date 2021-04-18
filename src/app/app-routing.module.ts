import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';
import { ActualizarSitioComponent } from './actualizar-sitio/actualizar-sitio.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

import { CearSitioComponent } from './cear-sitio/cear-sitio.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

import { DeportesComponent } from './deportes/deportes.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { IglesiasComponent } from './iglesias/iglesias.component';
import { MuseosComponent } from './museos/museos.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { TransporteComponent } from './transporte/transporte.component';



const routes: Routes = [ 
  {path:'' ,redirectTo:'Cinicio', pathMatch:'full'},
  {path:'Cinicio', component: CuerpoComponent },
  {path:'Cinicio/CrearUsuario', component: CrearUsuarioComponent},
  {path:'Cinicio/CrearContacto', component: CrearContactoComponent },
  {path:'Cinicio/CrearSitio', component: CearSitioComponent },
  {path:'Cinicio/ActualizarUsuario', component: ActualizarUsuarioComponent },
  {path:'Cinicio/ActualizarSitio', component: ActualizarSitioComponent },
  {path:'Cinicio/actualizarContacto', component: ActualizarContactoComponent },
  {path:'Cinicio/naturaleza', component: NaturalezaComponent },
  {path:'Cinicio/iglesias', component: IglesiasComponent},
  {path:'Cinicio/museos', component: MuseosComponent },
  {path:'Cinicio/deportes', component: DeportesComponent},
  {path:'Cinicio/hoteles', component: HotelesComponent },
  {path:'Cinicio/transporte', component: TransporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
