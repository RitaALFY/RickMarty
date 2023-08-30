import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  exportAs: 'pagination'
})
export class PaginationComponent implements OnInit {

  @Input() actualPage: number = 0;
  @Output() actualPageEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newPage: number){
    this.actualPage = newPage;
    this.actualPageEmitter.next(this.actualPage);
  }
}


