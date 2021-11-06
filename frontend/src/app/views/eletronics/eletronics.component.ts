import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eletronics',
  templateUrl: './eletronics.component.html',
  styleUrls: ['./eletronics.component.css']
})
export class EletronicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  Create(): void{
     this.router.navigate(["/eletronics/create"])
  }

}
