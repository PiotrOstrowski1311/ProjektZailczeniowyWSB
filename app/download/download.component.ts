import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.genArray();
    this.selected(0);
  }

  public totalItems: number = 95;
  word: string = '';
  public itemArray = [];
  public arrFilter = [];
  pointer: number = 0;
  itemSign = ['A', 'B', 'E', '1', 'L', '0', 'Y', 'S', 'R', 'U'];

  genArray() {
    this.totalItems = Math.floor( Math.random() * 100 + 5 )
    
    for (let j = 0; j <= this.totalItems; j++) {
      for (let i = 0; i < 6; i++) {
        this.pointer = Math.floor(Math.random() * 10);
        this.word = this.word + this.itemSign[this.pointer];
      }
      this.itemArray[j] = j + '#' + this.word;
      this.word = '';
    }
   console.table(this.itemArray);
  }

  selected(element) {
    // console.log( Math.ceil(element*10));
    // początek jako 10 elementów
    let beginSlice = Math.ceil(element*10); 
    // tworzy nową tablicę na podstawie 10 elementów
    this.arrFilter = this.itemArray.slice( beginSlice, beginSlice + 10 )


    console.log(this.arrFilter);
  }



}
