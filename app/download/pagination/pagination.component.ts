import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItem: number;
  // @Input() itemArray: number[];
  @Output() selEl = new EventEmitter<number>();

  public totalPage: number[];
  public elementCount: number = 10;
  public selected: number;

  setPagesCount() {
    // ilosc podstron paginacji po 10 elementow 
    this.totalPage = Array(Math.ceil(this.totalItem / this.elementCount)).fill(0);
    

     //console.log('-----length totalPage',this.totalPage.length);
    //console.log('itemArray', this.itemArray);
  }


  showElement(i) {
    console.info('-----selected element', i);
    this.selected = i;
    this.selEl.emit(i);

  }

  constructor() { }

  ngOnInit() {

    this.setPagesCount();
    this.showElement(0);
  }





}
