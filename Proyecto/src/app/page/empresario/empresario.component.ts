import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresario',
  templateUrl: './empresario.component.html',
  styleUrls: ['./empresario.component.css']
})
export class EmpresarioComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
