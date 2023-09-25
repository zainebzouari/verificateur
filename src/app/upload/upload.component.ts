import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  progress: number = 0;
  message: string = '';
  uploadedFile: { name: string, size: number, type: string, url: string } | null = null;

  
  constructor(private http: HttpClient) { }
  url: string|null|ArrayBuffer = 'https://localhost:7248/api/FileUpload' 

  uploadFile(files: FileList | null): void {
    if (!files || files.length === 0) {
     return;
    }

    const fileToUpload = files[0];
    const imageUrl = new FormData();
    imageUrl.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:7248/api/upload', imageUrl, { reportProgress: true, observe: 'events' })
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total!);
          } else if (event.type === HttpEventType.Response) {
            this.message = 'File uploaded successfully.';
          }
        },
          error: (err: HttpErrorResponse) => {
          this.message = 'Upload failed.';
         console.error(err);
        }
      });
  }
 //onFileSelected(files: FileList | null) {
 // if (files) {
      //var reader = new FileReader()
      //reader.readAsDataURL(files[0])
     // reader.onload = (event:Event) => {
        //let fileReader = event.target as FileReader
        //this.url = fileReader.result;
      //}
  //}
//}

}
