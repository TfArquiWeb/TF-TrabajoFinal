import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipomoneda',
  templateUrl: './tipomoneda.component.html',
  styleUrls: ['./tipomoneda.component.css']
})
export class TipomonedaComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
