import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios/listar-usuarios.component';
import { EditarClientesComponent } from './components/usuarios/editar-clientes/editar-clientes/editar-clientes.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { PerfilUsuarioPageComponent } from './pages/perfil-usuario-page/perfil-usuario-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VisualizarInfoPeliculaComponent } from './components/peliculas/visualizar-info-pelicula/visualizar-info-pelicula.component';
import { VisualizarMiUsuarioComponent } from './components/usuarios/visualizar-mi-usuario/visualizar-mi-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VisualizarResultadoBusquedaComponent } from './components/peliculas/visualizar-resultado-busqueda/visualizar-resultado-busqueda.component';
import { ListarPeliculasComponent } from './components/listas/listar-peliculas/listar-peliculas.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { NavbarPrivateComponent } from './shared/navbar-private/navbar-private.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { BusquedaPageComponent } from './pages/busqueda-page/busqueda-page.component';
import { VisualizarPeliculasGeneroComponent } from './components/peliculas/visualizar-peliculas-genero/visualizar-peliculas-genero.component';
import { VisualizarPorGeneroPageComponent } from './pages/visualizar-por-genero-page/visualizar-por-genero-page.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomePagesComponent,
    LoginPageComponent,
    RegisterPagesComponent,
    ListarUsuariosComponent,
    EditarClientesComponent,
    EditarPageComponent,
    PerfilUsuarioPageComponent,
    SidebarComponent,
    VisualizarInfoPeliculaComponent,
    VisualizarMiUsuarioComponent,
    InicioComponent,
    VisualizarResultadoBusquedaComponent,
    LoginComponent,
    PrivatePageComponent,
    NavbarPrivateComponent,
    BuscadorComponent,
    BusquedaPageComponent, 
    ListarPeliculasComponent, 
    VisualizarPeliculasGeneroComponent, 
    VisualizarPorGeneroPageComponent, FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
