import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioSService } from '../usuario-s.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
 user: Usuario = new Usuario();
  submitted = false;
  nosubmitted=false;

  constructor(private usuarioService: UsuarioSService,
    private router: Router 
    ) {

    }

  ngOnInit() {
  }

  newUsuario(): void {

    
    this.submitted = false;
    this.nosubmitted=false;
    this.user = new Usuario();
    
  }

  save() {
    this.usuarioService.createUsuario(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
 this.user = new Usuario();
    this.gotoList();
    
    
    console.log(this.user);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  noSubmit() {
    this.submitted = false;
    this.gotoList2();
 
  }

  gotoList() {
    this.router.navigate(['/CrearUsuario']);
  }
  gotoList2() {
    this.router.navigate(['']);
  }
}