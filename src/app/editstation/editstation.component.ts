import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Station } from '../models/station';

@Component({
  selector: 'app-editstation',
  templateUrl: './editstation.component.html',
  styleUrls: ['./editstation.component.css']
})
export class EditstationComponent implements OnInit {
  @Input()
  station: Station = new Station;
  @Output() onRemoveStation = new EventEmitter<string>();
  @Output() onEditStation = new EventEmitter<string>();

  constructor() {
    this.station={
      idStation:'',
      adresse:'',
      logo:'',
      designation:'',
      id:''
    }
   
  }

  ngOnInit(): void {
    
    console.log(this.station);
  }

  deleteStationClicked() {

    this.onRemoveStation.emit(this.station.idStation);
  }

  editStationClicked() {
   
    this.onEditStation.emit(this.station.idStation);
  }
}

