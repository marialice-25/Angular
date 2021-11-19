import { Component, OnInit } from '@angular/core';
import { EletronicsService } from '../eletronics.service';
import { Eletronic } from "../eletronics.model";

@Component({
  selector: 'app-eletronics-read',
  templateUrl: './eletronics-read.component.html',
  styleUrls: ['./eletronics-read.component.css']
})
export class EletronicsReadComponent implements OnInit {

   eletronics:Eletronic[];
   displayedColumns = ["id", "tecnologia", "descricao", "valor", "tempo_existencia"]

  constructor(private eletronicService: EletronicsService) { 
    this.eletronics = []
  }


  ngOnInit(): void {
   this.eletronicService.read().subscribe((eletronics) => {
     this.eletronics = eletronics
     console.log(eletronics)
   });

  }

}
