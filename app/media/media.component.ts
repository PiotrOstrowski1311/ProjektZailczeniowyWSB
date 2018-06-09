import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval( () =>
        this.selectNext(this.currentPicture), 3000 );
  }

  currentPicture: number = 0;

  selectPict(i) {
    return this.currentPicture = i;
  }

  selectPrev(currentPicture) {
    if (currentPicture === 0) return this.currentPicture = this.pictures.length-1;
    else return this.currentPicture -= 1; 
  }

  selectNext(currentPicture) {
    if (currentPicture === this.pictures.length - 1) return this.currentPicture = 0;
    else return this.currentPicture += 1;
  }

  pictures = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/5.jpg'
  
  ]




}
