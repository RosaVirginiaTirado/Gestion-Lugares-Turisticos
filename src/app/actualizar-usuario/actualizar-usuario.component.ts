import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioSService } from '../usuario-s.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  submitted = false;
  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,private router: Router,
    private usuarioService: UsuarioSService) { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params['id'];
    
    this.usuarioService.getUsuario(this.id)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error));
  }

  updateUsuario() {
    this.submitted = false;
    this.usuarioService.updateUsuario(this.id, this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateUsuario();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
