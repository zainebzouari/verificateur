import { Component,OnInit,EventEmitter,Output,Input,Renderer2} from '@angular/core';
import { Marque } from '../models/marque';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-edit-marque',
  templateUrl: './edit-marque.component.html',
  styleUrls: ['./edit-marque.component.css']
})
export class EditMarqueComponent {
  public Marques:Marque[]=[];
  @Input() marque?:Marque;
  @Output() marqueUpdated=new EventEmitter<Marque[]>();
  constructor(private marques:MarqueService,private renderer: Renderer2){}
  ngOnInit():void{}
  reloadPage() {
    this.renderer.setAttribute(document.body, 'reload', 'true');
    window.location.reload();
  }
  public updateMarque(marque:Marque){
    this.marques.updateMarque(marque).subscribe((result:Marque[]) => this.marqueUpdated.emit(result ));
  }

  public deleteMarque(marque:Marque){
    this.marques.deleteMarque(marque).subscribe({
      next:(Marque)=>{
        console.log(Marque);
      }});
  }

  public createMarque(marque:Marque){
    this.marques.createMarque(marque).subscribe((result:Marque[]) => this.marqueUpdated.emit(result ));
  }


}

