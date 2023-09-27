/*import { Component, Input, ViewChild, Output, EventEmitter, ElementRef,Renderer2} from '@angular/core';
import { StationService } from '../services/station.service';
import { Station } from '../models/station';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {
  @Input()station?:Station;
  mm!: Station;
  @Output()stationPost=new EventEmitter<Station[]>();
 stationEdit!:Station;
  stationEditT!:Station;
  data:any;
  public Stations:Station[]=[];
  fileName="";
  idStation: string | null = null;
   selectedFile: File | null = null;
  
  
  
 constructor(private StationService  :StationService,private elementRef: ElementRef,private renderer: Renderer2,private spinner: NgxSpinnerService){}
 
 

 ngOnInit():void{
  this.StationService.getStations().subscribe((result:Station[]) => (this.Stations=result ));
 }

 reloadPage() {
   this.renderer.setAttribute(document.body, 'reload', 'true');
   window.location.reload();
 }

  mygroup = new FormGroup({
    idStation: new FormControl(),
    designation: new FormControl(),
    adresse: new FormControl(),
    logo: new FormControl(),
  });
  getStations() {
    this.StationService.getStations().subscribe((result: Station[]) => {
      this.Stations = result;
      
    });
  }

// Function to create a station with an image upload
//createStation() {
  //this.spinner.show();

  // Create a FormData object to send the file
  //const formData = new FormData();
  //formData.append('file', this.selectedFile || ''); // Add the selected file to the FormData

  // Make an API call to upload the file
  //this.stations.uploadFile(formData).subscribe((response: any) => {
    //if (response.imageUrl) {
      // If the file was uploaded successfully, set the logo property of createstation
      //this.createstation.logo = response.imageUrl;
      //this.stations.createStation(this.createstation).subscribe({
       // next: (Station) => {
          //console.log(Station);
          // Reset the selected file after creating the station
          //this.selectedFile = null;
       // }
      //});
   // } else {
      // Handle the case where the file upload failed
      //console.error('File upload failed.');
    //}
  //});
//}
//}

createStation() {
  this.data = this.mygroup.value
  console.log(this.data)

  this.StationService.createStation(this.data).subscribe(data => {
    console.log(data)
  })


  

}
}*/
import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Station } from '../models/station';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
})
export class StationComponent implements OnInit, AfterViewInit {
  @Input() station: Station | undefined;
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addStationButton') addStationButton: any;
  title = 'StationCRUD';

  stationForm: FormGroup;

  stations: Station[] = [];
  stationsToDisplay: Station[] = [];
  designation: any;
  idStation: any;
  adresse: any;
  stat: any;

  constructor(
    private fb: FormBuilder,
    private stationService: StationService
  ) {
    this.stationForm = fb.group({
      idStation: [''],
      adresse: [''],
      designation: [''],
      logo: [''],
    });
  }

  ngOnInit(): void {
    this.stationService.getStations().subscribe((res: Station[]) => {
      this.stations = res;
      this.stationsToDisplay = this.stations; // Initialize stationsToDisplay with all stations
    });
  }

  ngAfterViewInit(): void {}

  addStation() {
    const station: Station = {
      idStation: this.stationForm.get('idStation')?.value,
      adresse: this.stationForm.get('adresse')?.value,
      designation: this.stationForm.get('designation')?.value,
      logo: this.fileInput.nativeElement.files[0]?.name,
      id: undefined
    };
  
    this.stationService.createStation(station).subscribe((res: any) => {
      this.stations.unshift(res);
      this.clearForm();
    });
  }
  

  removeStation(event: any) {
 
    this.stations.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.stationService.deleteStation(event).subscribe((res) => {

          this.stations.splice(index, 1);
        });
      }
    });
  }
  

  editStation(event: any) {
    this.stations.forEach((val, index) => {
      if (val.id === event) {
       this.setForm(val)
      }
        });
      this.removeStation(event)
      this.addStationButton.nativeElement.click();
    }
  
  
  setForm(stat: Station) {
    this.idStation.setValue(stat.idStation);
    this.adresse.setValue(stat.adresse);
    this.designation.setValue(stat.designation);

    this.fileInput.nativeElement.value = '';
  }

  searchStations(event: any) {
    const filteredStations: Station[] = [];

    if (event === '') {
      this.stationsToDisplay = this.stations; // Reset to display all stations
    } else {
      const searchKey = event.toLowerCase();
      this.stationsToDisplay = this.stations.filter((val) => {
        const targetKey = val.idStation?.toLowerCase()+''+val.adresse.toLowerCase()+''+val.designation.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.stationsToDisplay=filteredStations;
    }
    
  }

  clearForm() {
    this.stationForm.reset();
    this.fileInput.nativeElement.value = '';
  }
  
}
