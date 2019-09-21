import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo : any;

  constructor() { 
    this.correo = {
      "titulo": "Titulo del correo",
      "cuerpo": "Cuerpo del correo ",
      "Emisor": "Emisor",
      "Destinatario":"Destinatario"
    };

  }

  ngOnInit() {
  }

}
