import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
 /*Instalar el google maps 
 ingresar en la terminal y colocar npm install @angular/google-maps*/ 
  center = {lat: -2.955152344389949, lng:  -78.9764076271043};
  zoom = 17;
  mapTypeId = "hibrid";

  constructor(){
    
  }
  ngOnInit() {
  }
}


