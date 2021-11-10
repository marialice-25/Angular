import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EletronicsService } from '../eletronics.service';
import { Eletronic } from "../eletronics.model";


@Component({
  selector: 'app-eletronics-create',
  templateUrl: './eletronics-create.component.html',
  styleUrls: ['./eletronics-create.component.css']
})
export class EletronicsCreateComponent implements OnInit {

  eletronic: Eletronic = {
    tecnologia: "Robos",
    descricao: "Industrias",
    valor: "mediano",
    tempo_existencia: 50,
  }

  constructor(private eletronicsService: EletronicsService, private router: Router) { }

  ngOnInit(): void {}

  createEletronics(): void{
    this.eletronicsService.create(this.eletronic).subscribe(() => {
      this.eletronicsService.showMessage("Eletrônico cadastrado!");
      this.router.navigate(["/eletronics"])
    })

  } 

  cancel(): void{
    this.router.navigate(["/eletronics"]);
  }
}
