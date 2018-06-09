import { Component, OnInit, NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  title = 'app';
  lat= 51.111752;
  lng= 16.977267;
  zoom: number = 15;


  markers: marker[] = [
    {
      lat: 51.113033,
      lng: 16.981337
    },
    {
      lat: 51.114033,
      lng: 16.971337 
    },
    {
      lat: 51.112033,
      lng: 16.974337 
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  
}


interface marker {
  lat: number;
  lng: number;
}

