import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sitio } from '../sitio';
import { SitioSService } from '../sitio-s.service';
import { UsuarioSService } from '../usuario-s.service';

@Component({
  selector: 'app-actualizar-sitio',
  templateUrl: './actualizar-sitio.component.html',
  styleUrls: ['./actualizar-sitio.component.css']
})
export class ActualizarSitioComponent implements OnInit {
  submitted = false;
  id: number;
  sitio: Sitio;

  constructor(private route: ActivatedRoute,private router: Router,
    private sitioService: SitioSService) { }

  ngOnInit() {
    this.sitio = new Sitio();

    this.id = this.route.snapshot.params['id'];
    
    this.sitioService.getSitio(this.id)
      .subscribe(data => {
        console.log(data)
        this.sitio = data;
      }, error => console.log(error));
  }

  updateSitio() {
    this.submitted = false;
    this.sitioService.updateSitio(this.id, this.sitio)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sitio = new Sitio();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateSitio();
  }

  gotoList() {
    this.router.navigate(['/ListadoAutores']);
  }
}