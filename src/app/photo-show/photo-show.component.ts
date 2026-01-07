import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-photo-show',
  imports: [NgIf],
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {
  photoUrl: string = '';

  constructor(private photoService: PhotosService){
    this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photoService.getPhoto().subscribe((photoUrl) => {
      this.photoUrl = photoUrl;
    });
  }


}
