import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Eletronic } from './eletronics.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EletronicsService {

  baseUrl = "http://localhost:3001/tecnologias"

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
      this.snackBar.open(msg, "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"]
      });
  }

  create(eletronic: Eletronic): Observable<Eletronic> {
    return this.http.post<Eletronic>(this.baseUrl, eletronic)
  }
}
