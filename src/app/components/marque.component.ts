import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MarqueService } from '../services/marque.service';
import { Marque } from '../models/marque';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class MarqueComponent implements OnInit {
  marqueDialog: boolean = false;
  marques: Marque[] = [];
  newMarque: Marque = {
    idMarque: '',
    designationMarque: '',
  };
  selectedMarques: Marque[] = [];
  submitted: boolean = false;

  constructor(
    private marqueService: MarqueService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadMarques();
  }

  loadMarques() {
    this.marqueService.GetMarques().subscribe((result: Marque[]) => {
      this.marques = result;
    });
  }

  editMarque(marque: Marque) {
    this.marqueDialog = true;
    this.submitted = false;
    this.newMarque = { ...marque };
  }

  openNew() {
    this.marqueDialog = true;
    this.submitted = false;
    this.newMarque = {
      idMarque: '',
      designationMarque: '',
    };
  }

  saveMarque() {
    this.submitted = true;

    if (this.newMarque.idMarque?.trim()) {
      if (this.marques.some((marque) => marque.idMarque === this.newMarque.idMarque)) {
        // Existing marque, update it
        const index = this.findIndexById(this.newMarque.idMarque);
        this.marqueService.updateMarque(this.newMarque).subscribe(() => {
          this.marques[index] = { ...this.newMarque };
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Marque Updated',
            life: 3000,
          });
        });
      } else {
        // New marque, add it
        this.marqueService.createMarque(this.newMarque).subscribe(() => {
          this.loadMarques();
          this.newMarque = {
            idMarque: '',
            designationMarque: '',
          };
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Marque Created',
            life: 3000,
          });
        });
      }

      // Reset the form and dialog
      this.marqueDialog = false;
    }
  }

  deleteSelectedMarques() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected marques?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.marques = this.marques.filter(
          (val) => !this.selectedMarques.includes(val)
        );
        this.selectedMarques = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Marques Deleted',
          life: 3000,
        });
      },
    });
  }

  deleteMarque(marque: Marque) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + marque.idMarque + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.marques = this.marques.filter(
          (val) => val.idMarque !== marque.idMarque
        );
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Marque Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.marqueDialog = false;
    this.submitted = false;
  }

  findIndexById(idMarque: string): number {
    let index = -1;
    for (let i = 0; i < this.marques.length; i++) {
      if (this.marques[i].idMarque === idMarque) {
        index = i;
        break;
      }
    }
    return index;
  }
}


