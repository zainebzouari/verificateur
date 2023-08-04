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
    let idFamille = this.route.snapshot.params['idFamille'];
    this.familleservice.getFamilleById(idFamille).subscribe(
      (data) => {
       
        this.form.patchValue({
          idFamille: '',
          designationFamille: '',
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  form = new FormGroup({
    idFamille: new FormControl('', [Validators.required]),
    designationFamille: new FormControl('', [Validators.required]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);

    this.familleservice.updateFamille(this.data).subscribe(
      (data) => {
        console.log(data);
        // Assuming the update is successful, navigate back to the view page
        this.router.navigate(['/famille']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

