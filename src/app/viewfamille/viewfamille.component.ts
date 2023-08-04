import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilleService } from '../services/famille.service';
import { Famille } from '../models/famille';

@Component({
  selector: 'app-viewFamille',
  templateUrl: './viewFamille.component.html',
  styleUrls: ['./viewFamille.component.css']
})
export class ViewFamilleComponent implements OnInit {

  familles: any[] | undefined
    url: string = "https://localhost:7021/api/Familles";
  
    constructor(private familleservice: FamilleService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.familleservice.getFamilles().subscribe(data => {
        this.familles = data;
      })
     
    }
  
    deleteFamille(idFamille: string){
      this.familleservice.deleteFamille(idFamille).subscribe(data => {
        this.familles = this.familles?.filter(famille => famille.idFamille !== idFamille);
      })
      
        setTimeout(()=>{
          window.location.reload();
        }, 100);
    
    }
  
    updateFamille(idFamille: string){
      this.router.navigate(['famille/update', idFamille]);
    }
  
}
