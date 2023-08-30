import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  currentPage = 1;
  totalPages = 10;
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>(`/api/data?page=${this.currentPage}&pageSize=10`).subscribe(data => {
      this.data = data;
      this.totalPages = Math.ceil(data.length / 10);
    });
  }
}
