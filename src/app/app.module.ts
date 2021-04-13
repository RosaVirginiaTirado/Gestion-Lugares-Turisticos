import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { ActualizarContactoComponent } from './actualizar-contacto/actualizar-contacto.component';
import { ListarContactoComponent } from './listar-contacto/listar-contacto.component';
import { DetalleContactoComponent } from './detalle-contacto/detalle-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { CearSitioComponent } from './cear-sitio/cear-sitio.component';
import { ActualizarSitioComponent } from './actualizar-sitio/actualizar-sitio.component';
import { ListarSitioComponent } from './listar-sitio/listar-sitio.component';
import { DetalleSitioComponent } from './detalle-sitio/detalle-sitio.component';
import { EliminarSitioComponent } from './eliminar-sitio/eliminar-sitio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { IglesiasComponent } from './iglesias/iglesias.component';
import { MuseosComponent } from './museos/museos.component';
import { DeportesComponent } from './deportes/deportes.component';
import { TransporteComponent } from './transporte/transporte.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PiePaginaComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    ListarUsuarioComponent,
    DetalleUsuarioComponent,
    EliminarUsuarioComponent,
    CrearContactoComponent,
    ActualizarContactoComponent,
    ListarContactoComponent,
    DetalleContactoComponent,
    EliminarContactoComponent,
    CearSitioComponent,
    ActualizarSitioComponent,
    ListarSitioComponent,
    DetalleSitioComponent,
    EliminarSitioComponent,
    NaturalezaComponent,
    HotelesComponent,
    IglesiasComponent,
    MuseosComponent,
    DeportesComponent,
    TransporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
