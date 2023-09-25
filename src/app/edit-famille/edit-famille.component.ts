import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilleService } from '../services/famille.service';
import { Famille } from '../models/famille';

@Component({
  selector: 'app-edit-famille',
  templateUrl: './edit-famille.component.html',
  styleUrls: ['./edit-famille.component.css']
})
export class EditFamilleComponent implements OnInit {
  famille?: Famille;
  data: any;

  constructor(
    private familleservice: FamilleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
  

  

  form = new FormGroup({
    idFamille: new FormControl('', [Validators.required]),
    designationFamille: new FormControl('', [Validators.required]),
  });

  submit() {
    this.data = this.form.value;
   

    this.familleservice.updateFamille(this.data.idFamille,this.data).subscribe(
      (data) => {
        // Assuming the update is successful, navigate back to the view page
        console.log(this.form.value);
       
       
      },
      
      
    );
    this.router.navigate(['/famille']);
   
  }
  
}


