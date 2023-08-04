// famille.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilleService } from '../services/famille.service';
import { Famille } from '../models/famille';
import { Router } from '@angular/router';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {

  constructor(private familleservice: FamilleService, private router: Router) { }

  data: any

  form = new FormGroup({
    idFamille: new FormControl('', [Validators.required]),
    designationFamille: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.familleservice.createFamille(this.data).subscribe(data => {
      console.log(data);
      // Après avoir créé la famille, naviguez vers la page ViewFamilleComponent
      this.router.navigate(['/famille']);
    });
  }
}


