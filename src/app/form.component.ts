import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class FormComponent implements OnInit {

    myForm: FormGroup;

    constructor(
        public fb: FormBuilder
    ) {
      this.myForm=this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        usuario: ['', [Validators.required]],
        contrasena: ['', [Validators.required]],
   

      });
    }
    ngOnInit() { }
    saveData() {
        console.log(this.myForm.value);
    }

}