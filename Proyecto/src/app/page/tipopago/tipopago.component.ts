import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipopago',
  templateUrl: './tipopago.component.html',
  styleUrls: ['./tipopago.component.css']
})
export class TipopagoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
