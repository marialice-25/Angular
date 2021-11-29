import { Component, OnInit } from '@angular/core';
import { Eletronic } from './../eletronics.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EletronicsService } from './../eletronics.service';

@Component({
  selector: 'app-eletronics-delete',
  templateUrl: './eletronics-delete.component.html',
  styleUrls: ['./eletronics-delete.component.css']
})
export class EletronicsDeleteComponent implements OnInit {

  eletronic: Eletronic;

  constructor(
    private eletronicsService:EletronicsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
      this.eletronic = { tecnologia: "",
      descricao: "",
      valor: "",
      tempo_existencia: 0}
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id
    this.eletronicsService.readById(id).subscribe((eletronic) => {
      this.eletronic = eletronic
    });
  }

  deleteEletronics(): void {
    this.eletronicsService.delete(this.eletronic.id || 0).subscribe(() => {
      this.eletronicsService.showMessage("Eletronico excluido com sucesso");
      this.router.navigate(["/eletronics"])
    })
  }

  cancel():void {
    this.router.navigate(["/eletronics"])
  }
}
