import { CurriculumVitae } from '../../../model/curriculum';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CurriculumService } from 'src/app/service/curriculum.service';

@Component({
  selector: 'app-curriculum-listar',
  templateUrl: './curriculum-listar.component.html',
  styleUrls: ['./curriculum-listar.component.css']
})
export class CurriculumListarComponent implements OnInit {
  dataSource: MatTableDataSource<CurriculumVitae> = new MatTableDataSource();
  displayedColumns: string[] = ['idcontador', 'experiencias', 'capacidades', 'habilidades'];
  constructor(private Cs: CurriculumService) { }

  ngOnInit(): void {
    this.Cs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
 
}
