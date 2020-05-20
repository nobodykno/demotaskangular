import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  public imagePath;
  imgURL: any;
  filestore:any=[]
  public message: string;

  preview(files) {

console.log(files);
    //this.filestore.push(files)
    //console.log(this.filestore)
    // if (files.length === 0)
    //   return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      //this.filestore = reader.result;
      this.filestore.push(reader.result)
      console.log(this.filestore)

    }

  }
  deleteImage(index:any){
    debugger


  this.filestore = this.filestore.filter((a) => a !== this.filestore[index]);

 console.log(this.filestore);
  }

  }

