import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../contacto';
import { ContactoSService } from '../contacto-s.service';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {
  contacto: Contacto = new Contacto();
  submitted = false;
  nosubmitted=false;

  constructor(private contactoService: ContactoSService,
    private router: Router 
    ) {

    }

  ngOnInit() {
  }

  newAutor(): void {
    this.submitted = false;
    this.nosubmitted=false;
    this.contacto = new Contacto();
  }

  save() {
    this.contactoService.createContacto(this.contacto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contacto = new Contacto();
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