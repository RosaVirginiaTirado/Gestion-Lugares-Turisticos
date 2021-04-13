import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sitio } from '../sitio';
import { SitioSService } from '../sitio-s.service';

@Component({
  selector: 'app-cear-sitio',
  templateUrl: './cear-sitio.component.html',
  styleUrls: ['./cear-sitio.component.css']
})
export class CearSitioComponent implements OnInit {

  sitio: Sitio = new Sitio();
  submitted = false;
  nosubmitted=false;

  constructor(private sitioService: SitioSService,
    private router: Router 
    ) {

    }

  ngOnInit() {
  }

  newSitio(): void {
    this.submitted = false;
    this.nosubmitted=false;
    this.sitio= new Sitio();
  }

  save() {
    this.sitioService.createSitio(this.sitio)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sitio = new Sitio();
    this.gotoList();
    
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
    this.router.navigate(['']);
  }
  gotoList2() {
    this.router.navigate(['']);
  }
}