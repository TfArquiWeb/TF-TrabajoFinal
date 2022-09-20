import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudempleo',
  templateUrl: './solicitudempleo.component.html',
  styleUrls: ['./solicitudempleo.component.css']
})
export class SolicitudempleoComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
