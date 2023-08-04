import { Component, Input, Output, EventEmitter, ElementRef,Renderer2} from '@angular/core';
import { MarqueService } from '../services/marque.service';
import { Marque } from '../models/marque';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent {
  @Input()marque?:Marque;
  mm!: Marque;
  @Output()marquePost=new EventEmitter<Marque[]>();
 marqueEdit!:Marque;
  marqueEditT!:Marque;
  public Marques:Marque[]=[];
 constructor(private marques:MarqueService,private elementRef: ElementRef,private renderer: Renderer2){}
 ngOnInit():void{
  this.marques.GetMarques().subscribe((result:Marque[]) => (this.Marques=result ));
 }
 reloadPage() {
   this.renderer.setAttribute(document.body, 'reload', 'true');
   window.location.reload();
 }

 scrollToFinPage() {
   const element = this.elementRef.nativeElement.querySelector('#finPage');
   element.scrollIntoView({ behavior: 'smooth' });
 }
 updatemarqueli(marque:Marque[]){
  this.Marques=marque;
 }
   // newMarque(){
   //    this.marqueEdit=new Marque();
      
   //  }
  edit(marque:Marque){
    this.marqueEdit=marque;
    
  }
  createmarque:Marque={
   idMarque:'',
   designationMarque:''
 };
 public deleteMarque(){
   this.marques.deleteMarque(this.createmarque).subscribe({
     next:(Marque)=>{
       console.log(Marque);
     }});
 }
 public updateMarque(){
   this.marques.updateMarque(this.createmarque).subscribe({
     next:(Marque)=>{
       console.log(Marque);
     }});
 }

 createMarque(){
   // console.log(this.addmarque);
   this.marques.createMarque(this.createmarque).subscribe({
     next:(Marque)=>{
       console.log(Marque);
     }});
 }

}

